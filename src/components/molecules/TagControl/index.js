import React from 'react'
import { Tag } from '../Tag'
import { ellipsisIcon } from '../../../icons/ellipsisIcon'
import { IconButton } from '../../atoms/IconButton'
import { trashIcon } from '../../../icons/trashIcon'
import { checkIcon } from '../../../icons/checkIcon'
import { useToggle } from '../../../hooks/useToggle'
import { TagTitle } from '../../atoms/TagTitle'
import './styles.css'
import { xmarkIcon } from '../../../icons/xmarkIcon'

export const TagControl = () => {

  const [isEdit, toggleEdit] = useToggle(false);

  return (
    <Tag colorIndex={0}>
      <TagTitle title={"push-panel"}>
        {isEdit && (
          <input autoFocus type={"text"} className="tag-control-edit" />
        )}
      </TagTitle>
      <div className='tag-control-buttons'>
        {isEdit && (
          <IconButton svg={checkIcon} variant={"primary"} />
        )}
        <IconButton svg={isEdit ? xmarkIcon : ellipsisIcon} variant={"secondary"} onClick={toggleEdit} />
        {isEdit || (
          <IconButton svg={trashIcon} variant={"secondary"} />
        )}
      </div>
    </Tag>
  )
}
