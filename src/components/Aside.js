import React, { useState } from "react";
import annonym from "../assets/annonym.jpg";
import Subsection from "./Subsection";
import DetailRow from "./DetailRow";
import styled from "styled-components";
import PersonalDetailForm from "./forms/PersonalDetailForm";

const AsideWrapper = styled.aside`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-right: 1px solid #ced4da;
  background-color: #9c3c2c;
  color: #f8f9fa;

  button {
    outline: 1px solid #f8f9fa;
    color: #f8f9fa;
  }

  button:hover {
    outline: 1px solid #343a40;
    background-color: initial;
    cursor: pointer;
  }

  label {
    color: #f8f9fa;
  }

  input:focus {
    outline: 1px solid #343a40;
  }
`;

export default function Aside({ data }) {
  const [personal, setPersonal] = useState({
    firstName: data["personal details"].firstName,
    lastName: data["personal details"].lastName,
    email: data["personal details"].email,
    phoneNumber: data["personal details"].phoneNumber,
    address: data["personal details"].address,
    postCode: data["personal details"].postCode,
    city: data["personal details"].city,
  });

  function updatePersonal(event) {
    const { value, name } = event.target;
    setPersonal((prevPersonal) => {
      return {
        ...prevPersonal,
        [name]: value,
      };
    });
  }

  const { firstName, lastName, email, phoneNumber, address, postCode, city } =
    personal;

  const detailRows = (
    <>
      <DetailRow
        icon={<i className="las la-user"></i>}
        name={`${firstName} ${lastName}`}
      />
      <DetailRow icon={<i className="las la-envelope"></i>} name={email} />
      <DetailRow icon={<i className="las la-phone"></i>} name={phoneNumber} />
      <DetailRow
        icon={<i className="las la-home"></i>}
        name={`${address} ${postCode} ${city}`}
      />
    </>
  );

  return (
    <AsideWrapper>
      <img src={annonym} alt="unknown" />

      <Subsection
        btnAdd={false}
        title="Personal details"
        content={detailRows}
        form={<PersonalDetailForm onChange={updatePersonal} value={personal} />}
      />
    </AsideWrapper>
  );
}
