import "./App.css";
import Card from "./Components/Card/Card";
import Header from "./Components/Header/Header";
import imagen from "./images/prueba.jpeg";
function App() {
  return (
    <div className="App">
      <Header />
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
