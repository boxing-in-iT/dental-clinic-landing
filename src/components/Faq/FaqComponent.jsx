import React from "react";
import styled from "styled-components";

const FAQSection = styled.div``;

const Question = styled.div`
  position: relative;
  font-size: ${(props) => props.theme.fontlg};
  transition: all 0.4s ease;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 900;

  &::after {
    padding-right: 10px;
    content: "∨";
    position: absolute;
    top: 50%;
    right: -2%;
    transform: translateY(-50%);
    width: 30px;
    height: 30px;
    transition: all 0.2s ease;

    @media (max-width: 48em) {
      right: -5%;
    }

    @media (max-width: 30em) {
      right: -10%;
    }
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontmd};
  }

  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontxs};
  }
`;

const Answer = styled.div`
  opacity: 0;
  max-height: 0;
  overflow: hidden;
  transition: all 0.2s ease;

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontmd};
  }

  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontxs};
  }
`;

const FaqComponent = ({ faq, index, toggleFAQ }) => {
  return (
    <FAQSection
      className={"faq " + (faq.open ? "open" : "")}
      key={index}
      onClick={() => toggleFAQ(index)}
    >
      <Question className="faq-question">{faq.question}</Question>
      <Answer className="faq-answer">{faq.answer}</Answer>
    </FAQSection>
  );
};

export default FaqComponent;
