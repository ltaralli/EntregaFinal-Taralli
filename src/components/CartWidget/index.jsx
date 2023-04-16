
import { NavLink } from 'react-router-dom'
import styles from './cartWidget.modules.scss'


const CartWidget = () => {

  return (
    <NavLink to='/cart' ><img className='cartImg' src="../media/navbar/iconCart.png" alt="" /></NavLink>
  )
}

export default CartWidget