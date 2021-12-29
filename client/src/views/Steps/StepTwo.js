import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/material/Box';


const StepTwo =() => {
    return (
      <Box sx={{ flexGrow: 0 }} sm={2} md={2} alignItems="center">
      <FormControl component="fieldset" style={{display : 'flex', flexDirection : 'row'}}>
        <div>
        <FormLabel component="legend">Gender</FormLabel>
        <RadioGroup  aria-label="gender" name="row-radio-buttons-group">
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
        </RadioGroup>
        </div>
        <div>
        <FormLabel component="legend">look for what</FormLabel>
        <RadioGroup  aria-label="gender" name="row-radio-buttons-group">
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="other" />
        </RadioGroup>
        </div>
      </FormControl>
      </Box>
    );
  }

export default StepTwo