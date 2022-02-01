import { RegisterFormStyle, SwitchToLogin } from './RegisterForm.style';
import { FormStyle, TextFieldStyled } from './input.style';
import useForm from '../../Hooks/useForm';
import { useState } from 'react';
import axios from "axios";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';

const Register = (props) => {
    const formLogin = () => {
        console.log('Callback function when form is submitted!',values);
        axios.post("http://localhost:1337/user/signup", values);
    };
    const { handleChange, values, errors, handleSubmit } = useForm(formLogin);
    const [showPassword, setShowPassword] = useState(false);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    //Custom hook call
    return (
        <RegisterFormStyle>
            <div className="header-register">
                <h1>Welcome !</h1>
            </div>
            <FormStyle className="form-register" onSubmit={handleSubmit}>
                <TextFieldStyled
                    name="username"
                    onChange={handleChange}
                    className="input-register"
                    label="User Name"
                    variant="outlined"
                />
                <TextFieldStyled
                    name="email"
                    onChange={handleChange}
                    className="input-register"
                    label="Email Address"
                    variant="outlined"
                />
                <TextFieldStyled
                    className="input-register"
                    label="Password"
                    name="password"
                    onChange={handleChange}
                    variant="outlined"
                    type={showPassword ? 'text' : 'password'}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="start">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={() =>
                                        setShowPassword(!showPassword)
                                    }
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPassword ? (
                                        <VisibilityOff />
                                    ) : (
                                        <Visibility />
                                    )}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
                <TextFieldStyled
                    className="input-register"
                    label="Confirm Password"
                    name="comfirmPassword"
                    onChange={handleChange}
                    variant="outlined"
                    type={showPassword ? 'text' : 'password'}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="start">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={() =>
                                        setShowPassword(!showPassword)
                                    }
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPassword ? (
                                        <VisibilityOff />
                                    ) : (
                                        <Visibility />
                                    )}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
                <input type="submit" value="Register" className="submit" />
            </FormStyle>
            <SwitchToLogin
                onClick={() => {
                    props.setLog(true);
                }}
            >
                Already have an account ?
            </SwitchToLogin>
        </RegisterFormStyle>
    );
};

export default Register;