import Header from "./Components/Header/Header";
import React, { Fragment, useState, useEffect } from "react";
import ProductList from "./Components/ProductList/ProductList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cart from "./Components/Cart/Cart";
import CheckOut from "./Components/CheckOut/CheckOut";
import ProductForm from "./Components/Form/ProductForm";
import Login from "./Components/LogIn/LogIn";
import SignUp from "./Components/SignUp/SignUp";
import { data } from "./product-data";
// import {
//   ContextProvider,
//   Globalcontext,
// } from "./Components/Context/Globalcontext";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [productList, setProductList] = useState([]);

  const getData = () => {
    var newProducts = [];
    for (let i = 0; i < data.length; i++) {
      newProducts[i] = {
        provider: "N/A", //Al momento de crear los usuarios especificar el proveedor usando props
        key: data[i].id,
        id: data[i].id,
        title: data[i].title,
        image: data[i].image,
        price: data[i].price,
        rate: data[i].rating.rate,
      };
    }
    window.localStorage.setItem("productos", JSON.stringify(newProducts));
  };
  const handleAddProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, cantidad: ProductExist.cantidad + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, cantidad: 1 }]);
    }
  };

  const handleRemoveProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist.cantidad === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, cantidad: ProductExist.cantidad - 1 }
            : item
        )
      );
    }
  };

  const totalPrice = cartItems.reduce(
    (price, item) => price + item.cantidad * item.price,
    0
  );

  const handleCartClearance = () => {
    setCartItems([]);
  };

  const handleProductList = (products) => {
    let updatedProducts = JSON.parse(window.localStorage.getItem("productos"));
    updatedProducts.push(products);
    console.log(updatedProducts);
    window.localStorage.setItem("productos", JSON.stringify(updatedProducts));
    setProductList(updatedProducts);
  };

  return (
    // <ContextProvider>
    <div className="App">
      <Router>
        <Fragment>
          <Header onLoad={getData} />

          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route
              exact
              path="/productlist"
              element={
                <ProductList
                  provider="N/A"
                  handleAddProduct={handleAddProduct}
                />
              }
            />
            <Route
              exact
              path="/checkout"
              element={
                <CheckOut
                  totalPrice={totalPrice}
                  handleCartClearance={handleCartClearance}
                />
              }
            />
            <Route
              exact
              path="/cart"
              element={
                <Cart
                  cartItems={cartItems}
                  handleAddProduct={handleAddProduct}
                  handleRemoveProduct={handleRemoveProduct}
                  handleCartClearance={handleCartClearance}
                  totalPrice={totalPrice}
                />
              }
            />
            <Route
              exact
              path="/add"
              element={
                <ProductForm
                  header="Añadir Producto"
                  handleProductList={handleProductList}
                  provider="N/A"
                  productList={productList}
                />
              }
            />
          </Routes>
        </Fragment>
      </Router>
    </div>
    // </ContextProvider>
  );
};

export default App;
