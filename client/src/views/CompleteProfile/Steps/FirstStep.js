import { StyledFirstStep } from "./FirstStep.Style";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
/*
  firstName: null,
    lastName: null,
    gender: null,
    biography: null,
    birthdate: null,
    isComplete: false,
*/
const FirstStep = ({ state, dispatch }) => {
  return (
    <StyledFirstStep>
      <TextField
        id="filled-basic"
        margin="normal"
        label="first name"
        variant="filled"
      />
      <TextField
        id="filled-basic"
        label="last name"
        margin="normal"
        variant="filled"
      />
      <TextareaAutosize
        maxRows={4}
        aria-label="maximum height"
        placeholder="Maximum 4 rows"
        defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua."
        style={{ width: 200 }}
      />
      {/* <DesktopDatePicker
        label="Date desktop"
        inputFormat="MM/dd/yyyy"
        value={value}
        onChange={handleChange}
        renderInput={(params) => <TextField {...params} />}
      /> */}
    </StyledFirstStep>
  );
};

export default FirstStep;
