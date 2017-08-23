import { combineReducers } from 'redux';

import weatherReducer from '../reducers/reducer-weather'


const rootReducer = combineReducers({
    weather: weatherReducer
});

export default rootReducer;
