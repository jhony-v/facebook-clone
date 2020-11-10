import FlexWrapper from "@fb-components/FlexWrapper";
import styled from "styled-components";

export const ButtonPlayerContainer = styled(FlexWrapper)`
  border: 3px solid white;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  border-radius: 100%;
  margin: auto;
  position:absolute;
  top:0;
  bottom:0;
  left:0;
  right:0;
  font-size:3em;
`;


export const VideoPlayerContainer = styled.div`
  display:inline-block;
  position:relative;
`

export const VideoPlayer = styled.video<{ h?: string,w?:string,objectFit ?: string }>`
  object-fit:${props => props.objectFit};
  height: ${(props) => props.h || "180px"};
  width: ${props => props.w || "100%"};
  display:block;
`;
