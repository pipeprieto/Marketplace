import { BsCart2 } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import styledComponents from "styled-components";

export default function Header(props) {
  const Link = styledComponents.a`{
    color: #fff;
    font-size: 1.25rem;
    text-decoration: none;
  }
  `;
  const HoverLink = styledComponents.p`{
    margin-top:6px;
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
  const Ul = styledComponents.ul`
    display:flex;
    flex:1;
    flex-direction:row;
    list-style: none;
  `;
  const Li = styledComponents.li`
    margin: 0 0.5rem 0 0.5rem;
    justify-content: space-between;
  `;

  const Nav = styledComponents.nav`
    display:flex;
    flex:1;
    margin: 0.75rem 3rem 0 0;
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
    flex:3.5;
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
              <Link href="blank">
                <HoverLink>Inicio</HoverLink>
              </Link>
            </Li>
            <Li>
              <Link href="blank">
                <HoverLink>Otra sección</HoverLink>
              </Link>
            </Li>
            <Li>
              <Link href="blank">
                <HoverLink>
                  <BsCart2 />
                </HoverLink>
              </Link>
            </Li>
            <Li>
              <Link>
                <HoverLink>
                  <BiUserCircle />
                </HoverLink>
              </Link>
            </Li>
          </Ul>
        </Nav>
      </Header>
    </>
  );
}
