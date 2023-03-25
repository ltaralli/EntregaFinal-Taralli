import React from 'react'
import styles from './itemListContainer.modules.scss'
import { useEffect, useState} from "react";
import CardProduct from '../CardProduct';

const ItemListContainer = () => {

  const [productos, setProductos] = useState ([])

  useEffect (() => {

      fetch('https://fakestoreapi.com/products/')
      .then (response => response.json())
      .then (data => {
          setProductos(data)
      })
  }, [])

  return (
    <section className='productContainer'>
      {productos.map((producto) => (
        <CardProduct key={producto.id} producto={producto} />
    ))}
    </section>
  );
}

export default ItemListContainer