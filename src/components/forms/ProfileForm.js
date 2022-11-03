import React from "react";
import Field from "../utils/Field";
import TextArea from "../utils/TextArea";

export default function ProfileForm({ onChange, value }) {
  return (
    <form>
      <Field
        id="prof"
        text="Description"
        control={
          <TextArea
            id="prof"
            name="profile"
            placeholder="Say something about you..."
            value={value}
            onChange={onChange}
          />
        }
      />
    </form>
  );
}
