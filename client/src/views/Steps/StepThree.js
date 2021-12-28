import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import DatePicker from '@mui/lab/DatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';

const StepThree =() => {
    const [date, setDate] = useState('1997-01-01')
    return (
      <div>
         <form style={{display: "flex",flexDirection: "column",gap:"2rem"}}>
         <LocalizationProvider dateAdapter={AdapterDateFns}>

         <DatePicker
            label="Birthday"
            value={date}
            defa
            onChange={(newValue) => {
                setDate(newValue);
            }}
          renderInput={(params) => <TextField {...params} />}
        />
            
            </LocalizationProvider>
         </form>
      </div>
    )
  }
export default StepThree