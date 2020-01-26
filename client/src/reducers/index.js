import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import profile from './profile';
import post from './post';
import namus from './namus';
import crimes from './crimes';
import unidentified from './unidentified';

export default combineReducers({
    alert,
    auth,
    profile,
    post,
    namus,
    crimes,
    unidentified
});