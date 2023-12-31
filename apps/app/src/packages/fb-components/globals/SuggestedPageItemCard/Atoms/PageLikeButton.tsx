import FlexWrapper from "@fb-components/common/FlexWrapper";
import RaisedButton from "@fb-components/common/RaisedButton";
import TextLabel from "@fb-components/common/TextLabel";
import Wrapper from "@fb-components/common/Wrapper";
import { FaThumbsUp } from "react-icons/fa";
import styled from "styled-components";

const StyledButton = styled(RaisedButton)`
  background-color: ${(props) => props.theme.colors.vgBlackAlpha12};
`;
type PageLikeButtonProps = {
  liked?: boolean;
};
const PageLikeButton = (props: PageLikeButtonProps) => (
  <Wrapper m="auto 0 0">
    <StyledButton fluid>
      <FaThumbsUp size={16} />
      <Wrapper m="0 0 0 5px">
        <TextLabel weight textColor="vgTextBlack">
          Like
        </TextLabel>
      </Wrapper>
    </StyledButton>
  </Wrapper>
);

export default PageLikeButton;
