import { LoginFromStyle } from './LoginForm.style';
const Login = (props) => {
    return (
        <LoginFromStyle>
            <h1>Login</h1>
            <h1
                onClick={() => {
                    props.setLog(false);
                }}
            >
                go To Register
            </h1>
        </LoginFromStyle>
    );
};

export default Login;
