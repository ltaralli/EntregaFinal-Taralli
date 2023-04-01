import React from 'react'
import styles from './navbar.modules.scss'
import CartWidget from '../CartWidget';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from "react";

const Navbar = () => {
  const [categories, setCategories] = useState([]);

  // MAPEO DE CATEGORIAS
  
  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch("https://fakestoreapi.com/products/categories");
      const data = await response.json();
      setCategories(data);
    };
    fetchCategories();
  }, []);

  // VARIABLES DE COLOR NAVLINK

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
          <NavLink className='navbar__BtnImg' to={'/'}> <img className='navbar__logo' src="../media/navbar/logo.png" alt="Logo" /> </NavLink>
        </div>
       <div className='navbar__toggles'>
          <ul className='navbar__list'>
            <NavLink to="/" style={({isActive}) => (isActive ? activeStyle : notActiveStyle)}><p className="navbar__anchor">All Products</p></NavLink>
              {categories.map((category) => (
                <NavLink key={category} to={`/category/${category}`} style={({isActive}) => (isActive ? activeStyle : notActiveStyle)} ><p className="navbar__anchor">{category}</p></NavLink>
              ))}
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