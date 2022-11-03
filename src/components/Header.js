import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  padding: 16px;
  text-transform: uppercase;
  color: #f8f9fa;
  font-weight: 700;
  font-size: 24px;
  background-color: #1d1d20;
`;

export default function Header({ name }) {
  return <HeaderWrapper>{name}</HeaderWrapper>;
}
