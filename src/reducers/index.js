import {combineReducers} from 'redux';
import {dashReducer} from './dashboardReducer';

const rootReducer = combineReducers({
    dashboard: dashReducer
});

export default rootReducer;