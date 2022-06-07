import React from "react";
import styled from "styled-components";
import "bulma/css/bulma.min.css";
const Pagination = ({ totalPages, handleClick }) => {
  const pages = [...Array(totalPages).keys()].map((num) => num + 1);

  return (
    <Container>
      {pages.map((num) => (
        <button
          className="button is-info"
          key={num}
          onClick={() => handleClick(num)}
        >
          {num}
        </button>
      ))}
    </Container>
  );
};

export default Pagination;

const Container = styled.div`
  width: 10%;
  margin: auto;
`;
