import React from "react";
import styled from "styled-components";

const InputWrapper = styled.input`
  font-family: inherit;
  font-size: inherit;
  border: none;
  background-color: #f1f3f5;
  box-sizing: border-box;
  padding: 8px;
  border-radius: 3px;

  &:focus {
    outline: 1px solid #5f3dc4;
  }
`;

export default function Input({
  id,
  type,
  name,
  placeholder,
  onChange,
  value,
  accept,
}) {
  return (
    <InputWrapper
      id={id}
      type={type}
      name={name}
      accept={accept}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
    />
  );
}
