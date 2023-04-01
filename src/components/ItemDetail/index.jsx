import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'


const ItemDetail = () => {

  const [producto, setProducto] = useState ({});
  const [loading, setLoading] = useState(true)
  const {id} = useParams();



  const getProducto = async () => {
  
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setProducto(data);
      setLoading(false)

    } catch (error) {
      setProducto(null)
    }
  }
  useEffect (() => {
    getProducto();
}, []);

  if (!producto) {
    return <Navigate to = "/404" />;
  }
  
  if (loading){
    return <h2>Cargando...</h2>
  }


  return (
      <div className='cardDescription__container'>
        <figure className='cardDescription__figure'>
            <img className='cardDescription__img' src={producto.image} alt={producto.title} />
        </figure>
        <h3 className='cardDescription__title'>{producto.title}</h3>
        <p className='cardDescription__description'>{producto.description}</p>
        <p className='cardDescription__category'> {producto.category} </p>
        <p className='cardDescription__price'>${producto.price}</p>
        <Button variant="outlined">Añadir al carrito</Button>
        <div className='cardDescription__footer'>
          <p>⭐{producto.rating.rate}</p>
          <p>disponibles: {producto.rating.count}u</p>
        </div>
      </div>
  )

}

export default ItemDetail