import update from "immutability-helper";
import actionTypes from "../actions/action.types";

const initialState = {
  loading: false,
  users: [],
  err: "",
  allSelected: false
};

const fetchAllUsersFailed = (state, action) => {
  const { err } = action;
  return update(state, {
    loading: { $set: false },
    err: { $set: err }
  });
};

const fetchAllUsersStart = state => {
  return update(state, {
    loading: { $set: true }
  });
};

const fetchAllUsersSuccess = (state, action) => {
  const { users } = action;
  return update(state, {
    users: { $set: users },
    loading: { $set: false }
  });
};

const toggleUserFailed = (state, action) => {
  const { err } = action;
  return update(state, {
    loading: { $set: false },
    err: { $set: err }
  });
};

const toggleUserStart = state => {
  return update(state, {
    loading: { $set: true }
  });
};

const toggleUserSuccess = (state, action) => {
  return update(state, {
    users: {
      $apply: users => {
        return users.map(user => {
          if (user.id === action.user.id) {
            return action.user;
          }
          return user;
        });
      }
    },
    loading: { $set: false }
  });
};

const selectUser = (state, action) => {
  return update(state, {
    users: {
      $apply: users => {
        return users.map(user => {
          const newUser = { ...user };
          if (user.id === action.user.id) {
            newUser.isToggled = !newUser.isToggled;
          }
          return newUser;
        });
      }
    }
  });
};

const setAllSelected = state => {
  return update(state, {
    allSelected: {
      $set:
        state.users.length === state.users.filter(user => user.isToggled).length
    }
  });
};

const selectAllUser = state => {
  return update(state, {
    users: {
      $apply: users => {
        return users.map(user => {
          const newUser = { ...user };
          newUser.isToggled = !state.allSelected;
          return newUser;
        });
      }
    },
    allSelected: { $set: !state.allSelected }
  });
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_USERS_FAILED:
      return fetchAllUsersFailed(state, action);
    case actionTypes.FETCH_USERS_START:
      return fetchAllUsersStart(state);
    case actionTypes.FETCH_USERS_SUCCESS:
      return fetchAllUsersSuccess(state, action);
    case actionTypes.TOGGLE_USER_FAILED:
      return toggleUserFailed(state, action);
    case actionTypes.TOGGLE_USER_START:
      return toggleUserStart(state);
    case actionTypes.TOGGLE_USER_SUCCESS:
      return toggleUserSuccess(state, action);
    case actionTypes.SELECT_USER:
      return selectUser(state, action);
    case actionTypes.SELECT_ALL_USERS:
      return selectAllUser(state);
    case actionTypes.SET_ALL_SELECTED:
      return setAllSelected(state);
    default:
      return state;
  }
};

export default reducer;
