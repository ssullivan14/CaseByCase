import { GET_CRIMES, CRIMES_ERROR } from '../actions/types';

const initialState = {
	persons: [],
	crimeLoading: true,
	error: {}
};

export default function(state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case GET_CRIMES:
			return {
				...state,
				incidents: payload,
				crimeLoading: false
			};

		case CRIMES_ERROR:
			return {
				...state,
				incidents: payload,
				crimeLoading: false
			};

		default:
			return state;
	}
}
