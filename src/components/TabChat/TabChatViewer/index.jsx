import React, { lazy, Suspense, useCallback, useState } from "react";
import Spinner from "../../Common/Spinner";
import { StyledTabChatFillWrapper } from "../TabChatComponents/TabChatMainExpanded";
import ViewerInputSearch from "./ViewerInputSearch";
import ViewerTabsOptionSearchNavigator from "./ViewerTabsOptionSearchNavigator";
import RowItem from "./RowItem";

const AsyncListRowItems = lazy(() => import("./ViewListRowItems"));

const TabChatViewer = () => {
  const [ data , setData ] = useState([]);
  const onOptionSelected = useCallback ( id => {
      setData(Array(10).fill({
        image: `https://source.unsplash.com/collection/${Math.floor(Math.random()*1000)}/1600x900`,
        text: "Mark Zuckerberk Facebook"+id,
      }));
  },[]);

  return (
    <StyledTabChatFillWrapper>
      <ViewerInputSearch />
      <ViewerTabsOptionSearchNavigator initialId="friends" onOptionSelected={onOptionSelected}>
        <ViewerTabsOptionSearchNavigator.Option optionId="friends" text="Friends"/>
        <ViewerTabsOptionSearchNavigator.Option optionId="online" text="Online"/>
      </ViewerTabsOptionSearchNavigator>
      <Suspense fallback={<Spinner />}>
        <AsyncListRowItems  
          data={data}
          render={(currentItem,index) => (
            <RowItem  key={index} {...currentItem}  />
          )}
        />
      </Suspense>
    </StyledTabChatFillWrapper>
  );
};

export default TabChatViewer;
