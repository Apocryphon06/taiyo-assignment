import { combineReducers } from "redux";
import contactReducer from "./ContactReducer";

const allReducers = combineReducers({
  contact: contactReducer,
});

export default allReducers;
