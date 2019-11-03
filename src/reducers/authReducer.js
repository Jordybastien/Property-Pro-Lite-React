import { SET_CURRENT_USER } from '../actions/types';
import isEmpty from '../validation/is-empty';

const initialState = {
    isAuthenticated: false,
    user: {}
}

// this function takes the initialState
export default function (state = initialState, action) {
    switch(action.type) {
        case SET_CURRENT_USER:
            return {
                ...state, 
                isAuthenticated: !isEmpty(action.payload),
                loading: false, 
                user: action.payload
            }
        default: 
            return state;
    }
}