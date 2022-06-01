
import styled from "styled-components";
import React, {useState, useEffect} from 'react';


export default function CardItem(props){

  const [cant, setCant] = useState(props.cantidad);

   
  
   const  agregar = () => {

    const nueva_cantidad = cant + 1


    setCant(nueva_cantidad);

    props.bus({
        tittle:props.tittle,
        cantidad: nueva_cantidad,
    })


  }

  const quitar = () => {

      var nueva_cantidad;
      if(cant >0){
         nueva_cantidad = cant - 1
      }else{
        nueva_cantidad=0;
      }
      

      setCant(nueva_cantidad);

      props.bus({
          tittle:props.tittle,
          cantidad: nueva_cantidad,
      })

      

  }
  useEffect(() => {
    console.log(cant)
},[cant])
  

    
      return (
        <Product>
        <ProductDetail>
          <Image src={props.imagen} alt={props.alt} />
          <Details>
            <ProductName>
              <b>Product:</b> {props.tittle}
            </ProductName>
            <ProductStars>
                <b>Stars:</b> {props.stars}
            </ProductStars>
            <ProductProvider>
            <b>Provider:</b> {props.provider}
            </ProductProvider>
          </Details>
        </ProductDetail>
        <PriceDetail>
          <ProductAmountContainer>
            <Button onClick={quitar}>-</Button>
            <ProductAmount>{props.cantidad}</ProductAmount>
            <Button onClick={agregar}>+</Button>
          </ProductAmountContainer>
          <ProductPrice>$ {props.price}</ProductPrice>
        </PriceDetail>
      </Product>
    );
    
    
  }



const Button = styled.button`
  width: 80px;
  background-color: #0d6efd;
  color: white;
  font-weight: 1000;
  border: 0;
`;

const ProductStars = styled.span``;

const ProductProvider = styled.span``;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;


const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  
`;
