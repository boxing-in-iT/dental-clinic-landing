import React from "react";
import styled from "styled-components";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import ProgressSlides from "../components/Carousels/ProgressSlides";

const Section = styled.section`
  margin-top: 0;
  min-height: 100vh;
  width: 100%;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
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
  }
  @media (max-width: 48em) {
    justify-items: center;
    flex-direction: column-reverse;
    gap: 1rem;

    & > *:first-child {
      width: 100%;
      /* margin-top: 1rem; */
    }
  }
`;

const Results = () => {
  return (
    <Section>
      <SectionTitle color={"black"} text={"Клініка та її результати"} />
      <Container>
        <ProgressSlides />
      </Container>
    </Section>
  );
};

export default Results;
