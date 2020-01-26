import { GET_UNIDENTIFIED, UNIDENTIFIED_ERROR } from '../actions/types';

const initialState = {
	unIDpersons: [],
	unIDloading: true,
	error: {}
};

export default function(state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case GET_UNIDENTIFIED:
			return {
				...state,
				unIDpersons: payload,
				unIDloading: false
			};

		case UNIDENTIFIED_ERROR:
			return {
				...state,
				error: payload,
				unIDloading: false
			};

		default:
			return state;
	}
}