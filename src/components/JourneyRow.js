import React, { useState } from "react";
import styled from "styled-components";
import Button from "./utils/Button";

const JourneyRowWrapper = styled.div`
  display: grid;
  grid-template-columns: 192px auto auto;
  gap: 16px;

  .brown {
    color: #9c3c2c;
  }

  .actions {
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: flex-end;
  }

  form {
    grid-column: 1/-1;
  }

  .jHLxum {
    grid-column: 3;
    justify-self: end;
  }
`;

export default function JourneyRow({
  from,
  to,
  who,
  what,
  city,
  desc,
  del,
  form,
}) {
  const [edit, setEdit] = useState(false);

  function handleEdit() {
    setEdit(true);
  }

  function handleSave() {
    setEdit(false);
  }

  return (
    <JourneyRowWrapper>
      {edit && form ? (
        <>
          {form}
          <Button
            type="button"
            text="Save"
            icon={<i className="las la-save"></i>}
            className="btn-right"
            onClick={handleSave}
          />
        </>
      ) : (
        <>
          <h4 className="brown">
            {from} {from ? "-" : null} {to}
          </h4>

          <div>
            <h4>{what}</h4>
            <p className="brown">
              <span>{who}</span>
              {who ? ", " : null}
              <span>{city}</span>
            </p>
            <p>{desc}</p>
          </div>

          <div className="actions">
            <Button
              type="button"
              onClick={del}
              icon={<i className="las la-trash"></i>}
            />
            <Button
              type="button"
              onClick={handleEdit}
              icon={<i className="las la-pen-alt"></i>}
            />
          </div>
        </>
      )}
    </JourneyRowWrapper>
  );
}
