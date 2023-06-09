import React, { useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import styles from './ItemDetailContainer.modules.scss'
import ItemDetail from '../ItemDetail'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import Loading from '../Loading'


const ItemDetailContainer = () => {


  const [producto, setProducto] = useState ({});
  const {id} = useParams();
  const [loading, setLoading] = useState(true)

  
  const getProducts = async () => {
    
    try {
      const consultadb = getFirestore();
      const consultaDoc = doc(consultadb, 'products', id);
      const res = await getDoc(consultaDoc);
      setProducto({id: res.id, ...res.data()});
      setLoading(false);
    } catch (error) {
      setProducto(null);
    }
  }

    useEffect (() => {
      setTimeout(() => {
        getProducts();
      }, 500);
    }, []) 

    if (!producto) {
     return <Navigate to = "/404" />;
   }

   if (loading){
     return <Loading/>
   }

  return (
    <section className='cardDescription'>
      <ItemDetail producto={producto} />
   </section>  
  )

}

export default ItemDetailContainer