import React from "react";
import Input from "../utils/Input";
import Field from "../utils/Field";
import styled from "styled-components";

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export default function PersonalDetailForm({ onChange, value }) {
  return (
    <FormWrapper>
      {/* <Field
        id="photo"
        text="Photo"
        control={
          <Input
            id="photo"
            type="file"
            accept="image/jpeg, image/png, image/jpg"
            name="photo"
          />
        }
      /> */}
      <Field
        id="firstName"
        text="First Name"
        control={
          <Input
            id="firstName"
            type="text"
            name="firstName"
            onChange={onChange}
            value={value.firstName}
          />
        }
      />
      <Field
        id="lastName"
        text="Last Name"
        control={
          <Input
            id="lastName"
            type="text"
            name="lastName"
            onChange={onChange}
            value={value.lastName}
          />
        }
      />
      <Field
        id="email"
        text="Email address"
        control={
          <Input
            id="email"
            type="email"
            name="email"
            onChange={onChange}
            value={value.email}
          />
        }
      />
      <Field
        id="phoneNumber"
        text="Phone number"
        control={
          <Input
            id="phoneNumber"
            type="text"
            name="phoneNumber"
            onChange={onChange}
            value={value.phoneNumber}
          />
        }
      />
      <Field
        id="address"
        text="Address"
        control={
          <Input
            id="address"
            type="text"
            name="address"
            onChange={onChange}
            value={value.address}
          />
        }
      />
      <Field
        id="postCode"
        text="Post code"
        control={
          <Input
            id="postCode"
            type="text"
            name="postCode"
            onChange={onChange}
            value={value.postCode}
          />
        }
      />
      <Field
        id="city"
        text="City"
        control={
          <Input
            id="city"
            type="text"
            name="city"
            onChange={onChange}
            value={value.city}
          />
        }
      />
    </FormWrapper>
  );
}
