import CardProduct from '../CardProduct';

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