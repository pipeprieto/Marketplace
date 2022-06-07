import styled from "styled-components";
import { FcPlus } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function ProductForm({ header, provider, handleProductList }) {
  const [productAdded, setProduct] = useState({
    provider: provider,
    id: uuidv4(),
    key: uuidv4(),
    title: "",
    image: "",
    price: 0,
    rate: 0,
  });

  function addProd() {
    let inputs = document.querySelectorAll("input");
    let newProd = {};
    inputs.forEach((input) => {
      newProd = {
        ...newProd,
        [input.name]: input.value,
      };
    });
    setProduct(
      (productAdded.title = newProd.prodname),
      (productAdded.price = newProd.prodprice),
      (productAdded.image = newProd.prodimg),
      (productAdded.rate = newProd.prodrate)
    );
    //let newProducts = JSON.parse(window.localStorage.getItem("productos"));
    handleProductList(productAdded);
  }

  return (
    <>
      <Container>
        <IconContainer>
          <FcPlus size="2rem" />
        </IconContainer>
        <Title>{header}</Title>
        <Label>Nombre del producto</Label>
        <Input type="text" name="prodname" maxLength="30" />
        <Label>Precio</Label>
        <Input type="number" name="prodprice" />
        <Label>Calificación</Label>
        <Input type="number" name="prodrate" max={5} />
        <Label>Imagen del producto (url)</Label>
        <Input type="url" name="prodimg" />
        <Link to="/productlist">
          <Button onClick={addProd}>
            <LinkText>Añadir</LinkText>
          </Button>
        </Link>
      </Container>
    </>
  );
}
//Styled Components
const Container = styled.div`
  margin: auto;
  width: 50%;
  height: auto;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.125rem;
  box-shadow: 0 1rem 1rem -0.75rem rgba(0, 0, 0, 0.125);
  display: flex;
  flex-direction: column;
  padding: 1rem;
  text-align: center;
`;
const Title = styled.p`
  font-weight: bold;
  color: #000;
  font-size: 24px;
`;
const Label = styled.label`
  margin-top: 1rem;
`;
const Button = styled.div`
    background-color: #0d6efd;
    color:#fff:
    text-align:center;
    border:none;
    border-radius: 0.5rem;
    margin:auto;
    width:5rem;
    margin-top: 1rem;   
    font-weight: 400;
  line-height: 1.5;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  width: 50%;

  `;
const LinkText = styled.p`
  text-decoration: none;
  color: white;
`;
const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  width: 80%;
  margin: auto;
`;
