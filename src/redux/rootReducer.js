import { combineReducers } from "redux";
import contactsReducer from "./pfonebook/contactsReducer";

const rootReducer = combineReducers({
  items: contactsReducer,
});

export default rootReducer;
