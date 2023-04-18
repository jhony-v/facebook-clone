import useFetchImage from "@fb-hooks/useFetchImage";
import React from "react";
import styled from "styled-components";
import OverflowBackgroundImage from "../../../../common/OverflowBackgroundImage";

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
  display: flex;
`;

const ImageStory = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  object-fit: cover;
`;

type OverflowCardBackgroundImage = {
  children?: React.ReactNode;
} & RootStoryOverflowTypes;

const OverflowCardStory = (props: OverflowCardBackgroundImage) => {
  const { children, w, h } = props;

  return (
    <RootStory w={w} h={h}>
      <RootMainStory>
        <RootStoryBody>{children}</RootStoryBody>
      </RootMainStory>
    </RootStory>
  );
};

export default OverflowCardStory;
