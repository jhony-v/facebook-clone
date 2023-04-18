import { memo, useEffect } from "react";
import Wrapper from "@fb-components/common/Wrapper";
import useProgressBarFromInterval from "@fb-hooks/useProgressBarFromInterval";
import styled from "styled-components";

const ProgressBase = styled.div`
  border-radius: 10px;
  height: 4px;
`;

const ProgressTrack = styled(ProgressBase)`
  width: 100%;
  background-color: rgba(220, 220, 220, 0.4);
`;

const ProgressThumb = styled(ProgressBase)`
  transition: width 0.3s linear;
  will-change: with;
  background-color: white;
`;

type ProgressStoryProps = {
  duration: number;
  playing?: boolean;
  onClick?: () => void;
};

const ProgressStory = ({ duration, playing, onClick }: ProgressStoryProps) => {
  const { progress } = useProgressBarFromInterval({ duration, playing });

  return (
    <Wrapper m="0 5px 0 0" w="100%">
      <ProgressTrack onClick={onClick}>
        <ProgressThumb style={{ width: `${progress}%` }} />
      </ProgressTrack>
    </Wrapper>
  );
};

export default memo(ProgressStory);
