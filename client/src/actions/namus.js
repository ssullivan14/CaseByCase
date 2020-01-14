import axios from 'axios';
import { GET_NAMUS, NAMUS_ERROR } from './types';

// Get namus
export const getNamus = (formData) => async dispatch => {
    try {
        const config = {
			headers: {
				'Content-Type': 'application/json'
			}
		};

        console.log(formData);

        const res = await axios.post('/api/namus', formData, config);

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
}