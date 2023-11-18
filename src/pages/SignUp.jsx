import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import exp1 from "../assets/experience/exp1.jpeg";
import HeaderButton from "../components/Buttons/HeaderButton";

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

  @media (max-width: 30em) {
    width: 90%;
    justify-content: center;
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
`;

const Title = styled.h3`
  font-size: 48px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const FormTitle = styled.h4`
  font-size: 18px;
  font-weight: 300;
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
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);

  const memoizedName = useMemo(() => name, [name]);
  const mamoizedPhoneNumber = useMemo(() => phoneNumber, [phoneNumber]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const checkboxes = [
    "Консультація",
    "Гігієна ротової порожнини",
    "Лікування",
    "Встановлення коронки",
    "Відбілювання",
    "Встановлення брекет системи",
    "Імплантація",
    "Інше",
  ];

  useEffect(() => {
    console.log("Effect");
  });

  return (
    <Section>
      <Title>Готові записатись на візит?</Title>
      <Container>
        <Box>
          <img src={exp1} />
        </Box>
        <Box>
          <Form>
            <FormTitle>Вкажіть ваші дані і ми звʼяжемось з вами</FormTitle>
            <Input
              type="text"
              placeholder="Імʼя"
              value={memoizedName}
              onChange={handleNameChange}
              required
            />
            <Input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="(XXX) XXX-XXXX"
              value={mamoizedPhoneNumber}
              onChange={handlePhoneNumberChange}
              required
            />
            <P>Що вам потрібно?</P>
            {checkboxes.map((data, i) => (
              <CheckBoxContainer>
                <CheckBox type="checkbox" /> {data}
              </CheckBoxContainer>
            ))}
            <Btn
              onClick={() => {
                console.log();
              }}
            >
              Замовити дзвінок
            </Btn>
          </Form>
          {/* <Btn onClick={handleSubmit}>Записатись</Btn> */}
        </Box>
      </Container>
    </Section>
  );
};

export default SignUp;
