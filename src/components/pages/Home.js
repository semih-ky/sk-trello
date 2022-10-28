import React from 'react'
import { addIcon } from '../../icons/addIcon'
import { Button } from '../atoms/Button'
import { Icon } from '../atoms/Icon'
import { IconButton } from '../atoms/IconButton'
import { SearchInput } from '../molecules/SearchInput'


export const Home = () => {
  return (
    <div style={{margin: "20px"}}>
      <SearchInput  />

    </div>
  )
}
