import { StyledFirstStep } from "./FirstStep.Style";
import TextField from "@mui/material/TextField";
import { Radio } from "antd";
import { useEffect, useState } from "react";
import { DatePicker } from "antd";
import moment from "moment";
import { Input } from "antd";
import { actionTypes } from "../index";

const { TextArea } = Input;

const FirstStep = ({ state, dispatch }) => {
  const [value, setValue] = useState(1);
  const { RangePicker } = DatePicker;
  const dateFormat = "YYYY/MM/DD";
  const {
    firstStep: {
      firstName: firstName,
      lastName: lastName,
      gender: gender,
      birthdate: birthdate,
      biography: biography,
    },
  } = state;
  function onChange(date, dateString) {
    console.log(dateString);
  }
  //firstName: "",
  //lastName: "",
  //gender: "",
  //biography: "",
  //birthdate: "",
  // console.log(firstName);
  useEffect(() => {
    console.log(state.firstStep);
  }, [state]);
  return (
    <StyledFirstStep>
      <div className="content--userinfo">
        <div className="content--userinfo__name">
          <TextField
            value={firstName}
            onChange={(e) => {
              dispatch({
                type: actionTypes.firstStep.firstName,
                firstName: e.target.value,
              });
            }}
            className="name"
            label="First Name"
            variant="standard"
          />
          <TextField
            onChange={(e) => {
              dispatch({
                type: actionTypes.firstStep.lastName,
                lastName: e.target.value,
              });
            }}
            value={lastName}
            className="name"
            label="Last Name"
            variant="standard"
          />
        </div>
        <div className="content--userinfo__dateandgander">
          <div className="gender">
            <div className="lab">Gender</div>
            <Radio.Group
              className="radiopicker"
              // onChange={onChange}
              onChange={(e) => {
                dispatch({
                  type: actionTypes.firstStep.gender,
                  gender: e.target.value,
                });
              }}
              value={gender}
            >
              <Radio value="male">Male</Radio>
              <Radio value="female">Female</Radio>
              <Radio value="other">Other</Radio>
            </Radio.Group>
          </div>
          <div className="date">
            <div className="date--label">Birthdate</div>
            <DatePicker
              defaultValue={moment(birthdate, dateFormat)}
              format={dateFormat}
              onChange={(data, dateString) => {
                dispatch({
                  type: actionTypes.firstStep.birthdate,
                  birthdate: dateString,
                });
              }}
            />
          </div>
        </div>
      </div>
      <div className="text-area">
        <div className="text-area__lab">Biography</div>
        <div className="content--text-area">
          <TextArea
            value={biography}
            showCount
            maxLength={150}
            onChange={(e) => {
              dispatch({
                type: actionTypes.firstStep.biography,
                biography: e.target.value,
              });
            }}
          />
        </div>
      </div>
    </StyledFirstStep>
  );
};

export default FirstStep;
