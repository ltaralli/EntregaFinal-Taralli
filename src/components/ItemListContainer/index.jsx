import styles from './itemListContainer.modules.scss'
import { useEffect, useState} from "react";
import CardProduct from '../CardProduct';
import { useParams } from "react-router-dom";

function ItemListContainer() {
  const { categoryid } = useParams();
  const [products, setProducts] = useState([]);

  console.log(useParams())

  useEffect(() => {
    const fetchProducts = async () => {
      let url = "https://fakestoreapi.com/products";
      if (categoryid) {
        url += `/category/${categoryid}`;
      }
      const response = await fetch(url);
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, [categoryid]);



  return (
    <section className='product'>
      <h2 className='product__title'>Nuestros productos</h2>
        <div className='product__container'>
        {products.map((producto) => (
        <CardProduct key={producto.id} producto={producto} />
      ))}
      </div>
    </section>
  );
}

export default ItemListContainer