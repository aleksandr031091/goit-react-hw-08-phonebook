import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  getContactsRequest,
  getContactsSuccess,
  getContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  updateContactRequest,
  updateContactSuccess,
  updateContactError,
  filterContact,
} from "../pfonebook/contactsActions";

const contactReducer = createReducer([], {
  [getContactsSuccess]: (_, { payload }) => [...payload],
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),
  //   [updateContactSuccess]: (state, { payload }) => [],
});

const filterReducer = createReducer("", {
  [filterContact]: (_, { payload }) => payload,
});

const loadingReducer = createReducer(false, {
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
  [getContactsRequest]: () => true,
  [getContactsSuccess]: () => false,
  [getContactsError]: () => false,
  [updateContactRequest]: () => true,
  [updateContactSuccess]: () => false,
  [updateContactError]: () => false,
});

const errorReducer = createReducer("", {
  [addContactRequest]: () => true,
  [addContactError]: (_, { payload }) => payload,
  [deleteContactRequest]: () => true,
  [deleteContactError]: (_, { payload }) => payload,
  [getContactsRequest]: () => true,
  [getContactsError]: (_, { payload }) => payload,
  [updateContactRequest]: () => true,
  [updateContactError]: (_, { payload }) => payload,
});

// export { contactReducer, filterReducer, loadingReducer, errorReducer };

const contactsReducer = combineReducers({
  contacts: contactReducer,
  filter: filterReducer,
  loading: loadingReducer,
  error: errorReducer,
});

export default contactsReducer;
