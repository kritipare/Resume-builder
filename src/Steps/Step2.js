import ComputerIcon from '@mui/icons-material/Computer';
import { Chip, Divider, TextField } from "@mui/material";
import { numberOfProjects } from "../config";

const Step2 = ({ state, handleChange }) => {
  let rows = [];
  for (let i = 0; i < numberOfProjects; i++) {
    rows.push(
      <>
        <TextField
          required
          id="outlined-required"
          label={`Project ${i + 1} Title`}
          defaultValue={state.projects[i].title}
          value={state.projects[i].title}
          onChange={handleChange("projects", "title", true, -1, i)}
        />
        <TextField
          required
          id="outlined-required"
          label="Technologies Used"
          defaultValue={state.projects[i].techUsed}
          value={state.projects[i].techUsed}
          onChange={handleChange("projects", "techUsed", true, -1, i)}
        />

        {[1, 2, 3].map((index) => (
          <TextField
            required
            multiline
            id="outlined-required"
            label={`Detail ${index}`}
            defaultValue={state.projects[i].details[index - 1]}
            value={state.projects[i].details[index - 1]}
            onChange={handleChange("projects", "details", true, index - 1, i)}
          />
        ))}
        <Divider>
          <Chip label={<ComputerIcon color="secondary"/>} />
        </Divider>
      </>
    );
  }
  return rows;
};

export default Step2;
