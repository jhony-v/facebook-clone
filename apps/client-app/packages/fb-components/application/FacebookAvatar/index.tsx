import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { StyledFacebookAvatar, StyledFacebookAvatarTypes } from "./elements";

const FacebookAvatar = (props: StyledFacebookAvatarTypes) => (
  <StyledFacebookAvatar {...props} role="link">
    <FaFacebookF size={32} />
  </StyledFacebookAvatar>
);

export default FacebookAvatar;
