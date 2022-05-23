import { BsCart2 } from "react-icons/bs";
import "./Header.css";

export default function Header(props) {
  return (
    <>
      <header className="d-flex flex-row header">
        <div className="flex-fill">
          <p className="ms-5 my-2">Marketplace</p>
        </div>
        <nav className="flex-row-reverse me-5 my-2">
          <ul className="d-flex flex-row">
            <li className="justify-content-between mx-2">
              <a className="text-decoration-none" href="blank">
                Inicio
              </a>
            </li>
            <li className="justify-content-between mx-2">
              <a className="text-decoration-none" href="blank">
                Otra sección
              </a>
            </li>
            <li className="justify-content-between mx-2">
              <a className="text-decoration-none" href="blank">
                <BsCart2 />
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
