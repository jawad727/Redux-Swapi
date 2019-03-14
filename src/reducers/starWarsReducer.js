import { FETCHING, FAILURE, SUCCESS } from "../actions";


const initialState = {
  characters: [],
  fetching: false,
  error: null
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.

    case FETCHING:
      return { ...state, fetching: true, characters: [], error: "" }
    case FAILURE:
    return {...state, fetching: false, characters: [], error: action.payload}
    case SUCCESS:
    return {...state, fetching: false, characters: [...state.characters, ...action.payload], error: ""}

    default:
      return state;
  }
};
