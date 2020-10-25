import React from "react";
import "./App.css";
import { HeaderNavigation, Navigation } from "./components";
import AccountControlSettings from "./components/AccountControlSettings";
import FacebookAvatar from "./components/FacebookAvatar";
import { ChatTabExample, ContactListExample } from "./__examples__";

function App() {
  return (
    <div>
      <HeaderNavigation>
        <FacebookAvatar isFixed />
        <Navigation />
        <AccountControlSettings />
      </HeaderNavigation>
      <ChatTabExample/>
      <ContactListExample/>
    </div>
  );
}

export default App;
