import React from "react";
import styled from "styled-components";

const LabelWrapper = styled.label`
  font-size: 14px;
  color: #343a40;
`;

export default function Label({ id, text }) {
  return <LabelWrapper htmlFor={id}>{text}</LabelWrapper>;
}
