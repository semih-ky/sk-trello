import React from 'react'
import './styles.css'

export const TagTitle = ({ children, title }) => {
  return (
    <div className='tag-title'>
      <p className="tag">{ title }</p>
      { children }
    </div>
  )
}