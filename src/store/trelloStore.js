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
  })
}))