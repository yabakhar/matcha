import { StyledFirstStep } from "./FirstStep.Style";
import TextField from "@mui/material/TextField";
import { Radio } from "antd";
import { useState } from "react";
import { DatePicker } from "antd";
import moment from "moment";
import { Input } from "antd";

const { TextArea } = Input;

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
      <div className="content--userinfo">
        <div className="content--userinfo__name">
          <TextField className="name" label="First Name" variant="standard" />
          <TextField className="name" label="Last Name" variant="standard" />
        </div>
        <div className="content--userinfo__dateandgander">
          <div className="gender">
            <div className="lab">Gender</div>
            <Radio.Group
              className="radiopicker"
              onChange={onChange}
              value={value}
            >
              <Radio value={1}>Male</Radio>
              <Radio value={2}>Female</Radio>
              <Radio value={4}>Other</Radio>
            </Radio.Group>
          </div>
          <div className="date">
            <div className="date--label">Birthdate</div>
            <DatePicker
              defaultValue={moment("2015/01/01", dateFormat)}
              format={dateFormat}
            />
          </div>
        </div>
      </div>
      <div className="text-area">
        <div className="text-area__lab">Biography</div>
        <div className="content--text-area">
          <TextArea showCount maxLength={150} onChange={onChange} />
        </div>
      </div>
    </StyledFirstStep>
  );
};

export default FirstStep;
