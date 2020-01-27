import {
  GET_NAMUS,
  NAMUS_ERROR,
  NAMUS_CASE,
  ADD_NAMUS_COMMENT,
  REMOVE_NAMUS_COMMENT
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
    case ADD_NAMUS_COMMENT:
      return {
        ...state,
        namus: { ...state.namus, comments: payload },
        loading: false
      };

    case REMOVE_NAMUS_COMMENT:
      return {
        ...state,
        namus: {
          comments: state.namus.comments.filter(
            comment => comment._id !== payload
          )
        },
        loading: false
      };

    default:
      return state;
  }
}
