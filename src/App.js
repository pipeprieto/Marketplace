import "./App.css";
import Card from "./Components/Card/Card";
import Practica from "./Components/Practica/Practica";
import imagen from "./images/prueba.jpeg";
function App() {
  return (
    <div className="App">
      <Card
        imagen={imagen}
        alt="Producto"
        tittle="Hola"
        price="5.0 USD"
        provider="Nike"
        stars="5"
      />
    </div>
  );
}

export default App;
