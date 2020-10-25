import React from "react";
import { HeaderNavigation, Navigation } from "../../components";
import AccountControlSettings from "../../components/AccountControlSettings";

export default {
  title: "HeaderNavigation/Default",
  component: HeaderNavigation,
};

export const Default = () => {
  return <HeaderNavigation>
      <Navigation/>
      <AccountControlSettings/>
    </HeaderNavigation>;
};
