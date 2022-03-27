import { Button, TextField } from "@mui/material";
import { print } from "react-pdf-print";

const ids = ["resume"];

const Step3 = ({ state, handleChange }) => {
  return (
    <>
      <TextField
        required
        multiline
        id="outlined-required"
        label="Skills"
        defaultValue={state.skills}
        value={state.skills}
        helperText="Enter comma separated values"
        onChange={handleChange("skills")}
      />
      <TextField
        required
        multiline
        id="outlined-required"
        label="Interests"
        defaultValue={state.interests}
        value={state.interests}
        helperText="Enter comma separated values"
        onChange={handleChange("interests")}
      />
      <div>
        <Button variant="contained" color="success" sx={{ m: 2 }} onClick={() => print(ids)}>PRINT</Button>
      </div>
    </>
  );
};

export default Step3;
