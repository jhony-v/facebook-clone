import React from "react";
import ReactDOM from "react-dom";

const className = "chat-tab-portal";
const chatPortal = document.createElement("div");

chatPortal.classList = className;

const ChatTabPortal = ({ children }) => {
  React.useEffect(() => {
      if(!document.querySelector(`.${className}`)) {
          document.body.appendChild(chatPortal);
      }
      return () => {
        document.querySelector(`.${className}`).remove();
      }
  }, []);

  return ReactDOM.createPortal(children, chatPortal);
};

export default ChatTabPortal;
