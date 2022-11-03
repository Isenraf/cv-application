import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.button`
  font-family: inherit;
  font-size: inherit;
  background-color: inherit;
  border: none;
  box-sizing: border-box;
  padding: 4px 8px;
  border-radius: 3px;
  outline: 1px solid #343a40;
  display: flex;
  align-items: center;
  gap: 4px;
  color: #343a40;

  &:hover {
    outline: 1px solid #5f3dc4;
    background-color: #f8f9fa;
    cursor: pointer;
  }
`;

export default function Button({ icon, text, type, onClick }) {
  return (
    <ButtonWrapper type={type} onClick={onClick}>
      {icon}
      {text}
    </ButtonWrapper>
  );
}
