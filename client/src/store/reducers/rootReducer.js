import { combineReducers } from 'redux';
import profile from './profileReducer';

const rootReducer = combineReducers({
    user: profile,
});

export default rootReducer;
