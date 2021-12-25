import { LoginFromStyle } from './LoginForm.style';
import useForm from '../../Hooks/useForm';

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
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    onChange={handleChange}
                />
                {errors.email && <h3>{errors.email}</h3>}
                <input
                    minLength="8"
                    type="password"
                    name="password"
                    placeholder="password"
                    onChange={handleChange}
                />
                {errors.password && <h3>{errors.password}</h3>}
                <input type="submit" value="Submit" className="submit" />
            </form>
        </LoginFromStyle>
    );
};

export default Login;
