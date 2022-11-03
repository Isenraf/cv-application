import React from "react";
import styled from "styled-components";
import noise from "../assets/noisebg.png";

const FooterWrapper = styled.footer`
  padding: 16px;
  text-transform: uppercase;
  color: #f8f9fa;
  background-image: url(${noise});
  text-align: center;
  font-size: 12px;
  font-weight: 600;
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <p>copyright @ 2022 isenraf</p>
    </FooterWrapper>
  );
}
