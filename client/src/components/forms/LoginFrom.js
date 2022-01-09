import {
    LoginFormStyle,
    HelpersStyle,
    FooterStyle,
    LoginStyle,
} from './LoginForm.style';
import { TextFieldStyled } from './input.style';
import axios from "axios";
import useForm from '../../Hooks/useForm';
import { ReactComponent as Google } from '../../assets/icons/Google.svg';
import { useState } from 'react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';

const Login = (props) => {
    const formLogin = () => {
        // console.log('Callback function when form is submitted!');
        console.log('Form Values ', values.username, values.password);
        axios.post("http://localhost:1337/user/authentification", values);
    };
    const { handleChange, values, errors, handleSubmit } = useForm(formLogin);
    const [showPassword, setShowPassword] = useState(false);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return (
        <LoginFormStyle>
            <h1>
                <span> Welcome back! </span>Please login to your account.
            </h1>
            <LoginStyle onSubmit={handleSubmit}>
                <TextFieldStyled
                    name="username"
                    onChange={handleChange}
                    className="input-login"
                    label="Email Address or User Name"
                    variant="outlined"
                />
                <TextFieldStyled
                    name="password"
                    onChange={handleChange}
                    className="input-login"
                    label="Password"
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
                <input type="submit" value="Login" className="submit" />
            </LoginStyle>
            <HelpersStyle>
                <p>
                    Don't have account ?{' '}
                    <span
                        onClick={() => {
                            props.setLog(false);
                        }}
                        className="signup"
                    >
                        Sign Up
                    </span>
                </p>
                <p className="forgot">Forgot Password?</p>
            </HelpersStyle>
            <FooterStyle>
                <div className="social">
                    <div className="line"></div>
                    <p>Or Sign in with</p>
                </div>
                <div className="google">
                    <Google />
                    <p>Google</p>
                </div>
                <div className="google">
                    <Google />
                    <p>Google</p>
                </div>
            </FooterStyle>
        </LoginFormStyle>
    );
};

export default Login;

// <LoginStyle onSubmit={handleSubmit}>
// <FormGroupStyle>
//     <FormFieldStyle
//         type="email"
//         name="email"
//         placeholder="Email Address or User Name"
//         onChange={handleChange}
//     />
//     <FormLabelStyle>Email Address or User Name</FormLabelStyle>
//     {errors.email && <h3>{errors.email}</h3>}
// </FormGroupStyle>
// <FormGroupStyle>
//     <FormFieldStyle
//         minLength="8"
//         type="password"
//         name="password"
//         placeholder="Password"
//         onChange={handleChange}
//     />
//     <FormLabelStyle>Password</FormLabelStyle>
//     {errors.password && <h3>{errors.password}</h3>}
// </FormGroupStyle>
// <input type="submit" value="Login" className="submit" />
// </LoginStyle>

// <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
//     <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
//     <OutlinedInput
//         id="outlined-adornment-password"
//         type={values.showPassword ? 'text' : 'password'}
//         value={values.password}
//         onChange={handleChange('password')}
//         endAdornment={
//             <InputAdornment position="end">
//                 <IconButton
//                     aria-label="toggle password visibility"
//                     onClick={handleClickShowPassword}
//                     onMouseDown={handleMouseDownPassword}
//                     edge="end"
//                 >
//                     {values.showPassword ? <VisibilityOff /> : <Visibility />}
//                 </IconButton>
//             </InputAdornment>
//         }
//         label="Password"
//     />
// </FormControl>;
