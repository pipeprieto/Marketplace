import { useState, useEffect } from "react";
import { Columns, Heading, Pagination } from "react-bulma-components";
import "bulma/css/bulma.min.css";
import Card from "../Card/Card";

const ProductList = (props) => {
  //Local storage
  //let productStorage = window.localStorage.getItem("productos");

  //Consumo de la API de Productos usando Hooks
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("Https://fakestoreapi.com/products")
      .then((result) => {
        result.json().then((data) => {
          var newProducts = [];
          for (let i = 0; i < data.length; i++) {
            newProducts[i] = {
              provider: props.provider,
              id: data[i].id,
              title: data[i].title,
              image: data[i].image,
              price: data[i].price,
              rate: data[i].rating.rate,
            };
          }
          window.localStorage.setItem("productos", JSON.stringify(newProducts));
          let productStorage = JSON.parse(
            window.localStorage.getItem("productos")
          );
          setProduct(productStorage);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Heading className="has-text-centered">{props.heading}</Heading>
      <Columns desktop={{ display: "flex" }}>
        {product.map((prod) => {
          return (
            <Columns.Column narrow={true} size={3}>
              <Card
                key={prod.id}
                id={prod.id}
                imagen={prod.image}
                alt="Producto"
                title={prod.title}
                price={prod.price}
                stars={prod.rate}
              />
            </Columns.Column>
          );
        })}
      </Columns>
      <Pagination total={1} align="center" rounded={true} autoHide={false} />
    </>
  );
}

export default ProductList;
