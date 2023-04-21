
import { NavLink } from 'react-router-dom'
import styles from './cartWidget.modules.scss'
import { useCartContext } from '../../context/CartContext'

const CartWidget = () => {

  const {productosTotal} = useCartContext();

  return (
    <div className='cartContainer'>
      <NavLink to='/cart' ><img className='cartImg' src="../media/navbar/iconCart.png" alt="" /></NavLink>
      <p className='cartQuantity'>{productosTotal()}</p>
    </div>
 
  )
}

export default CartWidget