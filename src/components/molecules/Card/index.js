import React from 'react';
import { CardBody } from '../../atoms/CardBody';
import { CardTitle } from '../../atoms/CardTitle';
import { Tag } from '../../atoms/Tag';
import "./styles.css";

export const Card = () => {
  return (
    <CardBody>
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
