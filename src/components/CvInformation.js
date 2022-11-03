import React from "react";
import Aside from "./Aside";
import Section from "./Section";
import data from "../template";

export default function CvInformation() {
  return (
    <main>
      <Aside data={data} />
      <Section data={data} />
    </main>
  );
}
