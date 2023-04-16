import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {useCartContext} from '../../context/CartContext';
import ItemCart from '../ItemCart';
import { collection, addDoc, getFirestore} from 'firebase/firestore';

const Cart = () => {
  
  const {cart, precioTotal, setCart} = useCartContext();
  const [isCompraRealizada, setIsCompraRealizada] = useState(false);
  const [compraId, setCompraId] = useState(null);

  const orden = {
    comprador: {
      nombre: "pepe",
      correo: "pepe@mail.com",
      telefono: "3416175643",
      direccion: "paso 52",
    },
    items: cart.map(product => ({id:product.id, title:product.title, price:product.price, quantity:product.quantity})),
    total: precioTotal(),
  }
  
  const handleClick = () => {
    const db = getFirestore();
    const ordersCollection = collection(db, 'orders');
    addDoc(ordersCollection, orden)
      .then(({id}) => {
        console.log(id);
        setCart([]); // establecer el carrito en un array vacío
        setIsCompraRealizada(true); // establecer la bandera en true para mostrar un mensaje de éxito
        setCompraId(id); // establecer el ID de la compra realizada
      })
  }
  
  if (isCompraRealizada) {
    return (
      <>
        <p>Compra realizada con éxito</p>
        <p>Tu numero de pedido es {compraId} </p>
        <Link to='/'>Volver al inicio</Link>
      </>
    )
  }

  if (cart.length === 0) {
    return (
      <>
        <p>No hay articulos en el carrito</p>
      </>
    )
  }
  
  return (
		<>
			{cart.map((product) => (
				<ItemCart key={product.id} product={product} />
			))}
			<p>total: {precioTotal()}</p>
			<button onClick={handleClick}>Emitir compra</button>
		</>
  )
}

export default Cart