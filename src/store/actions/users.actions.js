import axios from "axios";
import actionTypes from "./action.types";
import { apiUrl } from "../../config/api";

const fetchAllUsersStart = () => ({
  type: actionTypes.FETCH_USERS_START
});

const fetchAllUsersSuccess = users => ({
  type: actionTypes.FETCH_USERS_SUCCESS,
  users
});

const fetchAllUsersFailed = err => ({
  type: actionTypes.FETCH_USERS_SUCCESS,
  err
});

const toggleUserStart = () => ({
  type: actionTypes.TOGGLE_USER_START
});

const toggleUserSuccess = user => ({
  type: actionTypes.TOGGLE_USER_SUCCESS,
  user
});

const toggleUserFailed = err => ({
  type: actionTypes.TOGGLE_USER_FAILED,
  err
});

const selectUser = user => ({
  type: actionTypes.SELECT_USER,
  user
});

export const selectAllUsers = users => ({
  type: actionTypes.SELECT_ALL_USERS,
  users
});

const setAllSelected = () => ({
  type: actionTypes.SET_ALL_SELECTED
});

export const toggleSelectUser = user => {
  return async dispatch => {
    dispatch(selectUser(user));
    dispatch(setAllSelected());
  };
};

export const toggleUser = user => {
  return async dispatch => {
    try {
      dispatch(toggleUserStart());
      const toggleUserReq = await axios.put(`${apiUrl}/users/${user.id}`, {
        active: !user.active,
        name: user.name,
        phone: user.phone,
        email: user.email,
        type: user.type,
        id: user.id
      });
      const { data } = toggleUserReq;
      dispatch(toggleUserSuccess(data));
    } catch (err) {
      console.error(err);
      dispatch(toggleUserFailed(err));
    }
  };
};

export const fetchAllUsers = () => {
  return async dispatch => {
    try {
      dispatch(fetchAllUsersStart());
      const fetchUsers = await axios.get(`${apiUrl}/users`);
      const { data } = fetchUsers;
      dispatch(fetchAllUsersSuccess(data));
    } catch (err) {
      console.error(err);
      dispatch(fetchAllUsersFailed(err));
    }
  };
};
