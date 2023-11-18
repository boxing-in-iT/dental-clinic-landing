import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

import exp1 from "../assets/experience/exp1.jpeg";
import FormModal from "./FormModal";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1040;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalWrapper = styled.div`
  position: relative;
  z-index: 1050;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWindow = styled.div`
  position: relative;
  border-radius: 5px;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-height: 80vh;
  padding: 1rem;
  overflow: hidden;
  overflow-y: auto;
  width: 70%; /* Adjust the width as needed */
  /* max-width: 800px; */
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Box = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Modal = ({ isShowing, hide, title, ...props }) => {
  return isShowing
    ? ReactDOM.createPortal(
        <>
          <ModalOverlay>
            <ModalWrapper>
              <ModalWindow>
                <CloseButton onClick={hide}>X</CloseButton>
                <Content className="modal-body">
                  {props.children}
                  <FormModal hide={hide} />
                </Content>
              </ModalWindow>
            </ModalWrapper>
          </ModalOverlay>
        </>,
        document.body
      )
    : null;
};

Modal.propTypes = {
  isShowing: PropTypes.bool.isRequired,
  hide: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default Modal;
