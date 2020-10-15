import React, { lazy, Suspense } from "react";
import Spinner from "../../Common/Spinner";
import { StyledTabChatFillWrapper } from "../TabChatComponents/TabChatMainExpanded";
import ViewerInputSearch from "./ViewerInputSearch";
import ViewerTabsOptionSearchNavigator from "./ViewerTabsOptionSearchNavigator";

const AsyncListItems = lazy(() => import("./ViewListItems"));

const TabChatViewer = () => {
  return (
    <StyledTabChatFillWrapper>
      <ViewerInputSearch />
      <ViewerTabsOptionSearchNavigator initialId="friends">
        <ViewerTabsOptionSearchNavigator.Option
          optionId="friends"
          text="Friends"
        />
        <ViewerTabsOptionSearchNavigator.Option
          optionId="online"
          text="Online"
        />
      </ViewerTabsOptionSearchNavigator>
      <Suspense fallback={<Spinner />}>
        <AsyncListItems
          data={Array(10).fill({
            image:
              "https://cdn.pixabay.com/photo/2020/10/09/06/09/rabbit-5639615__340.jpg",
            text: "Mark Zuckerberk Facebook",
          })}
        />
      </Suspense>
    </StyledTabChatFillWrapper>
  );
};

export default TabChatViewer;
