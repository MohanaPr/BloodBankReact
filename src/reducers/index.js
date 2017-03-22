import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";
import {formReducer} from './reducer';

const rootReducer = combineReducers({
        formReducer,
        routing: routerReducer
    });

export default rootReducer;