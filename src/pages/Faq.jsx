import React, { useState } from "react";
import styled from "styled-components";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  color: black;
  background-color: white;
  z-index: 100;
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
    flex-direction: column;
    /* gap: 2rem; */

    & > *:first-child {
      width: 100%;
      /* margin-top: 2rem; */
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
`;

const Title = styled.h2`
  font-size: 72px;
  @media (max-width: 64em) {
    font-size: 3rem;
    text-align: center;
  }
`;

const FaqWrapper = styled.div`
  max-width: 700px;
  margin-top: 2rem;
  padding-bottom: 1rem;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  cursor: pointer;
`;

const Question = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const QuestionTitle = styled.h3`
  font-size: 1.8rem;
`;

const Answer = styled.div`
  max-height: 0;
  overflow: hidden;
  transition: max-height 1.4s ease; /* Add a smooth transition effect */
  p {
    padding-top: 1rem;
    line-height: 1.6;
    font-size: 1rem;
  }

  &.active {
    max-height: 300px; /* Use max-height instead of height */
  }
`;

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <Section>
      <Container>
        <Box>
          <Title>Часті запитання</Title>
        </Box>
        <Box>
          <FaqWrapper
            onClick={() => handleToggle(0)}
            className={activeIndex === 0 ? "active" : ""}
          >
            <Question>
              <QuestionTitle>Де знаходиться клініка 1</QuestionTitle>
            </Question>
            <Answer className={activeIndex === 0 ? "active" : ""}>
              <p>Головна 124а</p>
            </Answer>
          </FaqWrapper>
          <FaqWrapper
            onClick={() => handleToggle(1)} // Уникальный индекс для второго элемента
            className={activeIndex === 1 ? "active" : ""}
          >
            <Question>
              <QuestionTitle>Де знаходиться клініка 2</QuestionTitle>
            </Question>
            <Answer className={activeIndex === 1 ? "active" : ""}>
              <p>Головна 124б</p>
            </Answer>
          </FaqWrapper>
        </Box>
      </Container>
    </Section>
  );
};

export default Faq;

// const Faq = () => {
//   const faqs = document.querySelector("FaqWrapper");

//   faqs.array.forEach((element) => {
//     element.addEventListener("click", () => {
//       element.classList.toggle("active");
//     });
//   });

//   return (
//     <Section>
//       <Container>
//         <Box>
//           <Title>Часті запитання</Title>
//         </Box>
//         <Box>
//           <FaqWrapper>
//             <Question>
//               <QuestionTitle>Де знаходиться клініка</QuestionTitle>
//             </Question>
//             <Answer>
//               <p>Головна 124а</p>
//             </Answer>
//           </FaqWrapper>
//         </Box>
//       </Container>
//     </Section>
//   );
// };

// export default Faq;
