import React from "react";
import styled from "styled-components";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  /* position: relative; */
  background-color: #000000;
  color: #ffffff;
  z-index: 100;
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  min-height: 80vh;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
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
  height: 100%;
`;

const Box2 = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

const Results = () => {
  return (
    <Section>
      <Container>
        <Box>Slider</Box>
        <Box2>
          <div>Клініка та результати</div>
          <div>Buttons</div>
        </Box2>
      </Container>
    </Section>
  );
};

export default Results;
