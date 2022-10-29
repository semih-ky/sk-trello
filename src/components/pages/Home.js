import React from 'react'
import { addIcon } from '../../icons/addIcon'
import { Button } from '../atoms/Button'
import { Icon } from '../atoms/Icon'
import { IconButton } from '../atoms/IconButton'
import { AddList } from '../molecules/AddList'
import { SearchInput } from '../molecules/SearchInput'
import { Header } from '../organisms/Header'
import { List } from '../organisms/List'


export const Home = () => {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column"
    }}>
      <Header />
      <div style={{
        display: "felx",
        margin: "20px"
      }}>
        <List />

      </div>
    </div>
  )
}
