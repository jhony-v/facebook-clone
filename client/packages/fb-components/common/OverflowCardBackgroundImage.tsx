import React, { FC } from "react";
import styled from "styled-components";

type RootStoryOverflowTypes = {
  w?: string;
  h?: string;
};
const RootStory = styled.div<RootStoryOverflowTypes>`
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  display: flex;
  background-color: #303030;
  width: ${({ w }) => w};
  height: ${({ h }) => h};
  margin: auto;
`;

const RootMainStory = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const RootStoryBodyBackground = styled.div`
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

const RootStoryBody = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;


const ImageStory = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  object-fit:cover;
`;

type OverflowCardBackgroundImage = {
  image?: string;
} & RootStoryOverflowTypes;
const OverflowCardBackgroundImage: FC<OverflowCardBackgroundImage> = ({
  children,
  image,
  w,
  h,
}) => {
  return (
    <RootStory w={w} h={h}>
      <RootMainStory>
        <ImageStory draggable="false" src={image} />
        <RootStoryBodyBackground />
        <RootStoryBody>
          {children}
        </RootStoryBody>
      </RootMainStory>
    </RootStory>
  );
};

OverflowCardBackgroundImage.defaultProps = {
  w: "300px",
  h: "520px",
};

export default OverflowCardBackgroundImage;
