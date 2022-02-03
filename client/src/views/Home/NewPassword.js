import styled from "styled-components";
import { ReactComponent as Logo } from "../../assets/Logo.svg";
import { TextFieldStyled } from "../../components/forms/input.style";
import useForm from "../../Hooks/useForm";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import { LoginStyle } from "../../components/forms/LoginForm.style";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const NewPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const loginForm = () => {};
  const { handleChange, values, errors, handleSubmit } = useForm(loginForm);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <Container>
      <Logo />
      <LoginStyle onSubmit={handleSubmit}>
        <TextFieldStyled
          //   error={error ? true : false}
          onChange={handleChange}
          name="password"
          className="input-login"
          label="New Password"
          variant="outlined"
          type={"password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowPassword(!showPassword)}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <TextFieldStyled
          //   error={error ? true : false}
          onChange={handleChange}
          name="password"
          className="input-login"
          label="Comfirm Password"
          variant="outlined"
          type={"password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowPassword(!showPassword)}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </LoginStyle>
    </Container>
  );
};

export default NewPassword;
