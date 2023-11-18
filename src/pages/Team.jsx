import React from "react";
import styled from "styled-components";
import { teamMembers } from "../constants/constants";
import MemberComponent from "../components/MemberComponent";
import SectionTitle from "../components/SectionTitle/SectionTitle";

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  color: #ffffff;
`;

const Container = styled.div`
  width: 75%;
  margin-top: -100px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 30em) {
    width: 90%;
    justify-content: center;
  }
`;

const Team = () => {
  return (
    <Section>
      <SectionTitle color={"white"} text={"Наша команда!"} />
      <Container>
        {teamMembers.map((data, i) => (
          <MemberComponent
            key={i}
            img={data.img}
            name={data.name}
            position={data.position}
          />
        ))}
      </Container>
    </Section>
  );
};

export default Team;
