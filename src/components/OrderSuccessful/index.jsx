import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

const OrderSuccessful = ({compraId}) => {
  return (
      <div className='cont-area'>
        <img className='img-area2' src="../media/orderSuccessful/success.gif" alt="" />
      <h1>Compra realizada con exito!</h1>
      <p className="zoom-area">
      Muchas gracias por confiar en nosotros. Tu numero de pedido es: <b>{compraId}</b> 
      </p>
      <div className="link-container">
        <Link to={'/'}><Button ><b>VOLVER AL INICIO</b></Button></Link>
      </div>
    </div>
  );
};

export default OrderSuccessful