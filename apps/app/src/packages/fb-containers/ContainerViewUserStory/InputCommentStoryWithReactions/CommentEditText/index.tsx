import styled from "styled-components";

const InputStory = styled.input.attrs({
  placeholder: "Reply..."
})`
  border: 1px solid white;
  border-radius: 30px;
  padding: 10px;
  width: 100%;
  margin-right: 10px;
  color: white;
  font-size: ${(props) => props.theme.fontSizes[400]};
`;

const CommentEditText = () => <InputStory />;

export default CommentEditText;
