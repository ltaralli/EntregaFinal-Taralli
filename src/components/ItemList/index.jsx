import { useEffect, useState} from "react";
import CardProduct from '../CardProduct';
import { useParams } from "react-router-dom";

function ItemList() {
  
  const { categoryid } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true)

    // CONSUMO DE API

  const fetchProducts = async () => {
      let url = "https://fakestoreapi.com/products";
      try{ 
      if (categoryid) { url += `/category/${categoryid}`;}
        const response = await fetch(url);
        const data = await response.json();
        setProducts(data)
        setLoading(false)   
    } catch (error) {
        setProducts(null);
    }
    };
    
    useEffect(() => {
        fetchProducts();
  }, [categoryid]);

  if (!products) {
    return <Navigate to = "/404" />;
  }
  if (loading){
    return <h2>Cargando...</h2>
  }

  // MAPEO DE CARDS

  return (
    <div className='product__container'>
        {products.map((producto) => (
        <CardProduct key={producto.id} producto={producto} />
        ))}
    </div>
  );
}

export default ItemList