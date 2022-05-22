import { combineReducers } from "redux";
import loggedReducer from "./loggedReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  loggedIn: loggedReducer,
  user: userReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
