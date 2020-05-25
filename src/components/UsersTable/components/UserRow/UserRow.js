import React from "react";
import "./UserRow.css";
import Status from "./components/Status/Status";
import Text from "../../../SharedComponents/Text/Text";
import CheckBox from "./components/CheckBox/CheckBox";

const userTypes = {
  Employee: { title: "EM", color: "#E17878" },
  Supervisor: { title: "SU", color: "#B9E5E5" },
  Guest: { title: "GU", color: "#8A98CA" },
  Stakeholder: { title: "SH", color: "#F2AC57" }
};

const UserRow = ({ user, header }) => {
  const userType = user && userTypes[user.type];
  return (
    <div className="userRow">
      {header ? (
        <>
          <div className="userRowTypeContainer">
            <CheckBox header />
            <Text color="#39628D" weight="600">
              TYPE
            </Text>
          </div>
          <div className="userRowName">
            <Text color="#39628D" weight="600">
              NAME
            </Text>
          </div>
          <div className="userRowEmail">
            <Text color="#39628D" weight="600">
              EMAIL
            </Text>
          </div>
          <div className="userRowPhone">
            <Text color="#39628D" weight="600">
              TELEPHONE
            </Text>
          </div>
          <div className="userRowStatus">
            <Text color="#39628D" weight="600">
              STATUS
            </Text>
          </div>
        </>
      ) : (
        <>
          <div className="userRowTypeContainer">
            <CheckBox user={user} />
            <Text
              backgroundColor={userType.color}
              weight="600"
              color="#354069"
              className="userRowType"
            >
              {userType.title}
            </Text>
          </div>
          <div className="userRowName">
            <Text color="#39628D" boldOnHover cursorPointer>
              {user.name}
            </Text>
          </div>
          <div className="userRowEmail">
            <Text color="#39628D" boldOnHover cursorPointer>
              {user.email}
            </Text>
          </div>
          <div className="userRowPhone">
            <Text color="#39628D" boldOnHover cursorPointer>
              {user.phone}
            </Text>
          </div>
          <div className="userRowStatus">
            <Status user={user} />
          </div>
        </>
      )}
    </div>
  );
};

export default UserRow;
