import React from 'react'
import styles from './navbar.modules.scss'
import CartWidget from '../CartWidget';

const Navbar = () => {
  return (
    
    <header className='navbar'>
    <div className='navbar__nav'>
      <div>
      <a className='navbar__BtnImg' href="../index.html"><img className='navbar__logo' src="../media/navbar/logo.png" alt="Logo" /></a>
      </div>
     <div className='navbar__toggles'>
        <ul className='navbar__list'>
          <li className='navbar__item'><a className='navbar__anchor' href="">Productos</a></li>
          <li className='navbar__item'><a className='navbar__anchor' href="">Quienes Somos</a></li>
          <li className='navbar__item'><a className='navbar__anchor' href="">FAQ</a> </li>
          <li className='navbar__item'><a className='navbar__anchor' href="">Contacto</a> </li>
        </ul>
        <div>
          <CartWidget />
        </div>
      </div>
    </div>
    </header>
  )
};
    

export default Navbar;