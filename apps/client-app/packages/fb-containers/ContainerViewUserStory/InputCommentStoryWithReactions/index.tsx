import styled from "styled-components";
import FlexWrapper from "@fb-components/common/FlexWrapper";
import CommentEditText from "./CommentEditText";
import CommentReactions from "./CommentReactions";

const WrapperComment = styled(FlexWrapper)`
  width: 620px;
  max-width: 95%;
  margin: auto;
`;

const InputCommentStoryWithReactions = () => (
  <WrapperComment>
    <CommentEditText />
    <CommentReactions />
  </WrapperComment>
);

export default InputCommentStoryWithReactions;
