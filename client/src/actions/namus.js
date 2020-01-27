import axios from "axios";
import { setAlert } from "./alert";
import {
  GET_NAMUS,
  NAMUS_ERROR,
  NAMUS_CASE
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
