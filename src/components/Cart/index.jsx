import React from 'react'
import { Link } from 'react-router-dom'
import {useCartContext} from '../../context/CartContext';
import ItemCart from '../ItemCart';
import { collection, addDoc, getFirestore} from 'firebase/firestore';

const Cart = () => {
  
  const {cart, precioTotal} = useCartContext();

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
    .then(({id}) => console.log(id))
    cart = ([])
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