import { RegisterFormStyle, SwitchToLogin } from './RegisterForm.style';
import {
    FormGroupStyle,
    FormFieldStyle,
    FormLabelStyle,
    FormStyle,
} from './input.style';
import useForm from '../../Hooks/useForm';

const Register = (props) => {
    const formLogin = () => {
        console.log('Callback function when form is submitted!');
        console.log('Form Values ', values);
    };
    const { handleChange, values, errors, handleSubmit } = useForm(formLogin);

    //Custom hook call
    return (
        <RegisterFormStyle>
            <h1>Welcome !</h1>
            <FormStyle onSubmit={handleSubmit}>
                <FormGroupStyle>
                    <FormFieldStyle
                        type="text"
                        name="username"
                        placeholder="Username"
                        onChange={handleChange}
                    />
                    <FormLabelStyle>User Name</FormLabelStyle>
                    {/* {errors.email && <h3>{errors.email}</h3>} */}
                </FormGroupStyle>
                <FormGroupStyle>
                    <FormFieldStyle
                        type="email"
                        name="email"
                        placeholder="Email Address"
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
                <FormGroupStyle>
                    <FormFieldStyle
                        minLength="8"
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={handleChange}
                    />
                    <FormLabelStyle>Comfirm Password</FormLabelStyle>
                    {/* {errors.password && <h3>{errors.password}</h3>} */}
                </FormGroupStyle>
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
