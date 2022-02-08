import { useEffect, useReducer } from "react";
import Steper from "./Steper";
import { CompleteProfileContainer } from "./CompleteProfile.Style";

const actionTypes = {
  firstStep: {
    firstName: "UPDATE_FIRST_NAME",
    lastName: "UPDATE_LAST_NAME",
    gender: "UPDATE_GENDER",
    biography: "UPDATE_BIOGRAPHY",
    isComplete: "UPDATE_IS_COMPLETE",
    birthdate: "UPDATE_BIRTH_DATE",
  },
  secondStep: {
    isComplete: "UPDATE_IS_COMPLETE",
    profilePicture: "UPDATE_PROFILE_PICTURE",
    gallery: "UPDATE_GALLERY",
    listOfInterests: "UPDATE_LIST_OF_INTERESTS",
  },
  thirdStep: {
    isComplete: "UPDATE_IS_COMPLETE",
    sexualPreferences: "UPDATE_SEXUAL_PREFERENCES",
    location: "UPDATE_LOCATION",
  },
};

const initialState = {
  firstStep: {
    firstName: null,
    lastName: null,
    gender: null,
    biography: null,
    birthdate: null,
    isComplete: false,
  },
  secondStep: {
    isComplete: false,
    profilePicture: null,
    gallery: [],
    listOfInterests: [],
  },
  thirdStep: {
    isComplete: false,
    sexualPreferences: null,
    location: { lat: 0, lng: 0 },
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    /*****************First Step******************* */
    case actionTypes.firstStep.gender:
      return {
        ...state,
        firstStep: { ...state.firstStep, gender: action.gender },
      };
    case actionTypes.firstStep.firstName:
      return {
        ...state,
        firstStep: { ...state.firstStep, firstName: action.firstName },
      };
    case actionTypes.firstStep.lastName:
      return {
        ...state,
        firstStep: { ...state.firstStep, firstName: action.lastName },
      };
    case actionTypes.firstStep.biography:
      return {
        ...state,
        firstStep: { ...state.firstStep, biography: action.biography },
      };
    case actionTypes.firstStep.isComplete:
      return {
        ...state,
        firstStep: { ...state.firstStep, isComplete: action.isComplete },
      };
    case actionTypes.firstStep.birthdate:
      return {
        ...state,
        firstStep: {
          ...state.firstStep,
          birthdate: action.birthdate,
        },
      };
    /*****************Second Step******************* */
    case actionTypes.secondStep.isComplete:
      return {
        ...state,
        secondStep: { ...state.secondStep, isComplete: action.isComplete },
      };
    case actionTypes.secondStep.profilePicture:
      return {
        ...state,
        secondStep: {
          ...state.secondStep,
          profilePicture: action.profilePicture,
        },
      };
    case actionTypes.secondStep.gallery:
      return {
        ...state,
        secondStep: { ...state.secondStep, gallery: action.gallery },
      };
    case actionTypes.secondStep.listOfInterests:
      return {
        ...state,
        secondStep: {
          ...state.secondStep,
          listOfInterests: action.listOfInterests,
        },
      };
    /*****************Third Step******************* */
    case actionTypes.thirdStep.isComplete:
      return {
        ...state,
        thirdStep: { ...state.thirdStep, isComplete: action.isComplete },
      };
    case actionTypes.thirdStep.location:
      return {
        ...state,
        thirdStep: { ...state.thirdStep, location: action.location },
      };
    case actionTypes.thirdStep.sexualPreferences:
      return {
        ...state,
        thirdStep: {
          ...state.thirdStep,
          sexualPreferences: action.sexualPreferences,
        },
      };
    default:
      return state;
  }
};

const CompleteProfile = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // useEffect(() => {
  //   console.log(state);
  // }, [state]);
  return (
    <CompleteProfileContainer>
      <h1 className="title">Complete Profile</h1>
      <Steper state={state} dispatch={dispatch} />
    </CompleteProfileContainer>
  );
};

export default CompleteProfile;
