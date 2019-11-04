import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import propertyReducer from './propertyReducer';
import singlePropertyReducer from './singlePropertyReducer';

export default combineReducers({
    auth: authReducer,
    errors: errorReducer,
    properties: propertyReducer,
    property: singlePropertyReducer
});