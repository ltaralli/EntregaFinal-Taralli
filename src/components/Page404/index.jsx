import React from 'react'
import styles from './page404.modules.scss';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const Page404 = () => {
  return (
    <div>
      <h1>Tenemos algunos inconvenientes</h1>
      <p className="zoom-area">
         Lo resolveremos tan pronto como sea posible. <b>Flecha Cangreja</b>
      </p>
      <section className="error-container">
        <span><span>4</span></span> <span>0</span> <span><span>4</span></span>
      </section>
      <div className="link-container">
        <Link to={'/'}><Button ><b>IR AL INICIO</b></Button></Link>
      </div>
    </div>
  );
};

export default Page404
