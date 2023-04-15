import { Button, useRadioGroup } from '@mui/material'
import React, { useEffect, useState, useContext } from 'react'
import { Link, NavLink, Navigate, useParams } from 'react-router-dom'
import ItemCount from '../ItemCount';
import { useCartContext } from '../../context/CartContext';
import { getFirestore, doc, getDoc} from 'firebase/firestore' 

const ItemDetail = ({producto}) => {


  const [toCart, setToCart] = useState(false)
  const {agregarProducto} = useCartContext();


const onAdd = (quantity) => {
  setToCart(true);
  agregarProducto(producto, quantity);
}

//   const getProducto = async () => {
  
//     try {
//       const response = await fetch(`https://fakestoreapi.com/products/${id}`);
//       const data = await response.json();
//       setProducto(data);
//       setLoading(false)

//     } catch (error) {
//       setProducto(null)
//     }
//   }
//   useEffect (() => {
//     getProducto();
// }, []);

//   if (!producto) {
//     return <Navigate to = "/404" />;
//   }
  
//   if (loading){
//     return <h2>Cargando...</h2>
//   }


  return (
      <div className='cardDescription__container'>
        <figure className='cardDescription__figure'>
            <img className='cardDescription__img' src={producto.image} alt={producto.title} />
        </figure>
        <h3 className='cardDescription__title'>{producto.title}</h3>
        <p className='cardDescription__description'>{producto.description}</p>
        <p className='cardDescription__category'> {producto.category} </p>
        <p className='cardDescription__price'>${producto.price}</p>
        <ItemCount stock={producto.count} onAdd={onAdd} initial={1}/>
        <Link to={'/cart'}>
          <Button variant='outlined' size='small' disabled={!toCart}>Finalizar Compra</Button>
        </Link>
        <div className='cardDescription__footer'>
          <p>⭐{producto.rate}</p>
          <p>disponibles: {producto.count}u</p>
        </div>
        
      </div>
  )

}

export default ItemDetail