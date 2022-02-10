import { useState } from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import { ColorlibConnector, ColorlibStepIcon } from "./Steper.Style";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FirstStep from "./Steps/FirstStep";
import SecondStep from "./Steps/SecondStep";
import ThirdStep from "./Steps/ThirdStep";

function getSteps() {
  return ["Complete Personnel Info", "Upload Photos", "Localisation"];
}

function getStepContent(step, state, dispatch) {
  switch (step) {
    case 0:
      return <FirstStep state={state} dispatch={dispatch} />;
    case 1:
      return <SecondStep state={state} dispatch={dispatch} />;
    case 2:
      return <ThirdStep state={state} dispatch={dispatch} />;
    default:
      return "Unknown step";
  }
}

const Steper = ({ state, dispatch }) => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();
  const handleNext = () => {
    setActiveStep((prevActiveStep) => {
      console.log(prevActiveStep);
      return prevActiveStep + 1;
    });
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  return (
    <div className="steper">
      <Stepper
        className="steper--steps"
        alternativeLabel
        activeStep={activeStep}
        connector={<ColorlibConnector />}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length ? (
        <div>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset}>Reset</Button>
        </div>
      ) : (
        <div className="steper--step">
          <div className="steper--step__content">
            {getStepContent(activeStep, state, dispatch)}
          </div>
          <div className="steper--step__buttons">
            <Button
              className="steper--step__button"
              disabled={activeStep === 0}
              onClick={handleBack}
            >
              Back
            </Button>
            <Button
              className="steper--step__button"
              variant="contained"
              color="primary"
              onClick={handleNext}
            >
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Steper;
