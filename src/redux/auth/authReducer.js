import { createReducer } from "@reduxjs/toolkit";
import {
  getCurrentUserSuccess,
  loginUserSuccess,
  registerUserSuccess,
  signOutSuccess,
} from "./authActions";

const authReducer = createReducer(
  {
    name: "",
    mail: "",
    idToken: "",
  },
  {
    [registerUserSuccess]: (_, { payload }) => ({
      name: payload.user.name,
      mail: payload.user.email,
      idToken: payload.token,
    }),
    [loginUserSuccess]: (_, { payload }) => ({
      name: payload.user.name,
      mail: payload.user.email,
      idToken: payload.token,
    }),
    [signOutSuccess]: () => ({
      name: "",
      mail: "",
      idToken: "",
    }),
    [getCurrentUserSuccess]: (_, { payload }) => payload,
  }
);

export default authReducer;
