import "./App.css";
import Header from "./Components/Header/Header";
import ProductList from "./Components/ProductList/ProductList";
function App() {
  return (
    <div className="App">
      <Header />
      <ProductList heading="Productos" />
    </div>
  );
}

export default App;
