import { FC } from "react";
import styled from "styled-components";

const BlurImage = styled.div<{ image?: string }>`
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.image});
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
    -webkit-backdrop-filter: blur(15px);
    backdrop-filter: blur(15px);
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
const BackgroundBlurImage: FC<BackgroundBlurImageProps> = ({children, image}) => {
  return (
    <BlurImageContainer>
      <BlurImage image={image} />
      {children}
    </BlurImageContainer>
  );
};

export default BackgroundBlurImage;
