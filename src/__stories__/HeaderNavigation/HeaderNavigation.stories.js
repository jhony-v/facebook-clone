import React from "react";
import HeaderNavigation from "../../components/HeaderNavigation";
import AccountControlSettings from "../../components/AccountControlSettings";
import FacebookAvatar from "../../components/FacebookAvatar";
import Navigation from "../../components/Navigation";

export default {
  title: "HeaderNavigation/Default",
  component: HeaderNavigation,
};

export const Default = () => {
  return (
    <HeaderNavigation>
      <FacebookAvatar isFixed/>
      <Navigation />
      <AccountControlSettings />
    </HeaderNavigation>
  );
};
