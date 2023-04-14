import { Button } from '@mui/material'
import React, { useEffect, useState, useContext } from 'react'
import { Link, NavLink, Navigate, useParams } from 'react-router-dom'
import ItemCount from '../ItemCount';



const ItemDetail = () => {

  const [producto, setProducto] = useState ({});
  const [loading, setLoading] = useState(true)
  const {id} = useParams();
  const [toCart, setToCart] = useState(false)

  const onAdd = (quantity) => {
    setToCart(true);
  }

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
        <ItemCount stock={producto.rating.count} onAdd={onAdd} initial={1}/>
        <Link to={'/cart'}>
          <Button variant='outlined' size='small' disabled={!toCart}>Finalizar Compra</Button>
        </Link>
        <div className='cardDescription__footer'>
          <p>⭐{producto.rating.rate}</p>
          <p>disponibles: {producto.rating.count}u</p>
        </div>
        
      </div>
  )

}

export default ItemDetail