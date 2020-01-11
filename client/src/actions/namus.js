import axios from 'axios';
import { GET_NAMUS } from './types';

// Get namus
export const getNamus = () => async dispatch => {
    try {
        const res = await axios.get('/api/namus');

        dispatch({
            type: GET_NAMUS,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
}