import {
  GET_RECORDS_REQUEST,
  GET_RECORDS_SUCCESS,
  GET_RECORDS_FAILURE
} from "../actions/action-types";

const initialState = {
  data: [],
  isLoading: false,
  errorMessage: ''
}


export default (state = initialState, action) => {
  switch (action.type) {
    case GET_RECORDS_REQUEST:
      return {
        ...state,
        isLoading: true,
        errorMessage: ''
      }
    case GET_RECORDS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
        errorMessage: ''
      }
    case GET_RECORDS_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload,
        data: []
      }
    default:
      return state;
  }
}