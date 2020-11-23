import { FC, memo } from "react";
import styled from "styled-components";
import { converMeasureCSSToNumber } from "@utils/transforms";
import { InstaStoryPosition } from "../../InstaConfig/config";
import ProgressStory from "../Atoms/ProgressStory";

const ProgressStoryWrapper = styled.div`
  position: absolute;
  top: ${InstaStoryPosition};
  left: ${InstaStoryPosition};
  width: calc(100% - ${converMeasureCSSToNumber(InstaStoryPosition) * 2}px);
  display: flex;
  align-items: center;
`;

type TimerStatusProgressStoryProps = {
  totalStories: number;
  duration: number;
  playing: boolean;
  currentIndexStory: number;
};
const TimerStatusProgressStory: FC<TimerStatusProgressStoryProps> = (props) => {
  return (
    <ProgressStoryWrapper>
      {[...Array(props.totalStories)].map((_, index) => {
        return (
          <ProgressStory
            key={index}
            duration={props.duration}
            playing={props.currentIndexStory === index && props.playing}
          />
        );
      })}
    </ProgressStoryWrapper>
  );
};

export default memo(TimerStatusProgressStory);
