import React from 'react'
import styles from './itemListContainer.modules.scss'

const ItemListContainer = ({greeting}) => {
  return (
    <div className='title'><p>{greeting}</p></div>
  )
}

export default ItemListContainer