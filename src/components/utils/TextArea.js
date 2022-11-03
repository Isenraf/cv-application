import React from "react";
import styled from "styled-components";

const TextAreaWrapper = styled.textarea`
  font-family: inherit;
  font-size: inherit;
  border: none;
  background-color: #f1f3f5;
  box-sizing: border-box;
  padding: 12px 20px;
  resize: none;
  border-radius: 3px;
  width: 100%;
  height: 150px;

  &:focus {
    outline: 1px solid #5f3dc4;
  }
`;

export default function TextArea({ id, name, placeholder, onChange, value }) {
  return (
    <TextAreaWrapper
      id={id}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}
