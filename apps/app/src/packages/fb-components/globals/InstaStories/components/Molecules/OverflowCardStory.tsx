import React from "react";
import styled from "styled-components";

type RootStoryOverflowTypes = {
  $w?: string;
  $h?: string;
};
const RootStory = styled.div<RootStoryOverflowTypes>`
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  display: flex;
  background-color: #303030;
  width: ${({ $w }) => $w};
  height: ${({ $h }) => $h};
  margin: auto;
`;

const RootMainStory = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;



const RootStoryBody = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
`;


type OverflowCardBackgroundImage = {
  children?: React.ReactNode;
} & RootStoryOverflowTypes;

const OverflowCardStory = (props: OverflowCardBackgroundImage) => {
  const { children, $w, $h } = props;

  return (
    <RootStory $w={$w} $h={$h}>
      <RootMainStory>
        <RootStoryBody>{children}</RootStoryBody>
      </RootMainStory>
    </RootStory>
  );
};

export default OverflowCardStory;
