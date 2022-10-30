import React from 'react'
import { useTrelloStore } from '../../../store/trelloStore'
import { List } from '../List'
import './styles.css'

export const Board = () => {
  const lists = useTrelloStore((state) => state.lists)

  return (
    <div className='board'>
      {lists.map(list => (
        <List key={list?.id} list={list} />
      ))}
    </div>
  )
}
