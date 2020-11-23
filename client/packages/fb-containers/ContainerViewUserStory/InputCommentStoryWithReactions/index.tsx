import FlexWrapper from "@fb-components/common/FlexWrapper";
import styled from "styled-components";

const WrapperComment = styled(FlexWrapper)`
  width: 400px;
  max-width: 95%;
  margin: auto;
`;

const InputStory = styled.input.attrs({
  placeholder: "Reply...",
})`
  border: 1px solid white;
  border-radius: 30px;
  padding: 10px;
  width:100%;
  font-size: ${(props) => props.theme.fontSizes[400]};
`;

const InputCommentStoryWithReactions = () => {
  return (
    <WrapperComment>
      <InputStory />
    </WrapperComment>
  );
};

export default InputCommentStoryWithReactions;
