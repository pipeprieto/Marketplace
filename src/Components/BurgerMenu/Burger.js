import { GiHamburgerMenu } from "react-icons/gi";
import styled from "styled-components";

export default function Burger(props) {
  //Función encargada de mostrar el navbar
  function showLinks(params) {}

  //Variable que guarda el tamaño de la pantalla
  var screen = window.innerWidth;

  //Styled Components
  const HiddenButton = styled.div`
    display: none;
  `;
  const BurgerDiv = styled.div`
    display: flex;
    flex: 1;
    background-color: #0d6efd;
    color: white;
  `;
  if (screen > 420) {
    return (
      <HiddenButton>
        <GiHamburgerMenu />
      </HiddenButton>
    );
  } else {
    return (
      <BurgerDiv onClick={showLinks}>
        <GiHamburgerMenu />
      </BurgerDiv>
    );
  }
}
