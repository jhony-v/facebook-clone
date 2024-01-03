import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { textPostState } from "../Store";

const StyledFormTextArea = styled.textarea`
  font-size: ${(props) => props.theme.fontSizes[700]};
  resize: none;
  width: 100%;
  margin-bottom: 3em;
  &::-webkit-input-placeholder {
    color: ${(props) => props.theme.colors.vgTextBlackAlpha10};
  }
`;

const TextAreaMessage = () => {
  const setTextMessage = useSetRecoilState(textPostState);
  return (
    <div>
      <StyledFormTextArea
        placeholder="What's on your mind, Jhony?"
        onKeyUp={(event: React.KeyboardEvent<HTMLTextAreaElement>) => {
          setTextMessage(event.currentTarget.value);
        }}
      />
    </div>
  );
};

export default TextAreaMessage;
