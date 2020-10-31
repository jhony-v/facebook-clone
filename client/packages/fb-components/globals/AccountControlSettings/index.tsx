import React from "react";
import { FiBell, FiMessageSquare, FiPlus } from "react-icons/fi";
import { AiFillCaretDown } from "react-icons/ai";
import { StyledControlWrapper } from "./Atoms/elements";
import UserAccountButtonOption from "./Atoms/UserAccountButtonOption";
import ControlButtonOption from "./Atoms/ControlButtonOption";

const AccountControlSettings = () => {
  return (
    <StyledControlWrapper>
      <UserAccountButtonOption />
      <ControlButtonOption icon={FiPlus} />
      <ControlButtonOption icon={FiMessageSquare} />
      <ControlButtonOption icon={FiBell} />
      <ControlButtonOption icon={AiFillCaretDown} />
    </StyledControlWrapper>
  );
};

export default AccountControlSettings;
