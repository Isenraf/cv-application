import React from "react";
import styled from "styled-components";

const FieldsetWrapper = styled.fieldset`
  border: none;
  border-top: 1px solid #ced4da;
  flex-grow: 1;
`;

const LegendWrapper = styled.legend`
  font-size: 20px;
  font-weight: 600;
  padding-right: 16px;
`;

export default function SubsectionTitle({ title }) {
  return (
    <FieldsetWrapper>
      <LegendWrapper>{title}</LegendWrapper>
    </FieldsetWrapper>
  );
}
