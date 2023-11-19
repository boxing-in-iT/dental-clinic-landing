import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import styled from "styled-components";
import { cards } from "../../../constants/constants";
import Card from "./Card";

const Section = styled.section`
  position: relative;
  height: 300vh;
  background-color: white;
  @media (max-width: 64em) {
    height: 50vh;
  }
`;

const Container = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  overflow: hidden;
  align-items: center;
  height: 100vh;
  @media (max-width: 64em) {
    height: 25vh;
  }
`;

const MDiv = styled(motion.div)`
  display: flex;
  gap: 1rem;
`;

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <Section ref={targetRef}>
      <Container>
        <MDiv style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </MDiv>
      </Container>
    </Section>
  );
};

export default HorizontalScrollCarousel;
