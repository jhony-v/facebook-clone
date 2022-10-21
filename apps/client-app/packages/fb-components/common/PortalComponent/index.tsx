import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

type PortalComponentProps = {
  children?: React.ReactNode;
  className?: string;
};

const PortalComponent = ({ children, className }: PortalComponentProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isMounted, setMounted] = useState(false);

  useEffect(() => {
    const element = document.createElement("div");
    element.classList.add(className || "");
    element.dataset.testid = className;
    if (!document.querySelector(`.${className}`)) {
      document.body.appendChild(element);
      ref.current = element;
    }
    setMounted(true);
    return () => {
      ref.current?.remove();
    };
    // eslint-disable-next-line
  }, []);

  return isMounted && ref.current
    ? ReactDOM.createPortal(children, ref.current)
    : null;
};

export default PortalComponent;
