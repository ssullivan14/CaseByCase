import axios from 'axios';
import { GET_CRIMES, CRIMES_ERROR } from './types';

// Get crimes
export const getCrimes= (formData) => async dispatch => {
    try {
        const config = {
			headers: {
				'Content-Type': 'application/json'
			}
		};

        const res = await axios.post('/api/crimes', formData, config);

        dispatch({
            type: GET_CRIMES,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: CRIMES_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
}