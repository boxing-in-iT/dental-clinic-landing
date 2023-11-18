import React, { useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import exp1 from "../assets/experience/exp1.jpeg";
import HeaderButton from "../components/Buttons/HeaderButton";
import { purposes } from "../constants/constants";
import { sendToPost } from "../api/postMail";
import { useForm } from "react-hook-form";
// import { purposes } from "../constants/constants";

const Section = styled.section`
  min-height: 120vh;
  width: 100%;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  color: #ffffff;
  background-color: #352f44;
`;

const Container = styled.div`
  width: 75%;
  margin-top: -150px;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;

  @media (max-width: 64em) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`;

const Box = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 150px;
  @media (max-width: 64em) {
    width: 100%;
  }
`;

const Title = styled.h3`
  font-size: 48px;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const FormTitle = styled.h4`
  text-align: center;
  font-size: 2rem;
  font-weight: 300;
  @media (max-width: 64em) {
    font-size: 1.5rem;
  }
`;

const Input = styled.input`
  margin-top: 40px;

  width: 80%;
  border: none;
  border-bottom: 2px solid white;
  outline: none;
  background-color: transparent;
  font-size: 24px;
  color: white;
`;

const P = styled.p`
  font-size: 28px;
`;

const CheckBoxGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const CheckBoxContainer = styled.label`
  display: flex;
  align-items: center;
  margin-top: 10px; // Adjust the margin as needed
`;

const CheckBox = styled.input`
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid white;
  border-radius: 4px;
  margin-right: 8px;
  cursor: pointer;

  &:checked {
    background-color: transparent; /* Цвет фона галочки */
  }

  &:checked::before {
    content: "✔"; /* Символ галочки */
    display: block;
    text-align: center;
    color: white; /* Цвет символа галочки */
  }
`;

const Btn = styled.button`
  margin-top: 30px;
  margin-bottom: 1rem;
  width: 50%;
  height: 50px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
  position: relative;
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;

  &:hover {
    background-color: #0056b3;
    transform: scale(1.1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
`;

const SignUp = () => {
  const {
    register,
    reset,
    handleSubmit,
    watch,
    formState: { errors, isSubmitted },
  } = useForm();

  const onSubmit = (data) => {
    const purposesArray = Object.entries(data.purposes);
    const selectedPurposes = purposesArray
      .filter(([purpose, value]) => value === true)
      .map(([purpose]) => purpose);
    const sendData = {
      name: data.name,
      phone: data.phone,
      selectedPurposes: selectedPurposes,
    };
    reset();
    sendToPost(sendData);
  };

  return (
    <Section>
      <Title>Готові записатись на візит?</Title>
      <Container>
        <Box>
          <img src={exp1} />
        </Box>
        <Box>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <FormTitle>Вкажіть ваші дані і ми звʼяжемось з вами</FormTitle>
            <Input
              type="text"
              placeholder="Імʼя"
              {...register("name", {
                required: "Це поле обов'язкове",
                minLength: {
                  value: 2,
                  message: "Ім'я повинно містити принаймні 2 символи",
                },
              })}
            />
            {errors.name && <p>{errors.name.message}</p>}
            <Input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="(XXX) XXX-XXXX"
              {...register("phone", {
                required: "Це поле обов'язкове",
                pattern: {
                  value: /^\d{10}$/,
                  message: "Неправильний формат телефонного номеру",
                },
              })}
            />
            {errors.phone && <p>{errors.phone.message}</p>}
            <P>Що вам потрібно?</P>
            <CheckBoxGroup>
              {purposes.map((data, i) => (
                <CheckBoxContainer key={data.id}>
                  <CheckBox
                    type="checkbox"
                    {...register(`purposes.${data.name}`)}
                  />
                  {data.name}
                </CheckBoxContainer>
              ))}
            </CheckBoxGroup>

            <Btn type="submit">Замовити дзвінок</Btn>
          </Form>
        </Box>
      </Container>
    </Section>
  );
};

export default SignUp;
