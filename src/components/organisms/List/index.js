import React, { useRef } from 'react';
import { addIcon } from '../../../icons/addIcon';
import { Icon } from '../../atoms/Icon';
import { ListHeader } from '../../molecules/ListHeader';
import { Card } from '../../molecules/Card';
import { Button } from '../../atoms/Button';
import { AddCard } from '../../molecules/AddCard';
import { useToggle } from '../../../hooks/useToggle';
import { useTrelloStore } from '../../../store/trelloStore';
import { useDrop, useDrag } from 'react-dnd';
import { itemTypes } from '../../../dnd/itemTypes';
import "./styles.css";

export const List = ({ list, order }) => {
  const [isOpenAddCard, toggleAddCard] = useToggle(false);
  const allCards = useTrelloStore((state) => state.cards);
  const listTitles = useTrelloStore((state) => state.listTitles);

  const getCards = useTrelloStore((state) => state.getCards);
  const getTitle = useTrelloStore((state) => state.getTitle);

  const moveCard = useTrelloStore((state) => state.moveCard);
  const moveListTitles = useTrelloStore((state) => state.moveListTitles);
  const moveList = useTrelloStore((state) => state.moveList);

  
  const listTitle =  getTitle(list?.id);
  const cards = getCards(list?.id);

  const listRef = useRef();
  
  const [{isOver}, drop] = useDrop(() => ({
    accept: [itemTypes.CARD, itemTypes.LIST_TITLE, itemTypes.LIST],

    drop: (item, monitor) => {
      if (item.type === itemTypes.CARD) 
        moveCard(item.card, list?.id)
      if (item.type === itemTypes.LIST_TITLE)
        moveListTitles(item.listTitle, list?.id)
      if (item.type === itemTypes.LIST)
        moveList(item.list, item.order, order)
    },
    collect: (monitor) => ({
      isOver: monitor.isOver()
    })
  }), [order])

  const [{isDragging}, drag, _] = useDrag(() => ({
    type: itemTypes.LIST,
    item: {
      list,
      order,
      type: itemTypes.LIST
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  }), [list, order]);

  drag(drop(listRef))

  return (
    <div ref={listRef} className={`list-container ${isOver && "list-container-drop-on"} ${isDragging && "list-container-drag-on"}`}>
      <ListHeader listTitle={listTitle} />

      {cards.map((card) => (
        <Card key={card?.id} card={card} />
      ))}

      {isOpenAddCard && (
        <AddCard listId={list?.id} close={toggleAddCard} />
      )}

      <div className='add-card-button'>
        <Button icon={<Icon svg={addIcon} />} onClick={() => toggleAddCard(true)}>Add Card</Button>
      </div>

    </div>
  )
}