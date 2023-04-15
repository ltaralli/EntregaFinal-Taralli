import React, { useState, useContext } from 'react'

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ( {children} ) => {
  
  const [cart, setCart] = useState([]);
  const enCarrito = (id) => cart.find(product => product.id === id) ? true : false;
  const borrarCarrito = () => setCart([]);
  const eliminarProducto = (id) => setCart(cart.filter(product => product.id === !id));
  
  const agregarProducto = (item, quantity) => {
    
    if (enCarrito(item.id)) {setCart(cart.map(product => {
      return product.id === item.id ? {...product, quantity: product.quantity + quantity} : product
    }));
  } else {
    setCart([...cart, {...item, quantity}]);
  }
}

  
    return (
    <CartContext.Provider value={ { agregarProducto, enCarrito, borrarCarrito, eliminarProducto } }>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider