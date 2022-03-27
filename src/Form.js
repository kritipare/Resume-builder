import { Box, Button, Stack, TextField } from "@mui/material";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

import { Step0, Step1, Step2, Step3 } from "./Steps";

const Form = ({ state, handleChange, prevStep, nextStep }) => {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "50ch" },
      }}
    >
      <Stack
        justifyContent="center"
        alignItems="center"
        spacing={2}
        m={2}
        direction="row"
      >
        <Button
          variant={state.step <= 0 ? "" : "outlined"}
          disabled={state.step <= 0}
          onClick={prevStep}
        >
          <ArrowCircleLeftIcon sx={{ mr: 0.5}} /> Previos
        </Button>
        <Button
          variant={state.step >= 3 ? "" : "outlined"}
          disabled={state.step >= 3}
          onClick={nextStep}
        >
          Next <ArrowCircleRightIcon sx={{ mr: 0.5}} />
        </Button>
      </Stack>
      {state.step == 0 && <Step0 state={state} handleChange={handleChange} />}
      {state.step == 1 && <Step1 state={state} handleChange={handleChange} />}
      {state.step == 2 && <Step2 state={state} handleChange={handleChange} />}
      {state.step == 3 && <Step3 state={state} handleChange={handleChange} />}
    </Box>
  );
};

export default Form;
