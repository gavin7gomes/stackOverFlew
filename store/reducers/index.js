import { combineReducers } from "redux";
import questionsReducer from "./questionsReducer";

global.reduxLog = [];

export default combineReducers({
  questions: questionsReducer,
});
