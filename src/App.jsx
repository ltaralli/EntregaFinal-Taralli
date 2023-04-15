import "./app.css"
import Navbar from "./components/Navbar"
import ItemListContainer from "./components/ItemListContainer";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import React from "react";
import Cart from "./components/Cart"
import CartProvider from "./context/CartContext";

function App () {
    return (
        <>
            <CartProvider>
                <Navbar />
                <Routes>
                    <Route path=" " element = {<Navigate to= {"/"}/>} />
                    <Route path="/" element = {<ItemListContainer/>} />
                    <Route path="/category/:categoryid" element = {<ItemListContainer/>}/>
                    <Route path="/item/:id" element = { <ItemDetailContainer/> } />
                    <Route path="/cart" element = { <Cart/> } />
                    <Route path="404" element = {<h2>404 NOT FOUND</h2>} />
                </Routes>
            </CartProvider>
        </>
    )
}

export default App;