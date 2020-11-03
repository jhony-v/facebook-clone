import AccountControlSettings from "@fb-components/AccountControlSettings";
import HeaderNavigation from "@fb-components/HeaderNavigation";
import Navigation from "@fb-components/Navigation";
import RootSearchEngine from "@fb-components/RootSearchEngine";
import React, { FC } from "react";

const ContainerMainNavigator: FC = ({ children }) => {
  return (
    <>
      <HeaderNavigation>
        <RootSearchEngine />
        <Navigation />
        <AccountControlSettings />
      </HeaderNavigation>
      {children}
    </>
  );
};

export default ContainerMainNavigator;
