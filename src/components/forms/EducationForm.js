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

export default function EducationForm({ onChange, value }) {
  return (
    <FormWrapper>
      <Field
        id="edu"
        clas="posi"
        text="Education"
        control={
          <Input
            id="edu"
            type="text"
            name="education"
            onChange={onChange}
            value={value.education}
          />
        }
      />
      <Field
        id="schl"
        text="School"
        control={
          <Input
            id="schl"
            type="text"
            name="school"
            onChange={onChange}
            value={value.school}
          />
        }
      />
      <Field
        id="eduCity"
        text="City"
        control={
          <Input
            id="eduCity"
            type="text"
            name="city"
            onChange={onChange}
            value={value.city}
          />
        }
      />
      <Field
        id="start"
        text="Start date"
        control={
          <Input
            id="start"
            type="text"
            name="startDate"
            placeholder="ex -> Feb 2013"
            onChange={onChange}
            value={value.startDate}
          />
        }
      />
      <Field
        id="end"
        text="End date"
        control={
          <Input
            id="end"
            type="text"
            name="endDate"
            placeholder="ex -> Seb 2019"
            onChange={onChange}
            value={value.endDate}
          />
        }
      />
      <Field
        id="eduDesc"
        clas="expDesc"
        text="Description"
        control={
          <TextArea
            id="eduDesc"
            name="description"
            placeholder="Tell us about your education journey..."
            onChange={onChange}
            value={value.description}
          />
        }
      />
    </FormWrapper>
  );
}
