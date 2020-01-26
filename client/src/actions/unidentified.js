import axios from "axios";
import {
  GET_UNIDENTIFIED,
  UNIDENTIFIED_ERROR,
  UNIDENTIFIED_CASE
} from "./types";

// Get namus
export const getUnidentified = formData => async dispatch => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    console.log(formData);

    const res = await axios.post("/api/unidentified", formData, config);

    dispatch({
      type: GET_UNIDENTIFIED,
      payload: res.data
    });

    console.log(res.data);
  } catch (err) {
    dispatch({
      type: UNIDENTIFIED_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get Unidentified Case by case number
export const getUnidentifiedCase = caseNum => async dispatch => {
  console.log("case number " + caseNum);
  try {
    const res = await axios.get(`/api/unidentified/case/${caseNum}`);

    dispatch({
      type: UNIDENTIFIED_CASE,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: UNIDENTIFIED_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
