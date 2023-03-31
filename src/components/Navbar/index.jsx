import React from 'react'
import styles from './navbar.modules.scss'
import CartWidget from '../CartWidget';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from "react";

const Navbar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch("https://fakestoreapi.com/products/categories");
      const data = await response.json();
      setCategories(data);
    };
    fetchCategories();
  }, []);

  return (
    
    <header className='navbar'>
      <div className='navbar__nav'>
        <div>
          <a className='navbar__BtnImg' href="/"><img className='navbar__logo' src="../media/navbar/logo.png" alt="Logo" /></a>
        </div>
       <div className='navbar__toggles'>
          <ul className='navbar__list'>
            <li>
              {categories.map((category) => (
                <NavLink key={category} to={`/category/${category}`} className="active navbar__anchor">{category}</NavLink>
              ))}
            </li>
            <li>
                <NavLink to="/" className="active">All Products</NavLink>
            </li>  
              {/* <NavLink to="/" style={({isActive}) => (isActive ? activeStyle : notActiveStyle)} ><p className='navbar__anchor'>Productos</p> </NavLink>
              <NavLink to="/QuienesSomos" style={({isActive}) => (isActive ? activeStyle : notActiveStyle)} ><p className='navbar__anchor'>Quienes Somos</p> </NavLink>
              <NavLink to="/FAQ" style={({isActive}) => (isActive ? activeStyle : notActiveStyle)} ><p className='navbar__anchor'>FAQ</p> </NavLink>
              <NavLink to="/Contacto" style={({isActive}) => (isActive ? activeStyle : notActiveStyle)} ><p className='navbar__anchor'>Contacto</p> </NavLink> */}
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