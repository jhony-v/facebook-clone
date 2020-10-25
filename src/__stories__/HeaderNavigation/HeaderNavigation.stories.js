import React from "react";
import { HeaderNavigation, Navigation } from "../../components";
import AccountControlSettings from "../../components/AccountControlSettings";
import FacebookAvatar from "../../components/FacebookAvatar";

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
