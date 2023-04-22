import { Link } from 'react-router-dom'
import {useCartContext} from '../../context/CartContext';
import ItemCart from '../ItemCart';
import { Button } from '@mui/material';
import styles from './cart.modules.scss'
import { Check } from '@mui/icons-material';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import PageCartEmpty from '../PageCartEmpty';


const Cart = () => {
  
  const {cart, precioTotal} = useCartContext();

  if (cart.length === 0) {
    return (
      <PageCartEmpty/>
    )
  }
  
  return (
    <div className='container'>
	    <div className='cart__container'>
        <h4 className='cart__title'>PRODUCTOS EN CARRITO</h4>
		  	{cart.map((product) => (
		  		<ItemCart key={product.id} product={product} />
		  	))}
        <div className='cart__footer'>
          <Link className='cart__btn' to='/' ><Button variant="contained" color="error" startIcon={<ProductionQuantityLimitsIcon />}>SEGUIR COMPRANDO</Button></Link>
		  	  <Link className='cart__btn' to='/checkout' ><Button variant="contained" color="success" startIcon={<Check />}>IR AL CHECKOUT</Button></Link>
		  	  <p className='cart__total'>TOTAL: ${precioTotal().toFixed(2)}</p>
        </div>
      </div>
    </div>

  )
}

export default Cart