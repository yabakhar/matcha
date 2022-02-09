import { StyledSecondStep } from "./SecondStepStyle";
const SecondStep = ({ state, dispatch }) => {
    const {
        firstStep: { firstName: firstName, lastName: lastName },
    } = state;

    const background =
        !firstName || !lastName ? "NaN" : `${firstName[0]}${lastName[0]}`;
    return (
        <StyledSecondStep>
            <div className="profile-picture">
                <div className="profile-background">{background}</div>
            </div>
            <div className="galerie"></div>
        </StyledSecondStep>
    );
};

export default SecondStep;
