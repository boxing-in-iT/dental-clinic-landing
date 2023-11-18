import React from "react";
import styled from "styled-components";
import SectionTitle from "../components/SectionTitle/SectionTitle";

import exp1 from "../assets/experience/exp1.jpeg";

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
  justify-content: center;
  align-items: center;
  margin: 0;
  @media (max-width: 64em) {
    flex-direction: column-reverse;
  }
`;

// const Image = styled.img`
//   width: 75%;
//   border-radius: 50px;
// `;
const Image = styled.img`
  width: 75%;
  border-radius: 50px;
`;

const Title = styled.h3`
  font-style: bold;
  font-size: 24px;
  color: black;
`;

const Experience = () => {
  return (
    <Section>
      <SectionTitle color={"black"} text={"Наш досвід!"} />
      <Container>
        <Box>
          <Title>Тисячі вдячних пацієнтів</Title>
          <Image src={exp1} alt="img" />
        </Box>
        <Box>
          <Title>Від 12 місяців гарантії роботи</Title>
          <Image src={exp1} alt="img" />
        </Box>
        <Box>
          <Title>
            Більше 15 років досвіду <br />в сфері стоматології
          </Title>
          <Image src={exp1} alt="img" />
        </Box>
      </Container>
    </Section>
  );
};

export default Experience;
