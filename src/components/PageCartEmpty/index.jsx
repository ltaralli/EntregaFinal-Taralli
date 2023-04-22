import React from 'react'
// import styles from './page404.modules.scss';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

const PageCartEmpty = () => {
  return (
    <div className='cont-area'>
      <h1>No tenes productos en el carrito  </h1>
      <p className="zoom-area">
      ¿Aún no te has decidido?. Tenemos servicios y productos que te encantarán, revisa el menú de arriba o ve a la página de la tienda para comprobarlo.
      </p>
      <img className='img-area' src="../media/pageCartEmpty/empty-cart.gif" alt="" />
      <div className="link-container">
        <Link to={'/'}><Button ><b>VER PRODUCTOS</b></Button></Link>
      </div>
    </div>
  );
};

export default PageCartEmpty
