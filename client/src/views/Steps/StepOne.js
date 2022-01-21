import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import { useContext } from 'react';
import Box from '@mui/material/Box';
import DatePicker from '@mui/lab/DatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import Swal from 'sweetalert2'
import { userContext } from "../CompleteProfile";

const StepOne = () => {
  const {
    userData,
    setUserData
  } = useContext(userContext);

  const updatename = ({ target }) => {
    const { name, value } = target
    setUserData(initialValue => ({
      ...initialValue,
      [name]: value
    }))
  }

  const updatebirthday = (valuenew) => {
    setUserData(initialValue => ({
      ...initialValue,
      "birthday": valuenew
    }))
  }

  const changepic = (e) => {
    let file = e.target.files[0]
    let reader = new FileReader()
    reader.readAsDataURL(file);
    reader.onloadend = function (e) {
      if (e.currentTarget.result.match('image.*')) {
        setUserData(initialValue => ({
          ...initialValue,
          "pprofile": e.currentTarget.result
        }))
      }
      else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        })
      }
    }
  }
  return (
    <Box sx={{ flexGrow: 0 }} sm={1} md={2} alignItems="center" style={{ display: "flex", flexWrap: "wrap",     alignContent: "center",
    justifyContent: "center" }}>
      <div style={{
         display: "flex", alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginBottom: "10%"
      }}>
        <Avatar sx={{ width: 150, height: 150 ,marginBottom:"10%"}} src={userData.pprofile} />
        <input accept="image/*" id="icon-button-file" type="file" name="pprofile" onChange={changepic} />
      </div>
        <form
        style={{  display: "flex", flexDirection: "column" }}>
          <TextField label={"First Name"} value={userData.fname} name="firstname" onChange={updatename} style={{marginBottom: "10px",  width: "100%"}}/>
          <TextField label={"Last Name"} value={userData.lname} name="lastname" onChange={updatename} style={{marginBottom: "10px",  width: "100%"}}/>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Birthday"
              name="Birthday"
              value={userData.birthday}
              onChange={(newValue) => {
                updatebirthday(newValue);
              }} renderInput={(params) => <TextField {...params} />} style={{marginBottom: "10px", width: "100%"}}/>
          </LocalizationProvider>
        </form>
    </Box>

  )
}
export default StepOne
