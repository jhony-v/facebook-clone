import styled from "styled-components";
import { converMeasureCSSToNumber } from "@utils/transforms";
import { InstaStoryPosition } from "../InstaConfig/config";
import ProgressStory from "../Atoms/ProgressStory";

const ProgressStoryWrapper = styled.div`
  position: absolute;
  top: ${InstaStoryPosition};
  left: ${InstaStoryPosition};
  width: calc(100% - ${converMeasureCSSToNumber(InstaStoryPosition) * 2}px);
  display: flex;
  align-items: center;
`;

const TimerStatusProgressStory = () => {
  return (
    <ProgressStoryWrapper>
      <ProgressStory percentage={100} />
      <ProgressStory percentage={100} />
      <ProgressStory percentage={10} />
    </ProgressStoryWrapper>
  );
};

export default TimerStatusProgressStory;
