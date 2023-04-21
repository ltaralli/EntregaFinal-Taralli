import { Button} from '@mui/material'
import { useState } from 'react'
import { Link} from 'react-router-dom'
import ItemCount from '../ItemCount';
import { useCartContext } from '../../context/CartContext';


const ItemDetail = ({producto}) => {


  const [toCart, setToCart] = useState(false)
  const {agregarProducto} = useCartContext();


const onAdd = (quantity) => {
  setToCart(true);
  agregarProducto(producto, quantity);
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