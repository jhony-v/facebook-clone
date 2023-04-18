import { ButtonFollowStreamUser } from "./elements";

const FollowButton = ({ following }: { following?: boolean }) => (
  <ButtonFollowStreamUser>
    {following ? "Following" : "Follow"}
  </ButtonFollowStreamUser>
);

export default FollowButton;
