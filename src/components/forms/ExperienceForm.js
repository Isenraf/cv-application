import React from "react";
import Field from "../utils/Field";
import Input from "../utils/Input";
import styled from "styled-components";
import TextArea from "../utils/TextArea";

const FormWrapper = styled.form`
  border: 1px solid #ced4da;
  padding: 16px;
  border-radius: 5px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;

  .posi,
  .expDesc {
    grid-column: 1/-1;
  }
`;

export default function ExperienceForm({ onChange, value }) {
  return (
    <FormWrapper>
      <Field
        id="posi"
        clas="posi"
        text="Position"
        control={
          <Input
            id="posi"
            type="text"
            name="position"
            onChange={onChange}
            value={value.position}
          />
        }
      />
      <Field
        id="empl"
        text="Employer"
        control={
          <Input
            id="empl"
            type="text"
            name="employer"
            onChange={onChange}
            value={value.employer}
          />
        }
      />
      <Field
        id="expCity"
        text="City"
        control={
          <Input
            id="expCity"
            type="text"
            name="city"
            onChange={onChange}
            value={value.city}
          />
        }
      />
      <Field
        id="from"
        text="Start date"
        control={
          <Input
            id="from"
            type="text"
            name="from"
            placeholder="ex -> Feb 2013"
            onChange={onChange}
            value={value.from}
          />
        }
      />
      <Field
        id="to"
        text="End date"
        control={
          <Input
            id="to"
            type="text"
            name="to"
            placeholder="ex -> Seb 2019"
            onChange={onChange}
            value={value.to}
          />
        }
      />
      <Field
        id="expDesc"
        clas="expDesc"
        text="Description"
        control={
          <TextArea
            id="expDesc"
            name="description"
            placeholder="Tell us about your experience journey..."
            onChange={onChange}
            value={value.description}
          />
        }
      />
    </FormWrapper>
  );
}
