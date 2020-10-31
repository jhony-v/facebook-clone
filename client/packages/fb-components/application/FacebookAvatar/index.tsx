import { FaFacebookF } from "react-icons/fa";
import { StyledFacebookAvatar, StyledFacebookAvatarTypes } from "./elements";

const FacebookAvatar = (props : StyledFacebookAvatarTypes) => {
  return (
    <StyledFacebookAvatar {...props}>
      <FaFacebookF size={32} />
    </StyledFacebookAvatar>
  );
};

export default FacebookAvatar;
