import { GET_CRIMES, CRIMES_ERROR } from '../actions/types';

const initialState = {
	persons: [],
	loading: true,
	error: {}
};

export default function(state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case GET_CRIMES:
			return {
				...state,
				incidents: payload,
				loading: false
			};

		case CRIMES_ERROR:
			return {
				...state,
				incidents: payload,
				loading: false
			};

		default:
			return state;
	}
}
