import "./App.css";
import Header from "./Components/Header/Header";
import React, { Fragment, useState } from "react";
import ProductList from "./Components/ProductList/ProductList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cart from "./Components/Cart/Cart";
import CheckOut from "./Components/CheckOut/CheckOut";
import ProductForm from "./Components/Form/ProductForm";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [productList, setProductList] = useState([]);

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
    const updatedProducts = [products, ...productList];
    setProductList(updatedProducts);
  };
  //const handleProductAdded = (prodAdded) => {
  //  setProductAdded(prodAdded);
  //};
  return (
    <div className="App">
      <Router>
        <Fragment>
          <Header />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <ProductList
                  provider="N/A"
                  handleProductList={handleProductList}
                  productAdded={productList}
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
  );
};

export default App;
