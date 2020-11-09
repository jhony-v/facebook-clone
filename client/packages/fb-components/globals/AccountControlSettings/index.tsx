import React from "react";
import { FiBell, FiMessageSquare, FiPlus } from "react-icons/fi";
import { StyledControlWrapper } from "./Atoms/elements";
import UserAccountButtonOption from "./Atoms/UserAccountButtonOption";
import ControlButtonOption from "./Atoms/ControlButtonOption";
import ButtonToMoreOptionsAccount from "./Elements/ButtonToMoreOptionsAccount";

const AccountControlSettings = () => {
  return (
    <StyledControlWrapper>
      <UserAccountButtonOption />
      <ControlButtonOption icon={FiPlus} />
      <ControlButtonOption icon={FiMessageSquare} />
      <ControlButtonOption icon={FiBell} />
      <ButtonToMoreOptionsAccount/>
    </StyledControlWrapper>
  );
};

export default AccountControlSettings;
