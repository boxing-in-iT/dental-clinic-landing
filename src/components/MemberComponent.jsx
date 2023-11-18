import React from "react";
import styled from "styled-components";

const Item = styled.div`
  width: calc(20rem - 4vw);
  padding: 1rem 0;
  margin: 2rem 1rem;
  position: relative;
  transition: all 0.3s ease;

  /* &:hover {
    img {
      transform: translateY(-2rem) scale(1.2);
    }
  } */

  @media (max-width: 64em) {
    width: 70vw;
  }
`;

const ImageContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  cursor: pointer;

  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }
  @media (max-width: 64em) {
    img {
      width: 80%;
    }
  }
`;

const Name = styled.h2`
  font-size: ${(props) => props.theme.fontlg};
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  color: white;
  margin-top: 1rem;

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontlg};
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Position = styled.h2`
  font-size: ${(props) => props.theme.fontmd};
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: capitalize;
  color: white;
  margin-top: 1rem;
  font-weight: 400;
`;

const MemberComponent = ({ img, name, position }) => {
  return (
    <Item>
      <ImageContainer>
        <img src={img} alt={name} />
      </ImageContainer>
      <Name>{name}</Name>
      <Position>{position}</Position>
    </Item>
  );
};

export default MemberComponent;
