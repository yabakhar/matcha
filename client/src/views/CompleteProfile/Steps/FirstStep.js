import { StyledFirstStep } from "./FirstStep.Style";
import TextField from "@mui/material/TextField";
import { Radio } from "antd";
import { useState } from "react";
import { DatePicker } from "antd";
import moment from "moment";
import { Input } from "antd";
import "antd/dist/antd.css";

const { TextArea } = Input;
/*
  firstName: null, // done
    lastName: null, // done
    gender: null, //done
    birthdate: null, // done
    biography: null, //done
    isComplete: false,
*/
const FirstStep = ({ state, dispatch }) => {
  const [value, setValue] = useState(1);
  const { RangePicker } = DatePicker;
  const dateFormat = "YYYY/MM/DD";
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  return (
    <StyledFirstStep>
      <TextField id="standard-basic" label="First Name" variant="standard" />
      <TextField id="standard-basic" label="Last Name" variant="standard" />
      <Radio.Group onChange={onChange} value={value}>
        <Radio value={1}>A</Radio>
        <Radio value={2}>B</Radio>
        <Radio value={3}>C</Radio>
        <Radio value={4}>D</Radio>
      </Radio.Group>
      <DatePicker
        defaultValue={moment("2015/01/01", dateFormat)}
        format={dateFormat}
      />
      <TextArea showCount maxLength={150} onChange={onChange} />
    </StyledFirstStep>
  );
};

export default FirstStep;
