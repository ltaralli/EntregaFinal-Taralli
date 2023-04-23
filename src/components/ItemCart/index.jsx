import { useCartContext } from '../../context/CartContext';
import styles from './itemCart.modules.scss'
import { Button } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

const ItemCart = ({ product }) => {
    const { eliminarProducto } = useCartContext();
    return (
        <div className='itemCart'>
            <img className='itemCart__img' src={product.image} alt={product.title} />
                    <p className='itemCart__title text'>{product.title.slice(0, 40)}</p>
                    <p className='itemCart__category text'>{product.category.toUpperCase()}</p>
                <p className='itemCart__quantity text' >{product.quantity} u</p>
                <p className='itemCart__price text' >${product.price}</p>
                <p className='itemCart__subtotal text' >${(product.quantity * product.price).toFixed(2)}</p>
                <Button size="small" variant="outlined" startIcon={<ClearIcon />} color="error" className='itemCart__btn' onClick={() => eliminarProducto(product.id)}> ELIMINAR </Button>
        </div>
    )
}

export default ItemCart