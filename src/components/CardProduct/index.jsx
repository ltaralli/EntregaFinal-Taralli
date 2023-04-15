import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import styles from './cardProduct.modules.scss'


const CardProduct = ({ productc }) => {
    return (
        <Link to = {`/item/${productc.id}`} >
        <div className='card__container'>
            <figure >
                <img className='card__img' src={productc.image} alt={productc.title} />
            </figure>
            <h3 className='card__title'>{productc.title}</h3>
            <p className='card__category'> {productc.category} </p>
            <p className='card__price'>${productc.price}</p>
            <Button variant="outlined" size="small">Añadir al carrito</Button>
        </div>
        </Link>
    )
}

export default CardProduct;