import React from "react";
import "./CheckBox.css";
import {
  selectAllUsers,
  toggleSelectUser
} from "../../../../../../store/actions/users.actions";
import { useSelector, useDispatch } from "react-redux";

const CheckBox = ({ user, header }) => {
  const dispatch = useDispatch();
  const allSelected = useSelector(state => state.users.allSelected);

  const isToggled = user && !!user.isToggled;

  const onClick = () => {
    if (header) {
      dispatch(selectAllUsers());
    } else {
      dispatch(toggleSelectUser(user));
    }
  };

  return (
    <div
      onClick={onClick}
      className={`userCheckBox ${
        header ? (allSelected ? "toggledOn" : "") : isToggled ? "toggledOn" : ""
      }`}
    />
  );
};

export default CheckBox;
