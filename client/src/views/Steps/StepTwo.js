import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/material/Box';
import {useContext } from 'react';
import { userContext } from "../CompleteProfile";


const StepTwo =() => {
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
    

    return (
      <Box sm={1} md={2} alignItems="center">
      <FormControl component="fieldset" style={{display : 'flex', flexDirection : 'row'}} md={{display : 'flex', flexDirection : 'column'}}>
        <div>
        <FormLabel component="legend">Gender</FormLabel>
        <RadioGroup  aria-label="gender" name="yourGender" onChange={updatename}>
          <FormControlLabel value="female" control={<Radio />} label="Female" checked={userData.yourGender === "female"} />
          <FormControlLabel value="male" control={<Radio />} label="Male" checked={userData.yourGender === "male"}/>
        </RadioGroup>
        </div>
        <div>
        <FormLabel component="legend">look for what</FormLabel>
        <RadioGroup  aria-label="gender" name="lookGender" onChange={updatename}>
          <FormControlLabel value="female" control={<Radio />} label="Female" checked={userData.lookGender === "female"}/>
          <FormControlLabel value="male" control={<Radio />} label="Male" checked={userData.lookGender === "male"}/>
          <FormControlLabel value="other" control={<Radio />} label="other" checked={userData.lookGender === "other"}/>
        </RadioGroup>
        </div>
      </FormControl>
      </Box>
    );
  }

export default StepTwo