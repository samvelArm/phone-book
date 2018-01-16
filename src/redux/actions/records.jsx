import {
  GET_RECORDS_REQUEST,
  GET_RECORDS_SUCCESS,
  GET_RECORDS_FAILURE
} from "./action-types";

export const records = {
  request: () => ({type: GET_RECORDS_REQUEST}),
  success: (data) => ({type: GET_RECORDS_SUCCESS, payload: data}),
  failure: (error) => ({type: GET_RECORDS_FAILURE, payload: error})
}