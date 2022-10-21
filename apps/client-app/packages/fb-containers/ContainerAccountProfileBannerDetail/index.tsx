import React from "react";
import AccountNavigator from "./AccountNavigator";
import MainWrapperAccountProfile from "./elements";
import PreviewProfile from "./PreviewProfile";
import PreviewStateOfNavigatorSelected from "./PreviewStateOfNavigatorSelected";

const ContainerAccountProfileBannerDetail = () => (
  <MainWrapperAccountProfile>
    <PreviewProfile>
      <AccountNavigator />
    </PreviewProfile>
    <PreviewStateOfNavigatorSelected />
  </MainWrapperAccountProfile>
);

export default ContainerAccountProfileBannerDetail;
