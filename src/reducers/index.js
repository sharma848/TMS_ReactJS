import {combineReducers} from 'redux';
import dataReducer from './login_reducer';

const rootReducer = combineReducers({
    loginData: dataReducer
});

export default rootReducer;