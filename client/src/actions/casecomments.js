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
		const res = await axios.get('/api/case-comments');

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

		dispatch(setAlert('Comment created', 'success'));
	} catch (err) {
		dispatch({
			type: CASECOMMENTS_ERROR,
			payload: { msg: err.response.statusText, status: err.response.status }
		});
	}
};
