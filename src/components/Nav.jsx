import React, { useEffect, useState } from "react";
import styled from "styled-components";
import HeaderButton from "./Buttons/HeaderButton";
import useModal from "../hooks/useModal";
import Modal from "./Modal";

const Section = styled.section`
  width: 100vw;
  border-radius: 10px;
  background-color: transparent;
  z-index: 1000;
  margin: 0 auto;
  /* opacity: 1; */
  opacity: ${(props) => (props.showMenu ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;

  position: absolute;
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 75%;
  height: ${(props) => props.theme.navHeight};

  margin: 0 auto;
`;

const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
`;

const MenuButtons = styled.li`
  margin: 0 1rem;
  color: #ffffff;
  cursor: pointer;
`;

const MenuItem = styled.li`
  margin: 0 1rem;

  cursor: pointer;

  &::after {
    content: " ";
    display: block;
    width: 0%;
    height: 2px;
    background: #000;
    transition: width 0.3s ease;
  }
  &:hover::after {
    width: 100%;
  }

  @media (max-width: 64em) {
    margin: 1rem 0;

    &::after {
      content: " ";
      display: block;
      width: 0%;
      height: 2px;
      background: #d5ff10;
      transition: width 0.3s ease;
    }
    &:hover::after {
      width: 100%;
    }
  }
`;

const Btn = styled.button`
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
  position: relative;
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;

  &:hover {
    background-color: #0056b3;
    transform: scale(1.1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
`;

const Nav = () => {
  const { isShowing, toggle } = useModal();
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    // Устанавливаем showMenu в true после монтирования компонента
    setShowMenu(true);
  }, []);

  return (
    <Section showMenu={showMenu}>
      <NavBar>
        <div>
          <h1>Logo</h1>
        </div>
        <Menu>
          <MenuItem>Послуги</MenuItem>
          <MenuItem>Досвід</MenuItem>
          <MenuItem>Результати</MenuItem>
          <MenuItem>Відгуки</MenuItem>
          <MenuItem>Локація</MenuItem>
          <MenuItem>Історія</MenuItem>
          <MenuItem>Контакти</MenuItem>
        </Menu>
        <div>
          <Btn onClick={toggle}>Консультація</Btn>
        </div>
      </NavBar>
      <Modal isShowing={isShowing} hide={toggle} title={"trailer"}></Modal>
    </Section>
  );
};

export default Nav;
