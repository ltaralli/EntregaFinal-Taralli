import React, { useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext';
import { collection, addDoc, getFirestore, serverTimestamp} from 'firebase/firestore';
import styles from './checkout.modules.scss'
import Formulario from '../Formulario'
import PageCartEmpty from '../PageCartEmpty';
import OrderSuccessful from '../OrderSuccessful';
import Loading from '../Loading';


const Checkout = () => {
  
  const {cart, precioTotal, setCart} = useCartContext();
  const [isCompraRealizada, setIsCompraRealizada] = useState(false);
  const [compraId, setCompraId] = useState(null);
  const [loading, setLoading] = useState(false)
  
 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    emailConfirmation: '',
    phone: '',
    address: '',
  });

  const ordenPush = () => {
    const db = getFirestore();
    const ordersCollection = collection(db, 'orders');
    const nuevaOrden = {
      ...orden,
      formData,
    };

    setLoading(true)
    addDoc(ordersCollection, nuevaOrden)
      .then(({id}) => {
        setCart([]);
        setIsCompraRealizada(true); 
        setCompraId(id);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  const handleFormSubmit = (values) => {
    setFormData(values);
  };

  useEffect(() => {
    if (formData.name && formData.email && formData.emailConfirmation && formData.phone && formData.address) {
      setTimeout(() => {
        ordenPush();  
      }, 2000);
      
    }
  }, [formData]);

  const orden = {
    date: serverTimestamp(),
    items: cart.map(product => ({id:product.id, title:product.title, price:product.price, quantity:product.quantity})),
    total: precioTotal(),
  }

  if (loading){
    return <Loading/>
  }

  if (isCompraRealizada) {
    return (
      <OrderSuccessful compraId={compraId}/>
    )
  }

  if (cart.length === 0) {
    return (
      <PageCartEmpty/>
    )
  }

  return (
		<div className='form__container'>
      <Formulario onFormSubmit={handleFormSubmit}/>
		</div>
  )
}

export default Checkout
