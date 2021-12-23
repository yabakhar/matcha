import { RegisterFormStyle } from './RegisterForm.style';

const Register = (props) => {
    return (
        <RegisterFormStyle>
            <h1>Register</h1>
            <h1
                onClick={() => {
                    props.setLog(true);
                }}
            >
                go To Login
            </h1>
        </RegisterFormStyle>
    );
};

export default Register;
