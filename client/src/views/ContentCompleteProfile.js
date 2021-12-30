import StepOne from './Steps/StepOne';
import StepTwo from './Steps/StepTwo';
import StepThree from './Steps/StepThree';
function Content({stepContent}) {
    return (
      <div> 
        { 
          (stepContent === 0) ? 
          <StepOne/>
          : (stepContent === 1) ?
          <StepTwo/>
          : 
          <StepThree/>
        } 
      </div>
    )
}



export default Content