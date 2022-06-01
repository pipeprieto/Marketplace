import "./App.css";
import Header from "./Components/Header/Header";
import React, {Fragment} from 'react';
import ProductList from "./Components/ProductList/ProductList";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Cart from "./Components/Cart/Cart"

const App = () => {

 

  return (
    <div className="App">
      <Router>
        <Fragment>
          <Header />
          <Routes>
          <Route exact path='/' element={<ProductList/>}/>
          <Route exact path='/cart' element={<Cart/>}/>
          </Routes>
        </Fragment> 
      </Router>
    </div>
  );
}

export default App;
