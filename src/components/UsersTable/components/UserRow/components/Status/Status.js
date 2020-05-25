import React from "react";
import { useDispatch } from "react-redux";
import "./Status.css";
import { toggleUser } from "../../../../../../store/actions/users.actions";

const Status = ({ user }) => {
  const dispatch = useDispatch();

  const onClick = async () => {
    dispatch(toggleUser(user));
  };

  return (
    <div
      onClick={onClick}
      className={`userStatus ${user.active && "toggledOn"}`}
    >
      <div className="circle" />
    </div>
  );
};
export default Status;
