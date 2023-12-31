import Avatar from "@fb-components/common/Avatar";
import TextLabel from "@fb-components/common/TextLabel";
import Wrapper from "@fb-components/common/Wrapper";
import { StyledCardBackgroundImage, StyledCardOverflow } from "./elements";

type HistoryItemProps = {
  image?: string;
  user: {
    avatar?: string;
    username?: string;
  };
};
const HistoryItem = ({ user, image }: HistoryItemProps) => (
  <StyledCardOverflow>
    <StyledCardBackgroundImage image={image}>
      <Wrapper p="10px">
        <Avatar dimension="30px" isFeature src={user.avatar} />
      </Wrapper>
      <Wrapper m="auto 10px 10px" w="90%">
        <TextLabel weight textColor="vgTextBlackAlpha00" textSize={300}>
          {user.username}
        </TextLabel>
      </Wrapper>
    </StyledCardBackgroundImage>
  </StyledCardOverflow>
);

export default HistoryItem;
