import React, { useState } from 'react'
import { Tag } from '../Tag'
import { ellipsisIcon } from '../../../icons/ellipsisIcon'
import { IconButton } from '../../atoms/IconButton'
import { trashIcon } from '../../../icons/trashIcon'
import { checkIcon } from '../../../icons/checkIcon'
import { xmarkIcon } from '../../../icons/xmarkIcon'
import { useToggle } from '../../../hooks/useToggle'
import { TagTitle } from '../../atoms/TagTitle'
import { useTrelloStore } from '../../../store/trelloStore'
import './styles.css'

export const TagControl = ({ cardId, tag, index }) => {
  const deleteTag = useTrelloStore(state => state.deleteTag);
  const updateTag = useTrelloStore(state => state.updateTag);
  const [newTagTitle, setNewTagTitle] = useState("");
  const [isEdit, toggleEdit] = useToggle(false);

  const updateTagHandler = () => {
    updateTag(cardId, index, {
      ...tag,
      title: newTagTitle,
    })
    setNewTagTitle("");
    toggleEdit();
  }

  return (
    <Tag colorIndex={tag?.colorIndex}>
      <TagTitle title={tag?.title}>
        {isEdit && (
          <input 
            autoFocus 
            type={"text"} 
            className="tag-control-edit" 
            value={newTagTitle} 
            onChange={(e) => setNewTagTitle(e.target.value)} 
          />
        )}
      </TagTitle>
      <div className='tag-control-buttons'>
        {isEdit && (
          <IconButton svg={checkIcon} variant={"primary"} onClick={updateTagHandler} />
        )}
        <IconButton svg={isEdit ? xmarkIcon : ellipsisIcon} variant={"secondary"} onClick={toggleEdit} />
        {isEdit || (
          <IconButton svg={trashIcon} variant={"secondary"} onClick={() => deleteTag(tag?.id)} />
        )}
      </div>
    </Tag>
  )
}
