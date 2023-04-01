import React from 'react'
import ItemList from '../itemList'
import styles from './itemListContainer.modules.scss'

const ItemListContainer = () => {
  return (
    <section className='product'>
      <h2 className='product__title'>Nuestros productos</h2>
        <ItemList/>
    </section>
  )
}

export default ItemListContainer