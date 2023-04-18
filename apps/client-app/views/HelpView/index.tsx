import React from "react";
import Content from "./components/Content";
import MainLayout from "./layouts/MainLayout";
import HelpHeaderNavigator from "./sections/HelpHeaderNavigator/HelpHeaderNavigator";
import HelpTopicsPreview from "./sections/HelpTopicsPreview/HelpTopicsPreview";
import helpStore from "./store/helpStore";

const HelpView = () => (
  <helpStore.Provider>
    <MainLayout>
      <HelpHeaderNavigator />
      <Content>
        <HelpTopicsPreview />
      </Content>
    </MainLayout>
  </helpStore.Provider>
);

export default HelpView;
