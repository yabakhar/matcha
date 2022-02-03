import Modal from "@mui/material/Modal";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import styled from "styled-components";
const style = {
  border: "2px solid red",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const StyledModal = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  .modal-title {
    font-size: 2rem;
    color: ${(props) => props.theme.colors.text};
  }
  .modale-input {
    width: 100%;
  }
`;

const ForgotPassword = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <p onClick={handleOpen}>Forgot Password ?</p>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <StyledModal>
            <h1 className="modal-title">Reset Password</h1>
            <TextField
              className="modale-input"
              label="Email"
              variant="outlined"
              name="email"
              // onChange={handleChange}
              // error={error ? true : false}
            />
            <input type="text" name="submit" type="submit" value="send email" />
          </StyledModal>
        </Box>
      </Modal>
    </>
  );
};

export default ForgotPassword;
