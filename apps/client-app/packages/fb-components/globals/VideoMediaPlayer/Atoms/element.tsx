import FlexWrapper from "@fb-components/common/FlexWrapper";
import styled from "styled-components";

export const ButtonPlayerContainer = styled(FlexWrapper)`
  border: 4px solid white;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border-radius: 100%;
  margin: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  font-size: 3em;
`;

export const VideoPlayerContainer = styled.div<{ h?: string; w?: string }>`
  display: flex;
  position: relative;
  height: ${(props) => props.h || "180px"};
  width: ${(props) => props.w || "100%"};
`;

export const VideoPlayer = styled.video<{ objectFit?: string }>`
  object-fit: ${(props) => props.objectFit};
  display: block;
  height: 100%;
  width: 100%;
`;
