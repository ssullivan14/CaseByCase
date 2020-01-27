import axios from "axios";
import { setAlert } from "./alert";
import {
  GET_NAMUS,
  NAMUS_ERROR,
  NAMUS_CASE,
  ADD_NAMUS_COMMENT,
  REMOVE_NAMUS_COMMENT
} from "./types";

// Get namus
export const getNamus = formData => async dispatch => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    console.log(formData);

    const res = await axios.post("/api/namus", formData, config);

    dispatch({
      type: GET_NAMUS,
      payload: res.data
    });

    console.log(res.data);
  } catch (err) {
    dispatch({
      type: NAMUS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get Namus Case by case number
export const getNamusCase = caseNum => async dispatch => {
  console.log("case number " + caseNum);
  try {
    const res = await axios.get(`/api/namus/case/${caseNum}`);

    dispatch({
      type: NAMUS_CASE,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: NAMUS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Add comment
export const addComment = (postId, formData) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  try {
    const res = await axios.post(
      `/api/namus/comment/${postId}`,
      formData,
      config
    );

    dispatch({
      type: ADD_NAMUS_COMMENT,
      payload: res.data
    });

    dispatch(setAlert("Comment added", "success"));
  } catch (err) {
    dispatch({
      type: NAMUS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Delete comment
export const deleteComment = (postId, commentId) => async dispatch => {
  try {
    await axios.delete(`/api/namus/comment/${postId}/${commentId}`);

    dispatch({
      type: REMOVE_NAMUS_COMMENT,
      payload: commentId
    });

    dispatch(setAlert("Comment Removed", "success"));
  } catch (err) {
    dispatch({
      type: NAMUS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
