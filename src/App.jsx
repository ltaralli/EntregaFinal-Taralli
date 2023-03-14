import "./app.css"
import Navbar from "./components/Navbar"
import ItemListContainer from "./components/ItemListContainer";

function App () {

    return (
        <div>
            <Navbar />
            <ItemListContainer greeting={'Texto de prueba'} />
        </div>
    )
        
    
}

export default App;