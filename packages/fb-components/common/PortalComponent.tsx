import React from "react";
import ReactDOM from "react-dom";

type PortalComponentProps = {
  children?: React.ReactNode;
  className?: string;
};

const PortalComponent = ({ children, className } : PortalComponentProps) => {
  const element = document.createElement("div");
  const classNameSelector = `.${className}`;

  element.classList.add(classNameSelector);
  element.dataset.testid = className;

  React.useEffect(() => {
    if (!document.querySelector(classNameSelector)) {
      document.body.appendChild(element);
    }
    return () => {
      document.querySelector(classNameSelector)?.remove();
    };
    // eslint-disable-next-line
  }, []);

  return ReactDOM.createPortal(children, element);
};

export default PortalComponent;
