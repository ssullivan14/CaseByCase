import { GET_FAVORITES, POST_FAVORITES, PUT_FAVORITES, FAVS_ERROR } from '../actions/types';

const initialState = {
    favs: [],
    fav: null,
    loading: true,
    error: {}
}

export default function(state = initialState, action) {
    const { type, payload } = action;
    
    switch (type) {
		case GET_FAVORITES:
			return {
				...state,
				favs: payload,
				loading: false
			};

		case POST_FAVORITES:
			return {
				...state,
				favs: payload,
				loading: false
			};

		case PUT_FAVORITES:
			return {
				...state,
				favs: [payload, ...state.favs],
				loading: false
			};

		case FAVS_ERROR:
			return {
				...state,
				error: payload,
				loading: false
			};

		default:
			return state;
	}
}

