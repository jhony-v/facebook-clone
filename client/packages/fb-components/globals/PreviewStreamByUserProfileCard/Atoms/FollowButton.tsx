import React from "react";
import { ButtonFollowStreamUser } from "./elements";

const FollowButton = ({ following }: { following?: boolean }) => {
  return <ButtonFollowStreamUser>
      {following ? "Following" : "Follow"}
  </ButtonFollowStreamUser>;
};

export default FollowButton;
