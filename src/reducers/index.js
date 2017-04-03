/**
 * Created by alexandr on 30.03.17.
 */
import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';

export default combineReducers({
    auth: AuthReducer
});
