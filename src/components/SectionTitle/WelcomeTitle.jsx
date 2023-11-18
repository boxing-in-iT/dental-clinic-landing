import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 3.5rem;
  font-family: "Press Start 2P";
  color: white;
  @media (max-width: 64em) {
    font-size: 2.5rem;
  }
  margin: 0;
  z-index: 1000;

  opacity: ${(props) => (props.showMenu ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
`;

const SubTitle = styled.h2`
  font-size: 22px;
  font-family: "Press Start 2P";
  color: white;
  @media (max-width: 64em) {
    font-size: 1.5rem;
    font-weight: 100;
  }
  z-index: 1000;

  opacity: ${(props) => (props.showMenu ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
`;

const WelcomeTitle = (props) => {
  const { title, subtitle } = props;

  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    // Устанавливаем showMenu в true после монтирования компонента
    setShowMenu(true);
  }, []);
  return (
    <>
      <Title showMenu={showMenu}>{title}</Title>
      <SubTitle showMenu={showMenu}>{subtitle}</SubTitle>
    </>
  );
};

export default WelcomeTitle;
