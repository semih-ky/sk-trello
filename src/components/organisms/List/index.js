import React from 'react';
import { addIcon } from '../../../icons/addIcon';
import { Icon } from '../../atoms/Icon';
import { ListHeader } from '../../molecules/ListHeader';
import { Card } from '../../molecules/Card';
import { Button } from '../../atoms/Button';
import { AddCard } from '../../molecules/AddCard';
import { useToggle } from '../../../hooks/useToggle';
import { useTrelloStore } from '../../../store/trelloStore';
import "./styles.css";

export const List = ({ list }) => {
  const [isOpenAddCard, toggleAddCard] = useToggle(false);
  const allCards = useTrelloStore((state) => state.cards);
  const listTitles = useTrelloStore((state) => state.listTitles);

  const getCards = useTrelloStore((state) => state.getCards);
  const getTitle = useTrelloStore((state) => state.getTitle);
  const listTitle =  getTitle(list?.id);
  const cards = getCards(list?.id);

  return (
    <div className='list-container'>
      <ListHeader listId={list?.id} title={listTitle?.title} />

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