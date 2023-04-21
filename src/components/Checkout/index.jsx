import React, { useState} from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext';
import { collection, addDoc, getFirestore, serverTimestamp} from 'firebase/firestore';
import { Box, TextField } from '@mui/material';
import styles from './checkout.modules.scss'


const Checkout = () => {
  
  const {cart, precioTotal, setCart} = useCartContext();
  const [isCompraRealizada, setIsCompraRealizada] = useState(false);
  const [compraId, setCompraId] = useState(null);
 
 
  const [comprador, setComprador] = useState({
    nombre: '',
    correo: '',
    correoConfirm: '',
    telefono:'',
    direccion:''
  });

  const {nombre, correo, correoConfirm, telefono, direccion} = comprador;

  const handleOnChange = (e) => {
    setComprador({...comprador, [e.target.name]: e.target.value})
  }
  
  
  const orden = {
    date: serverTimestamp(),
    items: cart.map(product => ({id:product.id, title:product.title, price:product.price, quantity:product.quantity})),
    total: precioTotal(),
  }

  const handleClick = () => {
    const db = getFirestore();
    const ordersCollection = collection(db, 'orders');
    const nuevaOrden = {
      ...orden,
      comprador,
    };
    addDoc(ordersCollection, nuevaOrden)
      .then(({id}) => {
        setCart([]);
        setIsCompraRealizada(true); 
        setCompraId(id);
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
		<div className='form__container'>
    <div id='formulario' className='form' >
      <Box  component="form" sx={{'& .MuiTextField-root': { m: 1, width: '48%' },}}>
          <form >
          <TextField
            id='name'
            name='nombre'
            label="Nombre"
            variant="outlined"
            value={nombre}
            type='text'
            required
            onChange={handleOnChange}
          />

          <TextField
            id='email'
            name='correo'
            label="Correo electrónico"
            variant="outlined"
            value={correo}
            type="email"
            required
            onChange={handleOnChange}
          />

          <TextField
            id='emailConfirm'
            name='correoConfirm'
            label="Confirmar correo electrónico"
            variant="outlined"
            type="email"
            value={correoConfirm}
            required
            onChange={handleOnChange}
          />

          <TextField
            id='phone'  
            name='telefono'
            label="Teléfono"
            variant="outlined"
            value={telefono}
            type='tel'
            required
            onChange={handleOnChange}
          />

          <TextField
            id='adress'
            name='direccion'
            label="Dirección"
            variant="outlined"
            type='text'
            value={direccion}
            required
            onChange={handleOnChange}
          />
			    <button type='submit' onClick={() => handleClick(nombre, correo, correoConfirm, telefono, direccion)}>Emitir compra</button>
          </form>
        </Box>
      </div>
		</div>
  )
}

export default Checkout