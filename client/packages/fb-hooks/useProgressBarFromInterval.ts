import { useEffect, useState } from "react";

type UseProgressBarFromIntervalProps = {
  duration?: number;
  playing?: boolean;
};

const useProgressBarFromInterval = (props: UseProgressBarFromIntervalProps) => {
  const { playing = false, duration = 5 } = props;
  const [progress, setProgress] = useState(0);

  const onResetProgress = () => {
    setProgress(0);
  }

  /**
   * Start progress if the state of playing property is true
   */
  useEffect(() => {
    if (playing) {
      let startTime: number | null = null;
      let fn: number | null = null;
      let millisecondsDuration : number = duration * 1000;
      let maxPercent : number = 100;
        
      let step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        let elapsedTime = timestamp - startTime;
        let progress = (elapsedTime / millisecondsDuration) * maxPercent;
        setProgress(progress);
        if (elapsedTime < millisecondsDuration) {
          requestAnimationFrame(step);
        }
      };

      fn = requestAnimationFrame(step);

      return () => {
        fn && cancelAnimationFrame(fn);
      };
    }
  }, [playing]);

  return {
    progress,
    onResetProgress
  };
};

export default useProgressBarFromInterval;
