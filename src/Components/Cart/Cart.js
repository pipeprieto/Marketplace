
import CardItem from "./CartItem";
import imagenn from "../../images/prueba.jpeg";
import styled from "styled-components";
import { useAlert } from 'react-alert';
import React, {useState, useEffect} from 'react';


const Cart = () => {

  const [items, setItems] = useState(
    [
      {
        tittle : 'Nike',
        imagen : imagenn,
        stars: 5,
        price: 5.00,
        provider:'Nike',
        cantidad:1
      },
      {
        tittle : 'Nike2',
        imagen : imagenn,
        stars: 5,
        price: 5.00,
        provider:'Nike',
        cantidad:2
      },
      {
        tittle : 'Nike3',
        imagen : imagenn,
        stars: 5,
        price: 5.00,
        provider:'Nike',
        cantidad:1
      },
  ]
  );

  useEffect(() => {
    console.log(items)
},[items])

  const [totalp, setTotal] = useState(0); 

  const alert = useAlert();



   const total = (parametro)  => {

    console.log(items);
     
      items.forEach(item => {
        if(item.tittle===parametro.tittle){
          item.cantidad=parametro.cantidad
        }
      });

      setItems(items);
    
      var totalPrecio = 0;
    
      items.forEach(item => {
        totalPrecio = totalPrecio + (item.cantidad * item.price)
      });
      console.log('Nueva cantidad de este producto es: ',parametro.cantidad)
      
      setTotal(totalPrecio);
      console.log('el nuevo total del carrito es :',totalPrecio)
      
      console.log(items)
    }

    const checkOut = () =>{
      alert.show('Compra exitosa');
      setItems([]);
      setTotal(0);
    }

  
      return (
    <>
      <Container>
          <Wrapper>
                <Title>YOUR BAG</Title>
                <Top>
                    <TopButton>CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag({items.length})</TopText>
                    </TopTexts>
                    
                </Top>
                <Bottom>
                    <Info onLoad={total}>
                        {items.map((item) => (
                            <CardItem
                                tittle = {item.tittle}
                                imagen = {item.imagen}
                                alt = 'Error en la imagen'
                                stars = {item.stars}
                                price = {item.price}
                                provider ={item.provider}
                                bus = {total}
                                cantidad = {item.cantidad}
                            />
                        ))}
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem type="total">
                        <SummaryItemText>Total</SummaryItemText>
                        <SummaryItemPrice>$ {totalp}</SummaryItemPrice>
                        </SummaryItem>
                        <Button onClick={()=>{checkOut()}}>CHECKOUT NOW</Button>
                    </Summary>
                </Bottom>
          </Wrapper>
      </Container>
    </>
  );
  
}
export default Cart;

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
 
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "blue" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
 
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  

`;

const Info = styled.div`
  flex: 3;
`;


const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 35vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #0d6efd;
  color: white;
  font-weight: 600;
  border:0;
`;