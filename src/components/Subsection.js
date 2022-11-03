import React, { useState } from "react";
import SubsectionTitle from "./SubsectionTitle";
import Button from "./utils/Button";
import styled from "styled-components";

const SubsectionWrapper = styled.section`
  padding: 16px;
  font-size: 14px;
  border-left: none;
  display: flex;
  flex-direction: column;
  gap: 16px;

  .head-box {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .jHLxum {
    align-self: flex-end;
  }
`;

export default function Subsection({ title, content, form, btnAdd, addFn }) {
  const [edit, setEdit] = useState(false);

  function handleEdit() {
    setEdit(true);
  }

  function handleSave(btn, fn) {
    if (!btn) {
      setEdit(false);
      return;
    }

    setEdit(false);
    fn();
  }

  return (
    <SubsectionWrapper>
      <div className="head-box">
        <SubsectionTitle title={title} />
        <Button
          type="button"
          icon={
            !btnAdd ? (
              <i className="las la-pen-alt"></i>
            ) : (
              <i className="las la-plus"></i>
            )
          }
          onClick={handleEdit}
        />
      </div>

      {edit && form ? (
        <>
          {form}
          <Button
            type="button"
            text="Save"
            icon={<i className="las la-save"></i>}
            className="btn-right"
            onClick={() => handleSave(btnAdd, addFn)}
          />
        </>
      ) : (
        content
      )}
    </SubsectionWrapper>
  );
}
