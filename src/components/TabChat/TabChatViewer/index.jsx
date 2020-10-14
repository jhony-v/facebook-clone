import React from "react";
import FlexWrapper from "../../Common/FlexWrapper";
import ViewerInputSearch from "./ViewerInputSearch";
import ViewerTabsOptionSearchNavigator from "./ViewerTabsOptionSearchNavigator";


const TabChatViewer = () => {
  return <FlexWrapper direction="column">
    <ViewerInputSearch/>
    <ViewerTabsOptionSearchNavigator/>
  </FlexWrapper>;
};

export default TabChatViewer;
