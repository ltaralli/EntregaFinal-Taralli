import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import styles from './ItemDetailContainer.modules.scss'
import ItemDetail from '../ItemDetail'


const ItemDetailContainer = () => {


  return (
    <section className='cardDescription'>
      <ItemDetail/>
   </section>  
  )

}

export default ItemDetailContainer