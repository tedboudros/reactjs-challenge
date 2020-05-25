import React from "react";
import styled from "styled-components";

const Text = styled.span`
  font-size: ${props => props.size || "14px"};
  font-weight: ${props => props.weight || "400"};
  color: ${props => props.color || "#000"};
  background-color: ${props => props.backgroundColor};
  cursor: ${props => props.cursorPointer && "pointer"};
  display: flex;
  align-items: center;
  &:hover {
    font-weight: ${props =>
      props.boldOnHover ? "600" : props.weight || "normal"};
  }
`;

const TextWrapper = props => {
  return <Text {...props}>{props.children}</Text>;
};

export default TextWrapper;
