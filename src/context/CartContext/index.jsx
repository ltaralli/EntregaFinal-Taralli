import React, { useState, useContext } from 'react'

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ( {children} ) => {
  
  const [cart, setCart] = useState([]);
  
  const enCarrito = (id) => cart.find(product => product.id === id) ? true : false;
  
  const borrarCarrito = () => setCart([]);
  
  const eliminarProducto = (id) => setCart(cart.filter((product) => product.id !== id));
  
  const precioTotal = () => { return cart.reduce((prev, act) => prev + act.quantity * act.price, 0); };

	const productosTotal = () => cart.reduce( (acumulador, productoActual) => acumulador + productoActual.quantity, 0,);

  const agregarProducto = (item, quantity) => {
    
    if (enCarrito(item.id)) {
      setCart(cart.map(product => {
        if (product.id === item.id) {
          const newQuantity = product.quantity + quantity;
          const availableStock = product.stock - product.quantity;
          if (newQuantity > availableStock) {
            console.log(`No hay suficiente stock disponible para agregar ${quantity} más de ${product.name}`);
            return product;
          } else {
            return {...product, quantity: newQuantity};
          }
        } else {
          return product;
        }
      }));
    } else {
      if (quantity > item.stock) {
        console.log(`No hay suficiente stock disponible para agregar ${quantity} de ${item.name}`);
      } else {
        setCart([...cart, {...item, quantity}]);
      }
    }
    
}

  
    return (
    <CartContext.Provider value={ { agregarProducto, enCarrito, borrarCarrito, eliminarProducto, precioTotal, productosTotal, cart, setCart } }>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider