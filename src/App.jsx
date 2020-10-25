import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import HeaderNavigation from "./components/HeaderNavigation";
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
