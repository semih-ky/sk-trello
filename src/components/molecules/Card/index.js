import React from 'react';
import { useToggle } from '../../../hooks/useToggle';
import { CardBody } from '../../atoms/CardBody';
import { CardHover } from '../../atoms/CardHover';
import { CardTitle } from '../../atoms/CardTitle';
import { Tag } from '../Tag';
import { TagTitle } from '../../atoms/TagTitle';
import "./styles.css";

export const Card = () => {

  const [isHover, toggleIsHover] = useToggle(false);

  return (
    <CardBody onMouseEnter={toggleIsHover} onMouseLeave={toggleIsHover}>
      <CardHover isHover={isHover} />
      <CardTitle title={"Wellcome to our trello app. Begin your jorney. First, create your first list."} />
      <div className='card-tag-wrapper'>

        <Tag colorIndex={0}>
          <TagTitle title={"new-user"} />
        </Tag>
        <Tag colorIndex={1}>
          <TagTitle title={"panel"} />
        </Tag>
        <Tag colorIndex={2}>
          <TagTitle title={"backend"} />
        </Tag>
        <Tag>
          <TagTitle title={"server"} />
        </Tag>

      </div>
    </CardBody>
  )
}
