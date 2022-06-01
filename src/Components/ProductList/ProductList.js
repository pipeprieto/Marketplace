import { Columns } from "react-bulma-components";
import "bulma/css/bulma.min.css";
import Card from "../Card/Card";
import imagen from "../../images/prueba.jpeg";

export default function ProductList(props) {
  //const data = fetch("");
  const columns = {
    name: "Producto",
  };
  const data = {};
  return (
    <>
      <div>
        <Columns desktop={{ display: "flex" }}>
          <Columns.Column narrow={true} size={4}>
            <Card
              imagen={imagen}
              alt="Hola"
              tittle="Nike"
              price="5.00 USD"
              provider="Nike"
              stars={5}
            />
          </Columns.Column>
          <Columns.Column size={4}>
            <Card
              imagen={imagen}
              alt="Hola"
              tittle="Nike"
              price="5.00 USD"
              provider="Nike"
              stars={5}
            />
          </Columns.Column>
          <Columns.Column size={4}>
            <Card
              imagen={imagen}
              alt="Hola"
              tittle="Nike"
              price="5.00 USD"
              provider="Nike"
              stars={5}
            />
          </Columns.Column>
        </Columns>
      </div>
    </>
  );
}
