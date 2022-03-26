import { useEffect, useState } from "react";
import Education from "./Education";
import Experience from "./Experience";
import Interests from "./Interests";
import PersonalDetails from "./PersonalDetails";
import Projects from "./Projects";
import Skills from "./Skills";
import Summary from "./Summary";

const Template = ({fname}) => {
  return (
    <page size="A4">
      <PersonalDetails fname={fname}  />
      <Summary />
      <Education />
      <Experience />
      <Projects />
      <Skills />

      <Interests />
    </page>
  );
};

export default Template;
