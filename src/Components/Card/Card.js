import "./Card.css";

export default function Card(props) {
  return (
    <div className="container">
      <div className="card">
        <div className="cardimg">
          <img className="img" src={props.imagen} alt={props.alt} />
        </div>
        <div className="detail">
          <div className="content">
            <p className="tittle">{props.tittle}</p>
          </div>
          <div className="content">
            <p>{props.price}</p>
          </div>
        </div>
        <div className="detail">
          <div className="content">
            <p>{props.provider}</p>
          </div>
          <div className="content">
            <p>{props.stars}</p>
          </div>
        </div>
        <div className="detail">
          <div className="content">
            <div className="btn">+</div>
          </div>
          <div className="content">
            <div className="btn">Add to the cart</div>
          </div>
          <div className="content">
            <div className="btn">-</div>
          </div>
        </div>
      </div>
    </div>
  );
}
