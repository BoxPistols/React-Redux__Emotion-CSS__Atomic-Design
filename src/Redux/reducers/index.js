import { combineReducers } from "redux";
import { count } from "./counter";
import { title } from "./title";

export default combineReducers({
  count,
  title
});
