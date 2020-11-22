import Wrapper from "@fb-components/common/Wrapper";
import { memo, useEffect, useState } from "react";
import styled from "styled-components";

const ProgressBase = styled.div`
  border-radius: 10px;
  height: 4px;
`;

const ProgressTrack = styled(ProgressBase)`
  width: 100%;
  background-color: rgba(220, 220, 220, 0.4);
`;

const ProgressThumb = styled(ProgressBase)<{ w?: number; duration?: number }>`
  width: ${(props) => props.w}%;
  transition: width 1s linear;
  will-change: with;
  background-color: white;
`;

type ProgressStoryProps = {
  duration: number;
};

const ProgressStory = ({ duration }: ProgressStoryProps) => {

  const [ w , setWidth ] = useState(0);
  const [ playing , setPlaying ] = useState(true);

  useEffect(() => {
    if(playing) {
      let timeStart : number = 0;
      let fn : number | null  = null;
      let stepInterval =  step => {
        if(!timeStart) timeStart = step;
        let currentTime = step - timeStart;
        setWidth(currentTime);
        if(currentTime < ( duration * 1000)) {
          fn = requestAnimationFrame(stepInterval);
        }
      } 
      fn = requestAnimationFrame(stepInterval);
      return () => {
        fn && cancelAnimationFrame(fn);
      }

    }
  },[playing,w]);


  useEffect(() => {
      // console.log(Math.min(w / duration * 1000,duration * 1000))
      // if(w >= 100 ) setPlaying(false);
  },[w])


  return (
    <Wrapper m="0 5px 0 0" w="100%">
      <ProgressTrack>
        <ProgressThumb w={w} duration={duration} />
      </ProgressTrack>
    </Wrapper>
  );
};

export default memo(ProgressStory);
