import React,{Fragment,useState} from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Content  from "./ContentCompleteProfile";
import axios from "axios";
import {
  ContainerStyle
} from './CompleteProfile.style';

const steps = [
  "Select campaign settings",
  "Create an ad group",
  "Create an ad"
];
export const userContext = React.createContext();
export default function HorizontalLinearStepper() {
  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    galery: []
  })
  const [activeStep, setActiveStep] = useState(0);
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };   
  function createPost(userData) {
    axios.post("http://localhost:1337/user/completeProfile", userData);
  }
  return (
  <div style={{display : 'flex', alignItems : 'center', justifyContent : 'space-evenly', width : '100%', flexDirection : 'column', height : '100%'}}>
      <Stepper activeStep={activeStep}  style={{width : '90%'}}>
        {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <>
          {
           createPost(userData)
          }
        </>
      ) : (
        <>
          <ContainerStyle>
          <userContext.Provider value={{
              userData,
              setUserData
          }}>
            <Content stepContent={activeStep}/>
          </userContext.Provider>
          </ContainerStyle>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2, width : '70%' }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box>
        </>
      )}
  </div>
  );
}

