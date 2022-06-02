import "./App.css";
import Header from "./Components/Header/Header";
import React, {Fragment, useState} from 'react';
import ProductList from "./Components/ProductList/ProductList";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Cart from "./Components/Cart/Cart"

const App = () => {

 const [cartItems,setCartItems] = useState([
  {
    tittle : 'Nike',
    imagen : null,
    stars: 5,
    price: 5.00,
    provider:'Nike',
    cantidad:1
  },
  {
    tittle : 'Nike2',
    imagen : null,
    stars: 5,
    price: 5.00,
    provider:'Nike',
    cantidad:2
  },
  {
    tittle : 'Nike3',
    imagen : null,
    stars: 5,
    price: 5.00,
    provider:'Nike',
    cantidad:1
  }
 ]);

  return (
    <div className="App">
      <Router>
        <Fragment>
          <Header />
          <Routes>
          <Route exact path='/' element={<ProductList/>}/>
          <Route exact path='/cart' element={<Cart cartItems={cartItems}/>}/>
          </Routes>
        </Fragment> 
      </Router>
    </div>
  );
}

export default App;
