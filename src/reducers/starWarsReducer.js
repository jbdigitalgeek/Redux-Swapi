import {
  FETCH_CHARACTERS,
  FETCH_CHARACTERS_SUCCESS,
  FETCH_CHARACTERS_ERROR
}  from "../actions";


const initialState = {
  characters: [],
  fetching: false,
  error: null
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHARACTERS:
    return {...state, fetching: true};
    case FETCH_CHARACTERS_SUCCESS:
    return {...state, 
    characters: [...state.characters, ...action.payload],
  fetching: false};
  case FETCH_CHARACTERS_ERROR:
  return {...state, fetching: false, error: action.payload}

    default:
      return state;
  }
};
