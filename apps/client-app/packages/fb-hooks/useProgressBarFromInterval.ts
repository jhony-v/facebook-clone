import { useEffect, useState } from "react";

type UseProgressBarFromIntervalProps = {
  duration: number;
  playing?: boolean;
};

const useProgressBarFromInterval = ({
  playing,
  duration
}: UseProgressBarFromIntervalProps) => {
  const [progress, setProgress] = useState(0);
  const onResetProgress = () => {
    setProgress(0);
  };

  /**
   * Start progress if the state of playing property is true
   */
  useEffect(() => {
    if (playing) {
      let startTime: number | null = null;
      let fn: number | null = null;
      const millisecondsDuration: number = duration * 1000;
      const maxPercent = 100;
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const elapsedTime = timestamp - startTime;
        const currentProgress =
          (elapsedTime / millisecondsDuration) * maxPercent;
        setProgress(currentProgress);
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
