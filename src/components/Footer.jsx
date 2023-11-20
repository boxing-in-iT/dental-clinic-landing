import React from "react";
import styled from "styled-components";
import HeaderButton from "./Buttons/HeaderButton";
import useModal from "../hooks/useModal";
import Modal from "./Modal";

const Section = styled.section`
  min-height: 40vh;
  width: 100vw;
  position: relative;
  color: #ffffff;

  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  width: 75%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid black;

  @media (max-width: 48em) {
    width: 90%;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 48em) {
    width: 100%;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  color: white;
  padding: 1.5rem 2rem;
  z-index: 10;
  width: 35%;
  text-transform: capitalize;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 900;

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
    width: 50%;
    padding: 5rem;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontlg};
    padding: 0rem 0.5rem;
  }
`;

const Menu = styled.ul`
  width: 50%;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 1rem;

  @media (max-width: 48em) {
    display: none;
  }
`;

const MenuItem = styled.li`
  width: fit-content;
  color: #ffffff;
  cursor: pointer;

  &::after {
    content: " ";
    display: block;
    width: 0%;
    height: 2px;
    background: #fef22b;
    transition: width 0.3s ease;
  }
  &:hover::after {
    width: 100%;
  }
`;

const Bottom = styled.div`
  width: 75%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 48em) {
    flex-direction: column;
    width: 100%;
  }

  @media (max-width: 30em) {
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    span {
      margin-bottom: 1rem;
      font-size: ${(props) => props.theme.fontxs};
      text-align: center;
    }
  }
`;

const Footer = () => {
  const { isShowing, toggle } = useModal();
  return (
    <Section>
      <Container>
        <Left>
          <Title>Dental clinic</Title>
        </Left>
        <Menu>
          <MenuItem>Послуги</MenuItem>
          <MenuItem>Досвід</MenuItem>
          <MenuItem>Результати</MenuItem>
          <MenuItem>Відгуки</MenuItem>
          <MenuItem>Локація</MenuItem>
          <MenuItem>Історія</MenuItem>
          <MenuItem>Контакти</MenuItem>
        </Menu>
      </Container>
      <Bottom>
        <span>
          &copy; {new Date().getFullYear()} Dental Clinic. All rights reserved.
        </span>
        <HeaderButton text={"Консультація"} onClick={toggle} />
      </Bottom>
      <Modal isShowing={isShowing} hide={toggle} title={"trailer"}></Modal>
    </Section>
  );
};

export default Footer;
