import Education from "./Education";
import Experience from "./Experience";
import Interests from "./Interests";
import PersonalDetails from "./PersonalDetails";
import Projects from "./Projects";
import Skills from "./Skills";
import Summary from "./Summary";

const Template = ({state}) => {
  return (
    <page size="A4" id="resume" style={{ width:'210mm', height: '297mm' }}>
      <PersonalDetails state={state}  />
      <Summary state={state} />
      <Education state={state} />
      <Experience state={state} />
      <Projects state={state} />
      <Skills state={state} />
      <Interests state={state} />
    </page>
  );
};

export default Template;
