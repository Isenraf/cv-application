import React from "react";
import Label from "./Label";
import styled from "styled-components";

const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export default function Field({ id, text, control, clas }) {
  return (
    <FieldWrapper className={clas}>
      <Label id={id} text={text} />
      {control}
    </FieldWrapper>
  );
}
