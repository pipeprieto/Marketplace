import { BsCart2 } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import styledComponents from "styled-components";
import { Link } from "react-router-dom";
import "bulma/css/bulma.min.css";

export default function Header(props) {
  //Styled Components
  
  const Header = styledComponents.header`{
    background-color:#0d6efd;
    display:flex;
    flex-direction:row;
    color: #fff;
  }
  `;
  const Ul = styledComponents.ul`
    display:flex;
    flex:1;
    flex-direction:row;
    list-style: none;
  `;
  const Li = styledComponents.li`
    margin: 0 0.5rem 0 0.5rem;
    justify-content: space-between;
    color:white;
  `;

  const Nav = styledComponents.nav`
    display:flex;
    flex:1;
    margin: 0.75rem 0 0 0;
    vertical-align: middle;
    flex-direction: row-reverse;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
`;
  const Title = styledComponents.p`
  margin: 0.5rem 0 0.5rem 3rem;
  font-weight:700;
  font-size:2rem;
`;
  const Flex = styledComponents.div`
    flex:5.5;
`;

  return (
    <>
      <Header>
        <Flex>
          <Title>Marketplace</Title>
        </Flex>
        <Nav>
          <Ul>
            <Li>
              <Link to="/">
                Inicio
              </Link>
            </Li>
            <Li>
              <Link to="/cart">
                
                  <BsCart2 />
                
              </Link>
            </Li>
            <Li>
              <Link to="blank">
                
                  <BiLogOut />
                
              </Link>
            </Li>
          </Ul>
        </Nav>
      </Header>
    </>
  );
}
