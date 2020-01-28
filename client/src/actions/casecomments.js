import axios from 'axios';
import { setAlert } from './alert';
import {
	ADD_CASECOMMENT,
	GET_CASECOMMENTS,
	REMOVE_CASECOMMENT,
	CASECOMMENTS_ERROR
} from './types';

// Get case commemts
export const getCaseComments = id => async dispatch => {
	try {
		const res = await axios.get(`/api/case-comments/${id}`);

		dispatch({
			type: GET_CASECOMMENTS,
			payload: res.data
		});
	} catch (err) {
		dispatch({
			type: CASECOMMENTS_ERROR,
			payload: { msg: err.response.statusText, status: err.response.status }
		});
	}
};

// Add case comment
export const addCaseComment = formData => async dispatch => {
	const config = {
		headers: {
			'Content-Type': 'application/json'
		}
	};

	try {
		const res = await axios.post('/api/case-comments', formData, config);

		dispatch({
			type: ADD_CASECOMMENT,
			payload: res.data
		});

		dispatch(setAlert('Comment Created', 'success'));
	} catch (err) {
		dispatch({
			type: CASECOMMENTS_ERROR,
			payload: { msg: err.response.statusText, status: err.response.status }
		});
	}
};

// Remove case comment
export const removeCaseComment = id => async dispatch => {
	try {
		await axios.delete(`/api/case-comments/${id}`);

		dispatch({
			type: REMOVE_CASECOMMENT,
			payload: id
		});

		dispatch(setAlert('Comment Removed', 'success'));
	} catch (err) {
		dispatch({
			type: CASECOMMENTS_ERROR,
			payload: { msg: err.response.statusText, status: err.response.status }
		});
	}
};
