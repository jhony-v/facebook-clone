import Avatar from "@fb-components/common/Avatar";
import styled from "styled-components";

export const StreamWrapperVideoCard = styled.div<{ w?: string }>`
  width: ${(props) => props.w || "100%"};
  position: relative;
  margin: auto;
`;

export const AvatarStreaming = styled(Avatar).attrs({
  dimension: "50px"
})`
  border: 3px solid ${(props) => props.theme.colors.vgDanger10};
  padding: 3px;
`;

export const StreamWrapperMicroOptions = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  top: 10px;
  left: 10px;
  > * {
    margin-right: 5px;
  }
`;
