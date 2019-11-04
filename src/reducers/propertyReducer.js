import { GET_PROPERTIES, PROPERTY_BY_TYPE } from "../actions/types";
import isEmpty from "../validation/is-empty";

const initialState = {
  propertiesFound: false,
  properties: []
};

// this function takes the initialState
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PROPERTIES:
      return {
        ...state,
        propertiesFound: !isEmpty(action.payload),
        properties: action.payload
      };
    case PROPERTY_BY_TYPE:
      return {
        ...state,
        propertiesFound: !isEmpty(action.payload),
        properties: action.payload
      };
    default:
      return state;
  }
}
