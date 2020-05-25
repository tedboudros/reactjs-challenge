import React from "react";
import "./Header.css";
import Text from "../../SharedComponents/Text/Text";
import { useSelector } from "react-redux";

const Header = () => {
  const users = useSelector(state => state.users.users);

  const selectedItemsLength = users.filter(user => user.isToggled).length;
  return (
    <div className="header">
      <Text size="18px" weight="500" color="#22242A">
        <img className="headerImage" src="/images/users.png" alt="users" />
        Users
      </Text>
      <Text size="12px" color="#808080" weight="400">
        {selectedItemsLength} selected
        <img
          className="headerImageQuestion"
          src="/images/questionMark.png"
          alt="users"
        />
      </Text>
    </div>
  );
};

export default Header;
