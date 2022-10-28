import React from 'react'
import { addIcon } from '../../icons/addIcon'
import { Button } from '../atoms/Button'
import { Icon } from '../atoms/Icon'

export const Home = () => {
  return (
    <>
      <Button icon={<Icon svg={addIcon} />} variant={"secondary"}> Button </Button>
        {/* <Icon icon={addIcon} /> */}

    </>
  )
}
