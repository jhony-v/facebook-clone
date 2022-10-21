import RoundButton from "@fb-components/common/RoundButton";
import styled from "styled-components";

export const StyledPreviewStoriesWrapper = styled.div`
  display: flex;
  > * {
    margin-right: 10px;
  }
`;

export const StyledCardOverflow = styled.div`
  overflow: hidden;
  height: 200px;
  width: 120px;
  border-radius: 10px;
  display: flex;
  align-items: stretch;
  flex-direction: column;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
  position: relative;
  background-color: ${(props) => props.theme.colors.vgBlackAlpha00};
  will-change: transform;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.05);
  }
`;

type StyledCardBackgroundImageProps = {
  image?: string;
};
export const StyledCardBackgroundImage = styled.div<StyledCardBackgroundImageProps>`
  background: linear-gradient(25deg, rgba(0, 0, 0, 0.6) 20%, transparent 100%),
    url(${(props) => props.image}) no-repeat center / cover;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const StyledUserButtonAdd = styled(RoundButton).attrs({
  dimension: "36px",
  colorIcon: "vgBlackAlpha00"
})`
  background-color: ${(props) => props.theme.colors.vgPrimary};
  position: absolute;
  bottom: calc(50% - 36px);
`;

export const StyledUserImageAdd = styled.img`
  height: 60%;
  width: 100%;
  object-fit: cover;
`;
