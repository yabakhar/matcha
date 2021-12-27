import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

function Content({stepContent}) {
    return (
      <div>
        {
          (stepContent === 0) ? 
          <form>
          <TextField label={"Text Value"} />
          <TextField label={"Text Value"} />
          <TextField label={"Text Value"} />
          <Button variant="outlined">Outlined</Button>
         </form>
         : (stepContent === 1) ?
        <Box sx={{ width: "50%" ,height : "50%",justifyContent:"center",alignItems :"center"}}><h1>4545</h1></Box> 
        : <Box sx={{ width: "50%" ,height : "50%",justifyContent:"center",alignItems :"center"}}><h1>456454645</h1></Box> 
        } 
  
    </div>
    )
}

export default Content