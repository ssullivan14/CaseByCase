import uuid from 'uuid';
import { SET_ALERT, REMOVE_ALERT } from './types';

export const setAlert = (msg, alertType, timeout = 5000) => dispatch => {
	// Generate random string
	const id = uuid.v4();
    
    // Dispatch alert to reducer
    dispatch({
		type: SET_ALERT,
		payload: { msg, alertType, id }
    });
    
    // Wait 5 seconds, then dispatch the REMOVE_ALERT action
    setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
};
