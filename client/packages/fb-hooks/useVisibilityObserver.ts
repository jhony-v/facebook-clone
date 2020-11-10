import { useEffect, useState } from "react";

export default function useVisibilityObserver( options: IntersectionObserverInit = {} ) {
  const [element, setElement] = useState<Element>();
  const [visibility, setVisibility] = useState<boolean>(false);

  useEffect(() => {
    const onIntersection: IntersectionObserverCallback = ([entry]) => {
      setVisibility(entry.isIntersecting);
    };
    const observer : IntersectionObserver = new IntersectionObserver(onIntersection, options);

    element && observer.observe(element);

    return () => element &&  observer.unobserve(element);
  }, [element,visibility]);

  return {
    visibility,
    setElement
  };

}