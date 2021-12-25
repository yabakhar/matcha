import {
    LoginFromStyle,
    FormStyle,
    HelpersStyle,
    FooterStyle,
} from './LoginForm.style';
import useForm from '../../Hooks/useForm';
import { ReactComponent as Google } from '../../assets/icons/Google.svg';

const Login = (props) => {
    const formLogin = () => {
        console.log('Callback function when form is submitted!');
        console.log('Form Values ', values);
    };

    //Custom hook call
    const { handleChange, values, errors, handleSubmit } = useForm(formLogin);
    return (
        <LoginFromStyle>
            <h1>
                <span> Welcome back! </span>Please login to your account.
            </h1>
            <FormStyle onSubmit={handleSubmit}>
                <div className="form__group">
                    <input
                        className="form__field"
                        type="email"
                        name="email"
                        placeholder="Email Address or User Name"
                        onChange={handleChange}
                    />
                    <label className="form__label">
                        Email Address or User Name
                    </label>
                    {/* {errors.email && <h3>{errors.email}</h3>} */}
                </div>
                <div className="form__group">
                    <input
                        className="form__field"
                        minLength="8"
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={handleChange}
                    />
                    <label className="form__label">Password</label>
                    {/* {errors.password && <h3>{errors.password}</h3>} */}
                </div>
                <input type="submit" value="Login" className="submit" />
            </FormStyle>
            <HelpersStyle>
                <p>
                    Don't have account ? <span className="signup">Sign Up</span>
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
        </LoginFromStyle>
    );
};

export default Login;
