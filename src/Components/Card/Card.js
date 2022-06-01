import { useState } from "react";
import "./Card.css";

export default function Card(props) {
  const [cont, setState] = useState(0);

  const susbtractProduct = () => {
    setState(cont - 1);
  };

  return (
    <div className="container">
      <div className="card">
        <img src={props.imagen} alt={props.alt} className="cardimg img" />
        <div className="card-body">
          <div className="d-flex">
            <p className="fw-bold card-tittle flex-fill">{props.tittle}</p>
            <p className="fw-bold">{props.price}</p>
          </div>
          <div className="d-flex">
            <p className="card-text flex-fill">{props.provider}</p>
            <p className="card-text">{props.stars}</p>
          </div>
          <div className="d-flex">
            <div
              className="btn btn-primary btn-sm flex-fill"
              onClick={susbtractProduct}
            >
              Agregar al Carrito
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
