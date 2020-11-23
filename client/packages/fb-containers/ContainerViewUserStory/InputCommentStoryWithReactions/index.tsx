import styled from "styled-components";

const InputStory = styled.input.attrs({
  placeholder: "Reply...",
})`
  border: 1px solid white;
  border-radius: 30px;
  padding: 15px;
`;

const InputCommentStoryWithReactions = () => {
    return(
        <InputStory/>
    )
};

export default InputCommentStoryWithReactions;
