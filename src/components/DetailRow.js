import React from "react";
import styled from "styled-components";

const DetailRowWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

  i {
    font-size:24px;
  }
  span {
    font-weight 600;
    font-size: 14px;
  }
`;

export default function DetailRow({ icon, name }) {
  return (
    <DetailRowWrapper>
      {icon}
      <span>{name}</span>
    </DetailRowWrapper>
  );
}
