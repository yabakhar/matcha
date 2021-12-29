import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import DatePicker from '@mui/lab/DatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';

const StepOne =() => {
    const [date, setDate] = useState('1997-01-01')
    const [state, setstate] = useState("")
      const changepic = (e) => {
        let file = e.target.files[0]
        let reader = new FileReader()
        reader.readAsDataURL(file);
  
        reader.onloadend = function (e) {
            setstate([reader.result])  
         }
      }
      return (
        <Box sx={{ flexGrow: 0 }} sm={2} md={2} alignItems="center">
        <Grid container spacing={10}>
        <Grid item xs>
          <div >
          <Avatar sx={{ width: 150, height: 150 }} src={state}/>
          <input accept="image/*"  id="icon-button-file" type="file" onChange={changepic} />
          </div>
        </Grid>
        <Grid item xs>
        <form style={{display: "flex",
                  flexDirection: "column",
                  gap:"2rem"}}>
        <TextField label={"User Name"} />
        <TextField label={"First Name"}/>
        <TextField label={"Last Name"} />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
         <DatePicker
            label="Birthday"
            value={date}
            onChange={(newValue) => {
                setDate(newValue);
            }}renderInput={(params) => <TextField {...params} />}/>
            </LocalizationProvider>
        </form>
        </Grid>
        </Grid>
      </Box>
      )
  }
export default StepOne