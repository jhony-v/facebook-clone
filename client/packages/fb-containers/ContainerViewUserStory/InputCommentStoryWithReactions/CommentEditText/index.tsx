import styled from "styled-components";

const InputStory = styled.input.attrs({
  placeholder: "Reply...",
})`
  border: 1px solid white;
  border-radius: 30px;
  padding: 10px;
  width: 100%;
  margin-right: 10px;
  font-size: ${(props) => props.theme.fontSizes[400]};
`;

const CommentEditText = () => {
  return <InputStory />;
};

export default CommentEditText;
