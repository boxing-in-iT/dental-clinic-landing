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
  opacity: ${(props) => (props.showMenu ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;

  position: absolute;
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 75%;
  height: 100px;

  margin: 0 auto;

  .mobile {
    display: none;
  }

  @media (max-width: 64em) {
    gap: 1rem;
    .desktop {
      display: none;
    }

    .mobile {
      display: flex;
    }
  }
`;

const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;

  @media (max-width: 64em) {
    /* 1024px */
    position: fixed;
    top: 5rem;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    z-index: 10000;
    /* background-color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.85)`}; */
    backdrop-filter: blur(2px);

    transform: ${(props) =>
      props.click ? "translateY(0)" : "translateY(1000%)"};
    transition: all 0.3s ease;

    flex-direction: column;
    justify-content: center;
  }
`;

const MenuButtons = styled.li`
  margin: 0 1rem;
  color: #ffffff;
  cursor: pointer;
`;

const MenuItem = styled.li`
  margin: 0 1rem;
  color: white;
  cursor: pointer;

  &::after {
    content: " ";
    display: block;
    width: 0%;
    height: 2px;
    background: white;
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
      background: #000;
      transition: width 0.3s ease;
    }
    &:hover::after {
      width: 100%;
    }
  }
`;

const HamburgerMenu = styled.span`
  width: ${(props) => (props.click ? "2rem" : "1.5rem")};
  height: 2px;
  background: #ffffff;

  top: 2rem;
  left: 50%;
  transform: ${(props) =>
    props.click
      ? "translateX(-50%) rotate(90deg)"
      : "translateX(-50%) rotate(0)"};

  display: flex;

  cursor: pointer;
  transition: all 0.3s ease;

  &::after,
  &::before {
    content: " ";
    width: ${(props) => (props.click ? "1rem" : "1.5rem")};
    height: 2px;
    right: ${(props) => (props.click ? "-2px" : "0")};
    background: #ffffff;
    position: absolute;
    transition: all 0.3s ease;
  }

  &::after {
    top: ${(props) => (props.click ? "0.3rem" : "0.5rem")};
    transform: ${(props) => (props.click ? "rotate(-40deg)" : "rotate(0)")};
  }

  &::before {
    bottom: ${(props) => (props.click ? "0.3rem" : "0.5rem")};
    transform: ${(props) => (props.click ? "rotate(40deg)" : "rotate(0)")};
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
  const [click, setClick] = useState(false);
  const { isShowing, toggle } = useModal();
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    setShowMenu(true);
  }, []);

  return (
    <Section showMenu={showMenu}>
      <NavBar>
        <div>
          <h1>Logo</h1>
        </div>
        <HamburgerMenu
          className="mobile"
          click={click}
          onClick={() => setClick(!click)}
        >
          &nbsp;
        </HamburgerMenu>
        <Menu click={click}>
          <MenuItem>Послуги</MenuItem>
          <MenuItem>Досвід</MenuItem>
          <MenuItem>Результати</MenuItem>
          <MenuItem>Відгуки</MenuItem>
          <MenuItem>Локація</MenuItem>
          <MenuItem>Історія</MenuItem>
          <MenuItem>Контакти</MenuItem>
          <div className="mobile">
            <Btn onClick={toggle}>Консультація</Btn>
          </div>
        </Menu>

        <div className="desktop">
          <Btn onClick={toggle}>Консультація</Btn>
        </div>
      </NavBar>
      <Modal isShowing={isShowing} hide={toggle} title={"trailer"}></Modal>
    </Section>
  );
};

export default Nav;
