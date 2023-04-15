import { useEffect, useState} from "react";
import CardProduct from '../CardProduct';
import { useParams } from "react-router-dom";

function ItemList({productos}) {
  
  return (
    <div className='product__container'>
        {productos.map((product) => (
        <CardProduct key={product.id} productc={product} />
        ))}
    </div>
  );
}

export default ItemList