import { SINGLE_PROPERTY } from '../actions/types';
import isEmpty from '../validation/is-empty';

const initialState = {
    propertyFound: false,
    singleProperty: {}
}

// this function takes the initialState
export default function (state = initialState, action) {
    switch(action.type) {
        case SINGLE_PROPERTY:
            return {
                ...state, 
                propertyFound: !isEmpty(action.payload),
                singleProperty: action.payload
            }
        default: 
            return state;
    }
}