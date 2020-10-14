import React from "react";
import FlexWrapper from "../../Common/FlexWrapper";
import ViewerInputSearch from "./ViewerInputSearch";
import ViewerTabsOptionSearchNavigator from "./ViewerTabsOptionSearchNavigator";
import ViewListItems from "./ViewListItems";


const TabChatViewer = () => {
  return <FlexWrapper direction="column">
    <ViewerInputSearch/>
    <ViewerTabsOptionSearchNavigator/>
    <ViewListItems/>
  </FlexWrapper>;
};

export default TabChatViewer;
