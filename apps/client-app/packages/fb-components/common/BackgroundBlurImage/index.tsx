import { FCWithChildren } from "@utils/types";
import styled from "styled-components";

const BlurImage = styled.div<{ image?: string }>`
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.image});
  background-color: #000000;
  position: absolute;
  width: 100%;
  min-height: 100%;
  object-fit: cover;
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backdrop-filter: blur(18px);
    backdrop-filter: blur(18px);
    background-color: rgba(0, 0, 0, 0.4);
  }
`;

const BlurImageContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100%;
  position: relative;
`;

type BackgroundBlurImageProps = {
  image?: string;
};
const BackgroundBlurImage: FCWithChildren<BackgroundBlurImageProps> = ({
  children,
  image
}) => (
  <BlurImageContainer>
    <BlurImage image={image} />
    {children}
  </BlurImageContainer>
);

export default BackgroundBlurImage;
