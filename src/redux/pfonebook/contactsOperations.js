import axios from "axios";
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
} from "../pfonebook/contactsActions";

export const getContacts = () => async (dispatch) => {
  dispatch(getContactsRequest());
  try {
    const response = await axios.get("/contacts");

    dispatch(getContactsSuccess(response.data));
  } catch (error) {
    dispatch(getContactsError(error));
  }
};

export const addContact = (contact) => async (dispatch) => {
  dispatch(addContactRequest());
  try {
    const response = await axios.post("/contacts", contact);

    dispatch(addContactSuccess(response.data));
  } catch (error) {
    dispatch(addContactError(error));
  }
};

export const deleteContact = (id) => async (dispatch) => {
  dispatch(deleteContactRequest());
  try {
    const response = await axios.delete("/contacts", id);

    dispatch(deleteContactSuccess(response.data));
  } catch (error) {
    dispatch(deleteContactError(error));
  }
};

export const updateContact = (id) => async (dispatch) => {
  dispatch(updateContactRequest());
  try {
    const response = await axios.patch("/contacts", id);

    dispatch(updateContactSuccess(response.data));
  } catch (error) {
    dispatch(updateContactError(error));
  }
};
