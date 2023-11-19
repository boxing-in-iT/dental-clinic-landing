import React from "react";
import styled from "styled-components";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import Carousel from "../components/Carousels/Carousel/Carousel";

const Section = styled.section`
  margin-top: 0;
  min-height: 100vh;
  width: 100%;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 64em) {
    min-height: 40vh;
  }
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  min-height: 80vh;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 64em) {
    width: 85%;
    min-height: 30vh;
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

const Services = () => {
  return (
    <Section>
      <SectionTitle color={"white"} text={"Послуги"} />
      <Container>
        <Carousel />
      </Container>
    </Section>
  );
};

export default Services;
