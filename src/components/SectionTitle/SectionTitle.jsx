import React from "react";
import styled from "styled-components";

const TitleSection = styled.div`
  /* margin-top: 2em; */
  width: 80%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: -2rem;
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
  font-size: 90px;

  letter-spacing: 0.08em;
  color: #000;
`;

const SectionTitle = ({ text }) => {
  return (
    <TitleSection>
      <img
        class="tn-atom__img t-img loaded"
        data-original="https://static.tildacdn.com/tild3364-6232-4265-b333-306132616564/Vector_3.svg"
        imgfield="tn_img_1610455862242"
        src="https://static.tildacdn.com/tild3364-6232-4265-b333-306132616564/Vector_3.svg"
      />
      <Title>{text}</Title>
      <ReverseImg
        class="tn-atom__img t-img loaded"
        data-original="https://static.tildacdn.com/tild3364-6232-4265-b333-306132616564/Vector_3.svg"
        imgfield="tn_img_1610455862250"
        src="https://static.tildacdn.com/tild3364-6232-4265-b333-306132616564/Vector_3.svg"
      />
    </TitleSection>
  );
};

export default SectionTitle;
