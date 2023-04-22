import { Button, Stack } from '@mui/material';
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
        <Stack spacing={2} pacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" justifyContent="center" alignItems="center" alignContent="center">
          <Button size="small"  disabled={count <= 1} onClick={handleDecrement}>-</Button>
          <span><b>{count}</b></span>
          <Button size="small"  disabled={count >= stock} onClick={handleIncrement}>+</Button>
          <Button   disabled={stock <= 0} onClick={handleAdd}>Agregar al carrito</Button>
        </Stack>
      </div>
    );
  };

  export default ItemCount;