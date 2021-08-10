import axios from "axios";
import {
  loginUserRequest,
  loginUserSuccess,
  registerUserRequest,
  registerUserSuccess,
} from "./authActions";

export const registerUserOperation = (user) => async (dispatch) => {
  dispatch(registerUserRequest());
  try {
    const response = await axios.post(
      "https://connections-api.herokuapp.com/users/signup",
      {
        ...user,
        token: true,
      }
    );
    // console.log(response.data);
    dispatch(registerUserSuccess(response.data));
  } catch (error) {
    console.log(error);
  }
};

export const loginUserOperation = (user) => async (dispatch) => {
  dispatch(loginUserRequest());
  try {
    const response = await axios.post(
      "https://connections-api.herokuapp.com/users/login",
      {
        ...user,
        token: true,
      }
    );
    console.log(response.data);
    dispatch(loginUserSuccess(response.data));
  } catch (error) {
    console.log(error);
  }
};

// export const logOutUserOperation = (user) => async (dispatch) => {
//   dispatch(loginUserRequest());
//   try {
//     const response = await axios.post(
//       "https://connections-api.herokuapp.com/users/logout",
//       {
//         ...user,
//         token: true,
//       }
//     );
//     console.log(response.data);
//     dispatch(loginUserSuccess(response.data));
//   } catch (error) {
//     console.log(error);
//   }
// };
// export const currentUserOperation = (user) => async (dispatch) => {
//   dispatch(loginUserRequest());
//   try {
//     const response = await axios.get(
//       "https://connections-api.herokuapp.com/users/current",
//       {
//         ...user,
//         token: true,
//       }
//     );
//     console.log(response.data);
//     dispatch(loginUserSuccess(response.data));
//   } catch (error) {
//     console.log(error);
//   }
// };
