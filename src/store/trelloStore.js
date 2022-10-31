import create from "zustand";
import { initialState } from "./mock";

export const useTrelloStore = create((set, get) => ({
  lists: initialState.lists,
  listTitles: initialState.listTitles,
  cards: initialState.cards,
  tags: initialState.tags,
  comments: initialState.comments,
  selectedCard: null,
  isModalOpen: false,
  searchData: null,

  moveList: (list, oldTarget, newTarget) => set((state) => {
    const lists = state.lists;
    const newTargetList = lists[newTarget]
    lists.splice(newTarget, 1, list);
    lists.splice(oldTarget, 1, newTargetList);

    return { lists: [...lists] }
  }),

  moveCard: (card, target) => set((state) => {
    const cards = state.cards;
    const updatedCards = cards.filter(item => item.id !== card.id);
    card.listId = target;
    updatedCards.push(card);
    return { cards: updatedCards }
  }),

  moveListTitles: (listTitle, target) => set((state) => {
    const listTitles = state.listTitles;
    const targetListTitle = listTitles.find(title => title.listId === target);
    if (listTitle.listId === target) return { listTitles: listTitles };
    if (!targetListTitle) return { listTitles: listTitles };

    const updatedListTitles = listTitles.map(title => {
      if (title.id === targetListTitle.id) {
        return {
          ...title,
          listId: listTitle.listId
        }
      }
      if (title.id === listTitle.id) {
        return {
          ...title,
          listId: target,
        }
      }
      return { ...title }
    })
    return { listTitles: updatedListTitles }
  }),

  addSearchData: (data) => set({ searchData: data }),
  
  getTitle: (listId) => {
    const allTitles = get().listTitles
    return allTitles.find((title) => title.listId === listId)
  },
  
  getCards: (listId) => {
    const allCards = get().cards
    return allCards.filter((card) => card.listId === listId)
  },
  getTags: (cardId) => {
    const allTags = get().tags
    return allTags.filter((tag) => tag.cardId === cardId)
  },
  getComments: (cardId) => {
    const allComments = get().comments
    return allComments.filter((comment) => comment.cardId === cardId)
  },
  
  addList: (data) => set((state) => ({ 
    lists: [...state.lists, data.list],
    listTitles: [...state.listTitles, data.listTitle]
  })),
  
  addCard: (data) => set((state) => ({ cards: [...state.cards, data]})),

  deleteCard: (id) => set((state) => ({ cards: state.cards.filter(card => card.id !== id)})),
  
  deleteList: (id) => set((state) => ({ lists: state.lists.filter(list => list.id !== id)})),
  
  selectCard: (card) => set({ selectedCard: card }),
  
  modalOpen: () => set({ isModalOpen: true }),
  
  modalClose: () => set({ isModalOpen: false }),
  
  deleteTag: (id) => set((state) => ({ tags: state.tags.filter(tag => tag.id !== id)})),
  
  deleteComment: (id) => set((state) => ({ comments: state.comments.filter(comment => comment.id !== id)})),
  
  addTag: (data) => set((state) => ({ tags: [...state.tags, data]})),
  
  addComment: (data) => set((state) => ({ comments: [...state.comments, data]})),
  
  updateTag: (cardId, index, data) => set((state) => {
    const tags = get().getTags(cardId);
    const otherTags = state.tags.filter((tag) => tag.cardId !== cardId)
    tags.splice(index, 1, data);
    return { tags: [...otherTags, ...tags] }
  }),
  
  updateComment: (cardId, index, data) => set((state) => {
    const comments = get().getComments(cardId);
    const otherComments = state.comments.filter((comment) => comment.cardId !== cardId)
    comments.splice(index, 1, data);
    return { comments: [...otherComments, ...comments] }
  }),

  searchCards: (searchValue) => {
    const regex = new RegExp(searchValue, 'i');
    const cards = get().cards;
    const tags = get().tags;
    const comments = get().comments;

    const resCards = cards.filter(card => regex.test(card.title));
    const resTags = tags.filter(tag => regex.test(tag.title));
    const resComments = comments.filter(comment => regex.test(comment.text));

    // const resCardsId = resCards.map(card => card.id);
    // const resTagsCardsId = resTags.map(tag => tag.cardId);
    // const resCommentsCardsId = resComments.map(comment => comment.cardId);

    // const allCardId = [...resCardsId, ...resTagsCardsId, ...resCommentsCardsId];

    // const uniqItems = [...new Set(allCardId)]

    // const results = cards.filter(card => uniqItems.includes(card.id))


    const allRes = [...resCards, ...resTags, ...resComments];
    
    const uniqItems = allRes.filter((item, index) => {
      if (item?.cardId) {
        return allRes.findIndex((el) => el?.cardId === item.cardId) === index
      } else {
        return allRes.findIndex((el) => el?.id === item.id) === index
      }
    });

    const results = cards.filter(card => {
      const isCard = uniqItems.findIndex((el) => {
        if (el?.cardId) {
          return el.cardId === card.id
        } else {
          return el.id === card.id
        }
      });
      if (isCard > -1) return true;
      return false;
    })
    
    return results;
  },
}))