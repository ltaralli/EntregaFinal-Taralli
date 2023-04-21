import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar"
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart"
import Checkout from "./components/Checkout"
import CartProvider from "./context/CartContext";
import "./app.css"

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
                    <Route path="/checkout" element = { <Checkout/> } />
                    <Route path="404" element = {<h2>404 NOT FOUND</h2>} />
                </Routes>
            </CartProvider>
        </>
    )
}

export default App;