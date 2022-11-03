import React from "react";
import Header from "./components/Header";
import CvInformation from "./components/CvInformation";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header name="cv creator" />
      <CvInformation />
      <Footer />
    </>
  );
}
