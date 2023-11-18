import React, { useMemo, useState } from "react";
import styled from "styled-components";
import { purposes } from "../constants/constants";
import { sendToPost } from "../api/postMail";
import { useForm } from "react-hook-form";

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f8f8f8; /* Add a subtle background color */
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  text-align: center;
`;

const SubTitle = styled.h2`
  text-align: center;
`;

const Label = styled.label`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column-reverse;
  width: 70%;

  input {
    height: 50px;
    border: 1px solid #ddd;
    border-radius: 8px;
    outline: none;
    padding: 10px;
    font-size: 18px;
  }

  @media (max-width: 64em) {
    input {
      height: 25px;
    }
  }
`;

const Cards = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 1rem;
  align-items: center;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
/* background: url(${(props) => props.img}) center/cover no-repeat; */
const Card = styled.div`
  position: relative;
  height: 200px;
  width: 200px;
  background-color: #fff;
  background: ${(props) => `url(${props.img}) center/cover no-repeat`};
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
  @media (max-width: 64em) {
    height: 100px;
    width: 100px;
  }
`;

const CheckMark = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 36px;
  color: white;
  display: ${(props) => (props.visible ? "block" : "none")};
`;

const LabelText = styled.span`
  color: black;
  font-size: 1rem;
  margin-top: 10px;
  @media (max-width: 64em) {
    font-size: 0.5rem;
    text-align: center;
  }
`;

const Btn = styled.button`
  margin-top: 2rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 2rem;
  transition: background-color 0.3s, transform 0.3s;
  position: relative;
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 1rem 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #0056b3;
    transform: scale(1.1);
  }
  @media (max-width: 64em) {
    padding: 0.5rem 1rem;
  }
`;

const Info = styled.p`
  margin-top: 1rem;
  font-size: 1rem;
  color: gray;
  font-weight: 300;
  @media (max-width: 64em) {
    font-size: 0.75rem;
    text-align: center;
  }
`;

const ErrorMessage = styled.p`
  font-size: 16px;
  color: red;
  margin-top: 5px;
  font-weight: 200;
`;

const FormModal = ({ hide }) => {
  const [selectedCards, setSelectedCards] = useState([]);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleCardClick = (cardId) => {
    setSelectedCards((prevSelectedCards) =>
      prevSelectedCards.includes(cardId)
        ? prevSelectedCards.filter((id) => id !== cardId)
        : [...prevSelectedCards, cardId]
    );
  };

  const onSubmit = (data) => {
    const dataToSend = {
      name: data.name,
      phone: data.phone,
      selectedCards: selectedCards.map((cardId) => {
        const selectedCard = purposes.find((card) => card.id === cardId);
        return { name: selectedCard.name };
      }),
    };
    reset();
    sendToPost(dataToSend);
    hide();
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Title>Запис на консультацію</Title>
        <SubTitle>Введіть ваші дані</SubTitle>
        <Label>
          <input
            placeholder="Імʼя"
            {...register("name", {
              required: "Це поле обов'язкове",
              minLength: {
                value: 2,
                message: "Ім'я повинно містити принаймні 2 символи",
              },
            })}
          />
        </Label>
        {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
        <Label>
          <input
            placeholder="Телефон"
            {...register("phone", {
              required: "Це поле обов'язкове",
              pattern: {
                value: /^\d{10}$/,
                message: "Неправильний формат телефонного номеру",
              },
            })}
          />
        </Label>
        {errors.phone && <ErrorMessage>{errors.phone.message}</ErrorMessage>}
        <h3>Ціль візиту</h3>
        <Cards>
          {purposes.map((card) => (
            <CardWrapper>
              <Card
                key={card.id}
                onClick={() => handleCardClick(card.id)}
                img={card.img}
              >
                <CheckMark visible={selectedCards.includes(card.id)}>
                  ✔
                </CheckMark>
              </Card>
              <LabelText>{card.name}</LabelText>
            </CardWrapper>
          ))}
        </Cards>
        <Btn type="submit">Записатись</Btn>
        <Info>Менеджер звʼяжеться з вами та узгодить дату і час візиту</Info>
      </Form>
    </>
  );
};

export default FormModal;
