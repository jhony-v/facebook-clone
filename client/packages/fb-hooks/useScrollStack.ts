import { MutableRefObject, useEffect, useRef } from "react";

type ScrollStackProps = {
  autoScroll?: boolean;
  duration?: number;
};

type DirectionMove = 1 | -1;

const useScrollStack = (props: ScrollStackProps) => {
  const { autoScroll = false, duration = 5 } = props;
  const ref = useRef() as MutableRefObject<HTMLDivElement>;

  const onMove = (direction: DirectionMove) => {
    const step = ref.current?.clientWidth / 2;
    ref.current.scrollTo({
      left: ref.current?.scrollLeft + step * direction,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (autoScroll) {
      const interval = setInterval(() => {
        let step = ref.current?.scrollLeft + ref.current?.clientWidth / 2;
        if (step >= ref.current?.scrollWidth / 2) {
          step = 0;
        }
        ref.current?.scrollTo({
          left: step,
          behavior: "smooth",
        });
      }, duration * 1000);
      return () => clearInterval(interval);
    }
  }, [ref, autoScroll, duration]);

  return {
    onMove,
    ref,
  };
};

export default useScrollStack;
