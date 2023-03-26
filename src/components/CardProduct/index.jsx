import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import styles from './cardProduct.modules.scss'


const CardProduct = ({ producto }) => {
    return (
        <Link to = {`/item/${producto.id}`} >
        <div className='card__container'>
            <figure >
                <img className='card__img' src={producto.image} alt={producto.title} />
            </figure>
            <h3 className='card__title'>{producto.title}</h3>
            <p className='card__category'> {producto.category} </p>
            <p className='card__price'>${producto.price}</p>
            <Button variant="outlined" size="small">Añadir al carrito</Button>
        </div>
        </Link>
    )
}

export default CardProduct;