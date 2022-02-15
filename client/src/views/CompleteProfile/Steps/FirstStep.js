import { StyledFirstStep } from "./FirstStep.Style";
import TextField from "@mui/material/TextField";
import { Radio } from "antd";
import { useEffect, useState } from "react";
import { DatePicker } from "antd";
import moment from "moment";
import { Input } from "antd";
import { CompleteProfileActionTypes } from "../../../store/actions/actionTypes";
import Chip from "@mui/material/Chip";
import { useDispatch, useSelector } from "react-redux";

const { TextArea } = Input;

const FirstStep = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState(1);
    const { RangePicker } = DatePicker;
    const handleDelete = () => {
        console.info("You clicked the delete icon.");
    };
    const dateFormat = "YYYY/MM/DD";
    const state = useSelector((state) => state.completeProfile);
    const {
        firstName: firstName,
        lastName: lastName,
        gender: gender,
        birthdate: birthdate,
        biography: biography,
    } = state;
    console.log(state);
    function onChange(date, dateString) {
        console.log(dateString);
    }
    const [bsbs, setBsbs] = useState("");
    useEffect(() => {
        console.log(firstName, lastName, gender);
    }, [state]);
    return (
        <StyledFirstStep>
            <div className="content--userinfo">
                <div className="content--userinfo__name">
                    <TextField
                        value={firstName}
                        onChange={(e) => {
                            dispatch({
                                type: CompleteProfileActionTypes.firstName,
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
                                type: CompleteProfileActionTypes.lastName,
                                lastName: e.target.value,
                            });
                        }}
                        value={lastName}
                        className="name"
                        label="Last Name"
                        variant="standard"
                    />
                </div>
                <div className="content--userinfo__dateandgender">
                    <div className="gender">
                        <div className="lab">Gender</div>
                        <Radio.Group
                            className="radiopicker"
                            // onChange={onChange}
                            onChange={(e) => {
                                dispatch({
                                    type: CompleteProfileActionTypes.gender,
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
                                    type: CompleteProfileActionTypes.birthdate,
                                    birthdate: dateString,
                                });
                            }}
                        />
                    </div>
                </div>
            </div>
            <div className="looking-for">
                <div className="looking-for__label">Looking for</div>
                <Radio.Group onChange={onChange} value={value}>
                    <Radio value={3}>Male</Radio>
                    <Radio value={4}>Female</Radio>
                    <Radio value={4}>Both</Radio>
                </Radio.Group>
            </div>
            <div className="tags-and-biography">
                <div className="tags-and-biography__tags">
                    <div className="tags-and-biography__tags--input">
                        <TextField
                            className="mui-input"
                            label="Tags"
                            variant="standard"
                        />
                    </div>
                    <div className="tags-and-biography__tags--container">
                        <Chip label="Deletable" onDelete={handleDelete} />
                        <Chip label="Deletable" onDelete={handleDelete} />
                    </div>
                </div>
                <div className="tags-and-biography__biography">
                    <div className="tags-and-biography__biography--label">
                        Biography
                    </div>
                    <TextArea
                        className="tags-and-biography__biography--textarea"
                        value={biography}
                        showCount
                        maxLength={150}
                        onChange={(e) => {
                            dispatch({
                                type: CompleteProfileActionTypes.biography,
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
