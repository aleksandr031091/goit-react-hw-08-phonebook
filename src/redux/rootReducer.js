import { combineReducers } from "redux";
import contactsReducer from "./pfonebook/contactsReducer";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: [],
};

const rootReducer = combineReducers({
  contactsItem: contactsReducer,
});

export default rootReducer;
