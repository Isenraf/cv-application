import React, { useState } from "react";
import Subsection from "./Subsection";
import styled from "styled-components";
import JourneyRow from "./JourneyRow";
import ProfileForm from "./forms/ProfileForm";
import ExperienceForm from "./forms/ExperienceForm";
import EducationForm from "./forms/EducationForm";

const SectionWrapper = styled.section`
  padding: 16px;
  line-break: anywhere;
  background-color: #f8f9fa;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

export default function Section({ data }) {
  const [prof, setProf] = useState(data.profile);
  const [experience, setExperience] = useState([...data.experience]);
  const [education, setEducation] = useState([...data.education]);
  const [exp, setExp] = useState({
    from: "",
    to: "",
    position: "",
    employer: "",
    city: "",
    description: "",
  });
  const [edu, setEdu] = useState({
    startDate: "",
    endDate: "",
    education: "",
    school: "",
    city: "",
    description: "",
  });

  function updateProfile(event) {
    const { value } = event.target;

    setProf(value);
  }

  function remove(id, fn) {
    fn((prev) => {
      return prev.filter((_, i) => i !== id);
    });
  }

  function update(event, id, fn) {
    const { value, name } = event.target;

    fn((prev) => {
      return prev.map((e, i) => {
        if (i === id) {
          return { ...e, [name]: value };
        }
        return e;
      });
    });
  }

  function addJourney(obj, fn) {
    fn((prev) => [...prev, obj]);
    cleanUpExp();
    cleanUpEdu();
  }

  function updateJourney(event, fn) {
    const { value, name } = event.target;

    fn((prev) => {
      return { ...prev, [name]: value };
    });
  }

  function cleanUpExp() {
    setExp((prevExp) => {
      return {
        from: "",
        to: "",
        position: "",
        employer: "",
        city: "",
        description: "",
      };
    });
  }

  function cleanUpEdu() {
    setEdu((prevEdu) => {
      return {
        startDate: "",
        endDate: "",
        education: "",
        school: "",
        city: "",
        description: "",
      };
    });
  }

  const exps = experience.map((e, id) => {
    return (
      <JourneyRow
        key={id}
        from={e.from}
        to={e.to}
        what={e.position}
        who={e.employer}
        city={e.city}
        desc={e.description}
        del={() => remove(id, setExperience)}
        form={
          <ExperienceForm
            onChange={(event) => update(event, id, setExperience)}
            value={e}
          />
        }
      />
    );
  });

  const educs = education.map((e, id) => {
    return (
      <JourneyRow
        key={id}
        from={e.startDate}
        to={e.endDate}
        what={e.education}
        who={e.school}
        city={e.city}
        desc={e.description}
        del={() => remove(id, setEducation)}
        form={
          <EducationForm
            onChange={(event) => update(event, id, setEducation)}
            value={e}
          />
        }
      />
    );
  });

  return (
    <SectionWrapper>
      <Subsection
        btnAdd={false}
        title="Profile"
        content={<p>{prof}</p>}
        form={<ProfileForm onChange={updateProfile} value={prof} />}
      />

      <Subsection
        btnAdd={true}
        title="Experience"
        content={exps}
        form={
          <ExperienceForm
            value={exp}
            onChange={(event) => updateJourney(event, setExp)}
          />
        }
        addFn={() => addJourney(exp, setExperience)}
      />

      <Subsection
        btnAdd={true}
        title="Education"
        content={educs}
        form={
          <EducationForm
            value={edu}
            onChange={(event) => updateJourney(event, setEdu)}
          />
        }
        addFn={() => addJourney(edu, setEducation)}
      />
    </SectionWrapper>
  );
}
