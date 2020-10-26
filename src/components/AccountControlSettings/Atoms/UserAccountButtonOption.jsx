import React from "react";
import Avatar from "../../Common/Avatar";
import { StyledUserAccountButton } from "./elements";
import faker from "faker";

const UserAccountButtonOption = () => {
  return (
    <StyledUserAccountButton
      text={faker.name.firstName()}
      image={<Avatar src={faker.image.avatar()} dimension="30px" />}
    />
  );
};

export default UserAccountButtonOption;
