import React from "react";
import ReactDOM from "react-dom";

const PortalComponent = ({ children, className }) => {
  const element = document.createElement("div");
  const classNameSelector = `.${className}`;
  
  element.classList = className;
  element.dataset.testid = className;

  React.useEffect(() => {
    if (!document.querySelector(classNameSelector)) {
      document.body.appendChild(element);
    }
    return () => {
      document.querySelector(classNameSelector).remove();
    };
  }, []);

  return ReactDOM.createPortal(children, element);
};

export default PortalComponent;
