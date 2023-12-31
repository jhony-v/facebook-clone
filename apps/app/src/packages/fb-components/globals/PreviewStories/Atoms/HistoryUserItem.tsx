import FlexWrapper from "@fb-components/common/FlexWrapper";
import TextLabel from "@fb-components/common/TextLabel";
import Wrapper from "@fb-components/common/Wrapper";
import { FiPlus } from "react-icons/fi";
import {
  StyledCardOverflow,
  StyledUserButtonAdd,
  StyledUserImageAdd
} from "./elements";

type HistoryUserItemProps = {
  username: string;
  avatar: string;
};
const HistoryUserItem = ({ username, avatar }: HistoryUserItemProps) => (
  <StyledCardOverflow>
    <StyledUserImageAdd src={avatar} />
    <FlexWrapper justify="center">
      <StyledUserButtonAdd>
        <FiPlus size={20} />
      </StyledUserButtonAdd>
    </FlexWrapper>
    <Wrapper m="auto 0" w="100%">
      <FlexWrapper justify="center">
        <TextLabel weight textSize={200} textAlign="center">
          {username}
        </TextLabel>
      </FlexWrapper>
    </Wrapper>
  </StyledCardOverflow>
);

export default HistoryUserItem;
