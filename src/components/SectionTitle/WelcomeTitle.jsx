import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 3.5rem;
  font-family: "Press Start 2P";
  @media (max-width: 64em) {
    font-size: 1.25rem;
  }
  margin: 0;
  z-index: 1000;

  opacity: ${(props) => (props.showMenu ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
`;

const SubTitle = styled.h2`
  font-size: 22px;
  font-family: "Press Start 2P";
  @media (max-width: 64em) {
    font-size: 0.75rem;
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
