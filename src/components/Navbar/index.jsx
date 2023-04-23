import styles from './navbar.modules.scss'
import CartWidget from '../CartWidget';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore} from 'firebase/firestore';


const Navbar = () => {
  const [categories, setCategories] = useState([]);

  // MAPEO DE CATEGORIAS
  
  useEffect(() => {
    const fetchCategories = async () => {
      const db = getFirestore();
      const productsRef = collection(db, 'products');
      const productsSnapshot = await getDocs(productsRef);
      const allCategories = new Set();
      productsSnapshot.forEach(doc => allCategories.add(doc.data().category));
      setCategories(Array.from(allCategories));
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
          <NavLink className='navbar__BtnImg' to={'/'}> <img className='navbar__logo' src="../media/navbar/flechaIcon.png" alt="Logo" /> </NavLink>
        </div>
       <div className='navbar__toggles'>
          <ul className='navbar__list'>
            <NavLink to="/" style={({isActive}) => (isActive ? activeStyle : notActiveStyle)}><p className="navbar__anchor">ALL PRODUCTS</p></NavLink>
              {categories.map((category) => (
                <NavLink key={category} to={`/category/${category}`} style={({isActive}) => (isActive ? activeStyle : notActiveStyle)} ><p className="navbar__anchor">{category.toUpperCase()}</p></NavLink>
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