import React from "react";
import styled from "styled-components";

const TitleSection = styled.div`
  /* margin-top: 2em; */
  width: 80%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: -2rem;
  @media (max-width: 64em) {
    margin-bottom: 5rem;
  }
`;

const ReverseImg = styled.img`
  transform: rotate(180deg);
`;

const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 60px;

  letter-spacing: 0.08em;
  /* color: #fff; */
  color: ${(props) => (props.color == "black" ? "black" : "white")};
  @media (max-width: 64em) {
    font-size: 2rem;
    text-align: center;
  }
`;

const SectionTitle = ({ text, color }) => {
  return (
    <TitleSection>
      <img
        data-original="https://static.tildacdn.com/tild3364-6232-4265-b333-306132616564/Vector_3.svg"
        imgfield="tn_img_1610455862242"
        src="https://static.tildacdn.com/tild3364-6232-4265-b333-306132616564/Vector_3.svg"
      />
      <Title color={color}>{text}</Title>
      <ReverseImg
        data-original="https://static.tildacdn.com/tild3364-6232-4265-b333-306132616564/Vector_3.svg"
        imgfield="tn_img_1610455862250"
        src="https://static.tildacdn.com/tild3364-6232-4265-b333-306132616564/Vector_3.svg"
      />
    </TitleSection>
  );
};

export default SectionTitle;
