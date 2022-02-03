import Modal from "@mui/material/Modal";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

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
          <form>
            <h1>Reset Password</h1>
            <TextField
              className="input-login"
              label="UserName"
              variant="outlined"
              name="username"
              // onChange={handleChange}
              // error={error ? true : false}
            />
            <input type="text" name="submit" type="submit"></input>
          </form>
        </Box>
      </Modal>
    </>
  );
};

export default ForgotPassword;
