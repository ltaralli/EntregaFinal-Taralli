import { Button } from "@mui/material";
import { useEffect, useState } from "react";

const ItemCount = ({ initial, stock, onAdd }) => {
    
  const [count, setCount] = useState(parseInt(initial))
    
    function handleIncrement() {
      if (count < stock) {
        setCount(count + 1);
      }
    }
    
    function handleDecrement() {
      if (count > 1) {
        setCount(count - 1);
      }
    }
    
    function handleAdd(quantity) {
      onAdd(count);
    }
    
    useEffect (() => {
      setCount(parseInt(initial))
    }, [initial])


    return (
      <div>
        <Button disabled={count <= 1} onClick={handleDecrement}>-</Button>
        <span>{count}</span>
        <Button disabled={count >= stock} onClick={handleIncrement}>+</Button>
        <Button disabled={stock <= 0} onClick={handleAdd}>Agregar al carrito</Button>
      </div>
    );
  };

  export default ItemCount;