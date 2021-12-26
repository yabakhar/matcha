import {
    LoginFormStyle,
    HelpersStyle,
    FooterStyle,
    LoginStyle,
} from './LoginForm.style';
import { FormGroupStyle, FormFieldStyle, FormLabelStyle } from './input.style';
import useForm from '../../Hooks/useForm';
import { ReactComponent as Google } from '../../assets/icons/Google.svg';

const Login = (props) => {
    const formLogin = () => {
        console.log('Callback function when form is submitted!');
        console.log('Form Values ', values);
    };
    const { handleChange, values, errors, handleSubmit } = useForm(formLogin);
    return (
        <LoginFormStyle>
            <h1>
                <span> Welcome back! </span>Please login to your account.
            </h1>
            <LoginStyle onSubmit={handleSubmit}>
                <FormGroupStyle>
                    <FormFieldStyle
                        type="email"
                        name="email"
                        placeholder="Email Address or User Name"
                        onChange={handleChange}
                    />
                    <FormLabelStyle>Email Address or User Name</FormLabelStyle>
                    {/* {errors.email && <h3>{errors.email}</h3>} */}
                </FormGroupStyle>
                <FormGroupStyle>
                    <FormFieldStyle
                        minLength="8"
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={handleChange}
                    />
                    <FormLabelStyle>Password</FormLabelStyle>
                    {/* {errors.password && <h3>{errors.password}</h3>} */}
                </FormGroupStyle>
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
