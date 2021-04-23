import {  combineReducers } from "redux"

import {reducer as SignInReducer} from "../redux/SignIn";

export default combineReducers({
    signIn: SignInReducer
})