import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import styled from "styled-components";

import { cards, images } from "../../../constants/constants";

const Container = styled.div`
  width: 100vw;
  height: 70vh;

  @media (max-width: 70em) {
    height: 60vh;
  }

  @media (max-width: 64em) {
    width: 60vw;
    height: 60vh;
  }

  @media (max-width: 48em) {
    width: 40vw;
    height: 35vh;
  }

  @media (max-width: 30em) {
    width: 80vw;
    height: 20vh;

    z-index: -100;
  }

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 40vw;
    max-width: 100%; // Добавленная строка для подстройки размера
    height: auto;
    border-radius: 15px;
  }
  @media (max-width: 64em) {
    img {
      width: 40vw;
      max-width: 100%; // Добавленная строка для подстройки размера
      height: auto;
      border-radius: 15px;
    }
  }
`;

const Carousel = () => {
  return (
    <Container>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        {cards.map((card, i) => (
          <SwiperSlide key={card.id}>
            <img src={card.url} alt={card.title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default Carousel;
