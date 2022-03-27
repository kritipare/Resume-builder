import { TextField } from "@mui/material";

const Step1 = ({ state, handleChange }) => {
  return (
    <>
      <TextField
        required
        id="outlined-required"
        label="Job Title"
        defaultValue={state.experience.jobTitle}
        value={state.experience.jobTitle}
        onChange={handleChange("experience", "jobTitle", true)}
      />
      <TextField
        required
        id="outlined-required"
        label="Company Name"
        defaultValue={state.experience.companyName}
        value={state.experience.companyName}
        onChange={handleChange("experience", "companyName", true)}
      />
      <TextField
        required
        type={"date"}
        id="outlined-required"
        label="Start Date"
        defaultValue={state.experience.startDate}
        value={state.experience.startDate}
        onChange={handleChange("experience", "startDate", true)}
      />
      <TextField
        required
        multiline
        id="outlined-required"
        label="Short Description"
        defaultValue={state.experience.shortDescription}
        value={state.experience.shortDescription}
        onChange={handleChange("experience", "shortDescription", true)}
      />
      {[1,2,3,4].map((index) => (
        <TextField
        required
        multiline
        id="outlined-required"
        label={`Detail ${index}`}
        defaultValue={state.experience.details[index-1]}
        value={state.experience.details[index-1]}
        onChange={handleChange("experience", "details", true, index-1)}
      />
      ))}
    </>
  );
};

export default Step1;
