import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  height: 450px;
  width: 450px;
  overflow: hidden;
  background-color: rgb(229 229 229);
  @media (max-width: 64em) {
    height: 200px;
    width: 200px;
  }
`;

const Carder = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 0;
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
  transition-duration: 300ms;

  background: url(${(props) => props.img}) center/cover no-repeat;
`;

const Card = ({ card }) => {
  return (
    <Wrapper key={card.id}>
      <Carder
        img={card.url}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></Carder>
    </Wrapper>
  );
};

export default Card;
