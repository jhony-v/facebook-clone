import { useEffect, useState } from "react";

type VisibilityObserverProps = {
  autoDisconnect?: boolean;
} & IntersectionObserverInit;

export default function useVisibilityObserver(
  options: VisibilityObserverProps = {}
) {
  const [element, setElement] = useState<Element | null>(null);
  const [visibility, setVisibility] = useState<boolean>(false);

  useEffect(() => {
    /**
     * Event to observer a element intersecting
     */
    const onIntersection: IntersectionObserverCallback = ([entry]) => {
      setVisibility(entry.isIntersecting);
      if (options.autoDisconnect && entry.isIntersecting) {
        observer.disconnect();
      }
    };
    const observer: IntersectionObserver = new IntersectionObserver(
      onIntersection,
      options
    );

    element && observer.observe(element);

    return () => {
      element && observer.unobserve(element);
    };
  }, [element, visibility]);

  return {
    visibility,
    setElement
  };
}
