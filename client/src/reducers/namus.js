import {
  GET_NAMUS,
  NAMUS_ERROR,
  NAMUS_CASE
} from "../actions/types";

const initialState = {
  persons: [],
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_NAMUS:
      return {
        ...state,
        persons: payload,
        loading: false
      };

    case NAMUS_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };

    case NAMUS_CASE:
      return {
        ...state,
        namusCase: payload,
        loading: false
      };

    default:
      return state;
  }
}
