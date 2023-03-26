import React from 'react'
import styles from './itemListContainer.modules.scss'
import { useEffect, useState} from "react";
import CardProduct from '../CardProduct';
import { NavLink } from 'react-router-dom';

const ItemListContainer = () => {

  const [productos, setProductos] = useState ([])
  const [categorias, setCategorias] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProductos(data);
        const categoriasUnicas = [
          ...new Set(data.map((producto) => producto.category)),
        ];
        setCategorias(categoriasUnicas);
      });
  }, []);

  const handleCategoriaClick = (categoria) => {
    setCategoriaSeleccionada(categoria);
  };

  const productosFiltrados = categoriaSeleccionada
    ? productos.filter(
        (producto) => producto.category === categoriaSeleccionada
      )
    : productos;

    
  return (
    <section className='product'>
      <h2 className='product__title'>Nuestros productos</h2>
      <div className='product__list'>
        <h4>CATEGORIAS</h4>
        <NavLink className={'product__navlink'} to={"/"} onClick={() => setCategoriaSeleccionada("")}> Todas las categorías</NavLink>
            {categorias.map((categoria) => (
              <NavLink className={'product__navlink'} key={categoria} to={`/category/${categoria}`} onClick={() => handleCategoriaClick(categoria)}> {categoria} </NavLink>
          ))}
      </div>
        <div className='product__container'>
        {productosFiltrados.map((producto) => (
        <CardProduct key={producto.id} producto={producto} />
      ))}
      </div>
    </section>
  );
}

export default ItemListContainer