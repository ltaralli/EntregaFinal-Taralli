import React from 'react'
import styles from './navbar.modules.scss'
import CartWidget from '../CartWidget';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  
  const activeStyle = {
    color: "rgb(252, 140, 158)"
  }
  
  const notActiveStyle = {
    color: "black",
  }

  return (
    
    <header className='navbar'>
    <div className='navbar__nav'>
      <div>
      <a className='navbar__BtnImg' href="../index.html"><img className='navbar__logo' src="../media/navbar/logo.png" alt="Logo" /></a>
      </div>
     <div className='navbar__toggles'>
        <ul className='navbar__list'>
          <NavLink to="/" style={({isActive}) => (isActive ? activeStyle : notActiveStyle)} ><p className='navbar__anchor'>Productos</p> </NavLink>
          <NavLink to="/QuienesSomos" style={({isActive}) => (isActive ? activeStyle : notActiveStyle)} ><p className='navbar__anchor'>Quienes Somos</p> </NavLink>
          <NavLink to="/FAQ" style={({isActive}) => (isActive ? activeStyle : notActiveStyle)} ><p className='navbar__anchor'>FAQ</p> </NavLink>
          <NavLink to="/Contacto" style={({isActive}) => (isActive ? activeStyle : notActiveStyle)} ><p className='navbar__anchor'>Contacto</p> </NavLink>
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