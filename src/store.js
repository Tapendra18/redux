import { createStore, combineReducers } from "redux";
import { index } from "./reducers/index";

export default createStore(
  combineReducers({
    form: index
  })
);
