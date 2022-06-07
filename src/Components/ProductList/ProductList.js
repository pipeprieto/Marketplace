import { useEffect, useState } from "react";
import { Columns, Heading } from "react-bulma-components";
import "bulma/css/bulma.min.css";
import styled from "styled-components";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useAlert } from "react-alert";

const ProductList = ({ handleAddProduct }) => {
  const [product, setProduct] = useState([]);
  const [page, setPage] = useState(1);
  const [inicio, setInicio] = useState(0);
  const [fin, setFin] = useState(10);

  useEffect(() => {
    let products = JSON.parse(window.localStorage.getItem("productos"));
    console.log(products);
    setProduct(products);
  }, []);

  const alert = useAlert();

  const addToCart = (prod) => {
    alert.show("Se añadio al carro correctamente");
    handleAddProduct(prod);
  };

  const showProducts = () => {
    let total = Math.ceil(product.length / 10);
    if (page < total) {
      setPage(page + 1);
    } else {
      if (page == total) {
        setPage(page - 1);
      } else {
        console.log("No se puede cambiar más de página");
      }
    }
    // for (let i = inicio; i < fin; i++) {
    //   console.log(product[i].title);
    // }
  };
  return (
    <>
      <Heading className="has-text-centered">{"Productos "}</Heading>
      <Columns mobile={{ display: "block" }} desktop={{ display: "flex" }}>
        {product.map((prod) => {
          return (
            <Columns.Column narrow={true} size={3}>
              <ProductCard>
                <Imgcontainer>
                  <CardImg src={prod.image} alt={"Error"} />
                </Imgcontainer>
                <Cardbody>
                  <Flex>
                    <Id>{prod.Id}</Id>
                    <Title>{prod.title}</Title>
                  </Flex>
                  <Flex>
                    <Flexed>
                      <p>{`${prod.price}USD`}</p>
                    </Flexed>
                    <Flexed>
                      <Flexend>
                        <p>{`${prod.rate}/5`}</p>
                      </Flexend>
                    </Flexed>
                  </Flex>
                  <ButtonContainer>
                    <Button onClick={() => addToCart(prod)}>
                      <AiOutlineShoppingCart />
                    </Button>
                  </ButtonContainer>
                </Cardbody>
              </ProductCard>
            </Columns.Column>
          );
        })}
      </Columns>
      {/* <Pagination
        total={Math.ceil(product.length / 10)}
        align="center"
        rounded={true}
        autoHide={false}
        onChange={showProducts}
        current={page}
        showPrevNext={false}
      ></Pagination> */}
    </>
  );
};

export default ProductList;

const Id = styled.p`
  display: none;
`;

const ProductCard = styled.div`
  width: 250px;
  margin: auto;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%),
    0 0 0 1px rgb(10 10 10 / 2%);
  position: relative;
  min-width: 0;
  max-width: 100%;
  word-wrap: break-word;
`;
const Imgcontainer = styled.div`
  margin: auto;
  width: 50%;
`;
const CardImg = styled.img`
  text-align: center;
  width: 150px;
  height: 150px;
`;
const Cardbody = styled.div`
  padding: 1rem 1rem;
`;
const Flex = styled.div`
  display: flex;
`;
const Flexed = styled.p`
  flex: 1;
`;
const Flexend = styled.p`
  text-align: right;
`;
const Title = styled.p`
  font-weight: bold;
`;
const ButtonContainer = styled.div`
  margin: auto;
`;
const Button = styled.div`
  display: inline-block;
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  color: #fff;
  background-color: #0d6efd;
  border-color: #0d6efd;
  width: 80%;
  margin-left: 10%;
`;
