import axios from 'axios';
import { POST_FAVORITES, GET_FAVORITES, PUT_FAVORITES, FAVS_ERROR } from './types';

//GET FAVS
export const getFavs = id => async dispatch => {
    try {
        const res = await axios.get(`/api/favorites/${id}`);

        dispatch({
            type: GET_FAVORITES,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: FAVS_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};
export const postFavs = favObject => async dispatch => {
    console.log('I am here');
    console.log(favObject);

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    try {
        const res = await axios.post(`/api/favorites/${favObject.id}`, favObject, config);

        dispatch({
            type: POST_FAVORITES,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: FAVS_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};
export const putFavs = () => async dispatch => {
    try {
        const res = await axios.get('/api/favorites');

        dispatch({
            type: PUT_FAVORITES,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: FAVS_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};
