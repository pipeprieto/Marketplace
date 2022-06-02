import "./App.css";
import Header from "./Components/Header/Header";
import React, {Fragment, useState} from 'react';
import ProductList from "./Components/ProductList/ProductList";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Cart from "./Components/Cart/Cart"

const App = () => {

 const [cartItems,setCartItems] = useState([]);

 const handleAddProduct = (product) => {
   const ProductExist = cartItems.find((item) => item.id===product.id);
   if(ProductExist){
     setCartItems(cartItems.map((item) => item.id === product.id ?
     {...ProductExist, cantidad: ProductExist.cantidad + 1} : item)
     );
   }else{
     setCartItems([...cartItems, {...product,cantidad:1}]);
   }
 }

 const handleRemoveProduct = (product) => {
  const ProductExist = cartItems.find((item) => item.id===product.id);
  if(ProductExist.cantidad===1){
    setCartItems(cartItems.filter((item) => item.id !== product.id ));
  }else{
    setCartItems(
      cartItems.map((item) => 
      item.id === product.id 
      ? {...ProductExist, cantidad: ProductExist.cantidad-1} 
      : item 
      )
    );
  }
}

const handleCartClearance = () => {
  setCartItems([]);
}

  return (
    <div className="App">
      <Router>
        <Fragment>
          <Header />
          <Routes>
          <Route exact path='/' element={<ProductList handleAddProduct={handleAddProduct} provider="N/A"/>}/>
          <Route exact path='/cart' element={<Cart cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} handleCartClearance={handleCartClearance}/>}/>
          </Routes>
        </Fragment> 
      </Router>
    </div>
  );
}

export default App;
