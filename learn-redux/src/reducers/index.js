import counterReducer from "./counter";
import loggedReducer from "./isLogged";

import { combineReducers } from "redux";

const allReducer = combineReducers( {
    counter: counterReducer,
    islogged: loggedReducer
    // counterReducer (means counterReducer:counterReducer)
})

export default allReducer