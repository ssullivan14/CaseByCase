import {
	ADD_CASECOMMENT,
	GET_CASECOMMENTS,
	REMOVE_CASECOMMENT
} from '../actions/types';

const initialState = {
	casecomments: [],
	casecomment: null,
	ccLoading: true,
	error: {}
};

export default function(state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case ADD_CASECOMMENT:
			return {
				...state,
				casecomments: payload,
				ccLoading: false
			};

		case GET_CASECOMMENTS:
			return {
				...state,
				casecomments: payload,
				ccLoading: false
			};

		case REMOVE_CASECOMMENT:
			return {
				...state,
				casecomments: state.casecomments.filter(casecomment => casecomment._id !== payload),
				loading: false
			};

		default:
			return state;
	}
}
