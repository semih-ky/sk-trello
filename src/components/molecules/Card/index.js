import React from 'react';
import { useToggle } from '../../../hooks/useToggle';
import { CardBody } from '../../atoms/CardBody';
import { CardHover } from '../../atoms/CardHover';
import { CardTitle } from '../../atoms/CardTitle';
import { Tag } from '../../atoms/Tag';
import "./styles.css";

export const Card = () => {

  const [isHover, toggleIsHover] = useToggle(false);

  return (
    <CardBody onMouseEnter={toggleIsHover} onMouseLeave={toggleIsHover}>
      <CardHover isHover={isHover} />
      <CardTitle title={"Wellcome to our trello app. Begin your jorney. First, create your first list."} />
      <div className='card-tag-wrapper'>
        <Tag tagName={"new-user"} colorIndex={0} />
        <Tag tagName={"panel"} colorIndex={1} />
        <Tag tagName={"backend"} colorIndex={2} />
        <Tag tagName={"server"}  />
      </div>
    </CardBody>
  )
}
