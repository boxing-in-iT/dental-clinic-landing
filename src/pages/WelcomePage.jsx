import React, { useEffect, useState } from "react";
import styled from "styled-components";
import WelcomeTitle from "../components/SectionTitle/WelcomeTitle";
import HeaderButton from "../components/Buttons/HeaderButton";
import WelcomeImg from "../assets/welcome.jpeg";
import useModal from "../hooks/useModal";
import Modal from "../components/Modal";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  /* color: #ffffff; */
  color: black;
  z-index: 100;
  position: relative; /* добавлено для позиционирования псевдоэлемента */

  /* Добавляем стили псевдоэлемента */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${WelcomeImg}) center/cover no-repeat; /* задний фон изображения */
    opacity: 0.5; /* настройте значение непрозрачности по вашему вкусу */
  }
`;

const Container = styled.div`
  position: relative;
  width: 70%;
  min-height: 80vh;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 64em) {
    width: 85%;
  }

  @media (max-width: 48em) {
    justify-items: center;
    flex-direction: column-reverse;
    gap: 2rem;

    & > *:first-child {
      width: 100%;
      margin-top: 2rem;
    }
  }
`;

const Box = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 150px;
`;

const WelcomePage = () => {
  const { isShowing, toggle } = useModal();

  return (
    <Section>
      <Container>
        <Box>
          <WelcomeTitle
            title={"Стоматологічна клініка MAINZ"}
            subtitle={
              "Лікування зубів, брекети, відновлення та чистка в Чернівцях"
            }
          />
          <HeaderButton text={"Записатись на консультацію"} onClick={toggle} />
        </Box>
      </Container>
      <Modal isShowing={isShowing} hide={toggle} title={"trailer"}></Modal>
    </Section>
  );
};

export default WelcomePage;
