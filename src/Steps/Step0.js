import { TextField } from "@mui/material";

const Step0 = ({ state, handleChange }) => {
  return (
    <>
      <TextField
        required
        id="outlined-required"
        label="Required"
        defaultValue={state.fname}
        value={state.fname}
        onChange={handleChange("fname")}
      />
      <TextField
        required
        id="outlined-required"
        label="Last Name"
        defaultValue={state.lname}
        value={state.lname}
        onChange={handleChange("lname")}
      />
      <TextField
        required
        multiline
        id="outlined-required"
        label="Summary"
        defaultValue={state.summary}
        value={state.summary}
        onChange={handleChange("summary")}
      />
      <TextField
        required
        id="outlined-required"
        label="Degree"
        defaultValue={state.education.degree}
        value={state.education.degree}
        onChange={handleChange("education", "degree", true)}
      />
      <TextField
        required
        id="outlined-required"
        label="Stream"
        defaultValue={state.education.stream}
        value={state.education.stream}
        onChange={handleChange("education", "stream", true)}
      />
      <TextField
        required
        id="outlined-required"
        label="Institution"
        defaultValue={state.education.institution}
        value={state.education.institution}
        onChange={handleChange("education", "institution", true)}
      />
      <TextField
        type={"date"}
        required
        id="outlined-required"
        label="YOP"
        defaultValue={new Date()}
        value={state.education.YOP}
        onChange={handleChange("education", "YOP", true)}
      />
      <TextField
        type={"text"}
        maxLength={4}
        required
        id="outlined-required"
        label="Grade"
        defaultValue={state.education.grade}
        value={state.education.grade}
        onChange={handleChange("education", "grade", true)}
      />
    </>
  );
};

export default Step0;
