import React from "react";
import ReactDOM from "react-dom";

const className = "chat-tab-portal";
const chatPortal = document.createElement("div");
const classNameSelector = `.${className}`;
chatPortal.classList = className;

const ChatTabPortal = ({ children }) => {
  React.useEffect(() => {
      if(!document.querySelector(classNameSelector)) {
          document.body.appendChild(chatPortal);
      }
      return () => {
        document.querySelector(classNameSelector).remove();
      }
  }, []);

  return ReactDOM.createPortal(children, chatPortal);
};

export default ChatTabPortal;
