import { GiHamburgerMenu } from "react-icons/gi";
import styled from "styled-components";

export default function Burger(props) {
  //Función encargada de mostrar el navbar
  function showLinks(params) {}
  //Styled Components
  const BurgerDiv = styled.div`
    display: flex;
    flex: 1;
    background-color: #0d6efd;
    color: white;
  `;
  return (
    <BurgerDiv onClick={showLinks}>
      <GiHamburgerMenu />
    </BurgerDiv>
  );
}
