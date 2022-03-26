import { TextField } from "@mui/material";
import { useEffect } from "react";

const Form = ({ fname, handleChange }) => {
  useEffect(() => {
    console.log("kriti");
  }, []);
  return (
    <>
      <TextField
        required
        id="outlined-required"
        label="Required"
        defaultValue={fname}
        value={fname}
        onChange={handleChange}
      />
      <TextField
        required
        id="outlined-required"
        label="Required"
        defaultValue="Last Name"
      />
      <div className="wrapper">This is a form</div>
      <div className="wrapper">This is a form</div>
      <div className="wrapper">This is a form</div>
      <div className="wrapper">This is a form</div>
      <div className="wrapper">This is a form</div>
      <div className="wrapper">This is a form</div>
    </>
  );
};

export default Form;
