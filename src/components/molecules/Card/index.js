import React from 'react';
import { useToggle } from '../../../hooks/useToggle';
import { CardBody } from '../../atoms/CardBody';
import { CardHover } from '../../atoms/CardHover';
import { CardTitle } from '../../atoms/CardTitle';
import { Tag } from '../Tag';
import { TagTitle } from '../../atoms/TagTitle';
import "./styles.css";
import { useTrelloStore } from '../../../store/trelloStore';

export const Card = ({ card }) => {

  const [isHover, toggleIsHover] = useToggle(false);
  
  const modalOpen = useTrelloStore((state) => state.modalOpen);
  const selectCard = useTrelloStore((state) => state.selectCard);
  const allTags = useTrelloStore((state) => state.tags);

  const getTags = useTrelloStore((state) => state.getTags);
  const tags = getTags(card?.id);

  const cardClickHandler = () => {
    selectCard(card);
    modalOpen();
  }

  return (
    <CardBody 
      card={card} 
      onClick={cardClickHandler} 
      onMouseEnter={toggleIsHover} 
      onMouseLeave={toggleIsHover}
    >
      <CardHover isHover={isHover} />
      <CardTitle title={card?.title} />
      <div className='card-tag-wrapper'>
        {tags.map(tag => (
          <Tag key={tag?.id} colorIndex={tag?.colorIndex}>
            <TagTitle title={tag?.title} />
          </Tag>
        ))}
      </div>
    </CardBody>
  )
}
