import Wrapper from "@fb-components/common/Wrapper";
import { memo } from "react";
import styled from "styled-components";

const ProgressBase = styled.div`
  border-radius: 10px;
  height: 4px;
`;

const ProgressTrack = styled(ProgressBase)`
  width: 100%;
  background-color: rgba(220, 220, 220, 0.4);
`;

const ProgressThumb = styled(ProgressBase)<{ w?: number }>`
  width: ${(props) => props.w}%;
  background-color: white;
`;

type ProgressStoryProps = {
  percentage?: number;
};
const ProgressStory = (props: ProgressStoryProps) => {
  return (
    <Wrapper m="0 5px 0 0" w="100%">
      <ProgressTrack>
        <ProgressThumb w={props.percentage} />
      </ProgressTrack>
    </Wrapper>
  );
};

export default memo(ProgressStory);
