import "./app.css"
import Navbar from "./components/Navbar"
import ItemListContainer from "./components/ItemListContainer";
import { Routes, Route, Navigate } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";


export const CartContext = React.createContext('');


function App () {
    return (
        <div>
            <Navbar />
            <CartContext.Provider value="prod">
                <Routes>
                    <Route path=" " element = {<Navigate to= {"/"}/>} />
                    <Route path="/" element = {<ItemListContainer/>} />
                    <Route path="/category/:categoryid" element = {<ItemListContainer/>}/>
                    <Route path="/item/:id" element = { <ItemDetailContainer/> } />
                    <Route path="/cart" element = { <Cart/> } />
                    <Route path="404" element = {<h2>404 NOT FOUND</h2>} />
                </Routes>
            </CartContext.Provider>
            
        </div>
    )
}

export default App;