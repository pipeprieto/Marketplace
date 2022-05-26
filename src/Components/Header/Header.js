import { BsCart2 } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import styledComponents from "styled-components";

export default function Header(props) {
  const Link = styledComponents.a`{
    color: #fff;
    font-size: 1.25rem;
    text-decoration: none;
    margin-top:20px;
  }
  `;
  const HoverLink = styledComponents.p`{
     ${Link}:hover & {
    cursor: pointer;
    color:#fff
  }
  }`;
  const Header = styledComponents.header`{
    background-color:#0d6efd;
    display:flex;
    flex-direction:row;
    color: #fff;
  }
  `;
  return (
    <>
      <Header>
        <div className="flex-fill">
          <p className="fw-bold fs-2 ms-5 my-2">Marketplace</p>
        </div>
        <nav className="align-middle flex-row-reverse me-5 mt-3 nav">
          <ul className="d-flex flex-row">
            <li className="justify-content-between mx-2">
              <Link href="blank">
                <HoverLink>Inicio</HoverLink>
              </Link>
            </li>
            <li className="justify-content-between mx-2">
              <Link href="blank">
                <HoverLink>Otra sección</HoverLink>
              </Link>
            </li>
            <li className="justify-content-between mx-2">
              <Link href="blank">
                <HoverLink>
                  <BsCart2 />
                </HoverLink>
              </Link>
            </li>
            <li className="fs-5 mx-2">
              <BiUserCircle />
            </li>
          </ul>
        </nav>
      </Header>
    </>
  );
}
