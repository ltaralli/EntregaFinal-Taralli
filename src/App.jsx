import "./app.css"
import Navbar from "./components/Navbar"
import ItemListContainer from "./components/ItemListContainer";

function App () {

    return (
        <div>
            <Navbar />
            <ItemListContainer greeting={'Flecha Cangreja 🦀🏹'} />
        </div>
    )
        
    
}

export default App;