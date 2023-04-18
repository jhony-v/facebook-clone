import React from "react";
import useFetchImage from "@fb-hooks/useFetchImage";
import styled from "styled-components";

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
`;

const Image = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  object-fit: cover;
`;

const BackgroundGradient = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.4) 30%,
    transparent 80%,
    rgba(0, 0, 0, 0.4) 100%
  );
`;

type OverflowBackgroundImageProps = {
  image: string;
  onLoadingStatus?: (loading: boolean) => void;
} & React.HTMLAttributes<{}>;

const OverflowBackgroundImage = (props: OverflowBackgroundImageProps) => {
  const { image, onLoadingStatus, ...restProps } = props;
  const { image: src, status } = useFetchImage(image);

  React.useEffect(() => {
    const currentStatus = status === "LOADING";
    onLoadingStatus && onLoadingStatus(currentStatus);
  }, [status]);

  return (
    <ImageWrapper {...restProps}>
      <Image src={src} role="img" draggable="false" />
      <BackgroundGradient />
    </ImageWrapper>
  );
};

OverflowBackgroundImage.defaultProps = {
  onLoadingStatus: () => false
};

export default OverflowBackgroundImage;
