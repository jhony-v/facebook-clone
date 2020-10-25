import React from "react";
import { HeaderNavigation, Navigation } from "../../components";

export default {
  title: "HeaderNavigation/Default",
  component: HeaderNavigation,
};

export const Default = () => {
  return <HeaderNavigation>
      <Navigation/>
    </HeaderNavigation>;
};
