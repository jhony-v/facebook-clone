import React from 'react';
import { StyledUserAccountButton } from "./elements";
import Avatar from "@fb-components/common/Avatar";
import faker from "faker";

const UserAccountButtonOption = () => {
  return (
    <StyledUserAccountButton
      text={faker.name.firstName()}
      image={<Avatar src={faker.image.people()} dimension="30px" />}
    />
  );
};

export default UserAccountButtonOption;
