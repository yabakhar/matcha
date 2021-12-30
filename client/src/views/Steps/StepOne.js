import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import {useContext } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import DatePicker from '@mui/lab/DatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import Swal from 'sweetalert2'
import { userContext } from "../CompleteProfile";

const StepOne =() => {
    const {
      userData,
      setUserData
    } = useContext(userContext);

    const updatename = ({target}) => {
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
        if (e.currentTarget.result.match('image.*'))
        {
          setUserData(initialValue => ({
            ...initialValue,
            "pprofile": e.currentTarget.result
          }))
        }
        else{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
          })
        }
       }
        
      }
      return (
        <Box sx={{ flexGrow: 0 }} sm={1} md={2} alignItems="center">
        <Grid container spacing={10}>
        <Grid item xs>
          <div >
          <Avatar sx={{ width: 150, height: 150 }} src={userData.pprofile}/>
          <input accept="image/*"  id="icon-button-file" type="file" name="pprofile" onChange={changepic} />
          </div>
        </Grid>
        <Grid item xs>
        <form style={{display: "flex",
                  flexDirection: "column",
                  gap:"2rem"}}>
        <TextField label={"First Name"} value={userData.fname} name="fname" onChange={updatename} />
        <TextField label={"Last Name"} value={userData.lname}  name="lname" onChange={updatename} />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
         <DatePicker
            label="Birthday"
            name="Birthday"
            value={userData.birthday}
            onChange={(newValue) => {
              updatebirthday(newValue);
            }}renderInput={(params) => <TextField {...params} />}/>
            </LocalizationProvider>
        </form>
        </Grid>
        </Grid>
      </Box>
      )
  }
export default StepOne