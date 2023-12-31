import RaisedButton from "@fb-components/common/RaisedButton";
import { useRecoilValue } from "recoil";
import styled, { css } from "styled-components";
import { textMessageDetailsSelector } from "../Store";

const ButtonAddPost = () => {
  const { isEmpty } = useRecoilValue(textMessageDetailsSelector);
  return (
    <div>
      <StyledRaisedButtonAddPost active={!isEmpty} disabled={isEmpty}>
        Add post
      </StyledRaisedButtonAddPost>
    </div>
  );
};

type ButtonAddPostTypes = {
  active?: boolean;
};

const StyledRaisedButtonAddPost = styled(RaisedButton)<ButtonAddPostTypes>`
  width: 100%;
  ${(props) =>
    props.active &&
    css`
      background-color: ${props.theme.colors.vgPrimary};
      color: ${props.theme.colors.vgBlackAlpha00};
    `}
  ${(props) =>
    !props.active &&
    css`
      background-color: ${props.theme.colors.vgBlackAlpha20};
    `}
`;

export default ButtonAddPost;
