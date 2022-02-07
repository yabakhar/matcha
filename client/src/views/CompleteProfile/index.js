import { useEffect, useReducer } from "react";

const actionTypes = {
  firstStep: {
    gender: "UPDATE_GENDER",
    sexualPreferences: "UPDATE_SEXUAL_PREFERENCES",
    biography: "UPDATE_BIOGRAPHY",
    isComplete: "UPDATE_IS_COMPLETE",
  },
  secondStep: {
    isComplete: "UPDATE_IS_COMPLETE",
    profilePicture: "UPDATE_PROFILE_PICTURE",
    gallery: "UPDATE_GALLERY",
    listOfInterests: "UPDATE_LIST_OF_INTERESTS",
  },
  thirdStep: {
    isComplete: "UPDATE_IS_COMPLETE",
    location: "UPDATE_LOCATION",
  },
};

const initialState = {
  firstStep: {
    gender: 0,
    sexualPreferences: null,
    biography: null,
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
    location: { lat: 0, lng: 0 },
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.firstStep.gender:
      return {
        ...state,
        firstStep: { ...state.firstStep, gender: action.gender },
      };
    case actionTypes.firstStep.sexualPreferences:
      return {
        ...state,
        firstStep: {
          ...state.firstStep,
          sexualPreferences: action.sexualPreferences,
        },
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
    default:
      return state;
  }
};

const CompleteProfile = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  useEffect(() => {}, [state]);
  return (
    <div>
      CompleteProfile
      <div
        onClick={() => {
          dispatch({
            type: actionTypes.firstStep.gender,
            gender: !state.firstStep.gender,
          });
        }}
      >
        sdkfhsadf
      </div>
    </div>
  );
};

export default CompleteProfile;
