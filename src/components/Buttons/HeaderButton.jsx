import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  border-radius: 4px;
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

const HeaderButton = ({ text, onClick }) => {
  return <Btn onClick={onClick}>{text}</Btn>;
};

export default HeaderButton;
