import { combineReducers } from "redux";
import loggedReducer from "./loggedReducer";
import userReducer from "./userReducer";

export default combineReducers({
  loggedIn: loggedReducer,
  user: userReducer,
});
