import React, { lazy, Suspense, useCallback, useReducer } from "react";
import Spinner from "../../Common/Spinner";
import { StyledTabChatFillWrapper } from "../TabChatComponents/elements";
import ViewerSearchInput from "./ViewerSearchInput";
import ViewerTabOptions from "./ViewerTabOptions";
import RowItem from "./RowItem";

const AsyncListRowItems = lazy(() => import("./ViewerListRowItems"));

const initialState = {
  searching : false,
  data : Array(10).fill(0).map((e,i) => ({
    image: `https://source.unsplash.com/collection/${Math.floor(Math.random()*1000)}/1600x900`,
    text: "Mark Zuckerberk Facebook"+i,
    category : i % 2 === 0 ? "friends" : "online",
  })),
}

const reducer = (state,action) => {
  switch(action.type){
    case "TAB_SEARCH":
      let textValue = action.payload.value;
      let searching = textValue.trim().length > 0;
      return {
        ...state,
        searching : searching,
        data : state.data.filter(e => e.text.includes(textValue))
      }
    case "TAB_FILTER":
      let filterValue = action.payload.id;
      return {
        ...state,
        data : initialState.data.filter(e => e.category === filterValue)
      }
    default:
      return state
  }
}

const TabChatViewer = () => {
  const [ state, action ] = useReducer(reducer,initialState);

  const onOptionSelected = useCallback ( id => {
      action({type:"TAB_FILTER",payload: { id } });
  },[]);

  const onSearch = useCallback( event => {
    action({type:"TAB_SEARCH",payload:{value:event.target.value}});
  },[]);

  return (
    <StyledTabChatFillWrapper>
      <ViewerSearchInput onKeyUp={onSearch} />
      {!state.searching && (
        <ViewerTabOptions initialId="friends" onOptionSelected={onOptionSelected}>
          <ViewerTabOptions.Option optionId="friends" text="Friends"/>
          <ViewerTabOptions.Option optionId="online" text="Online"/>
        </ViewerTabOptions>
      )}
      
      <Suspense fallback={<Spinner />}>
        <AsyncListRowItems  
          data={state.data}
          render={(currentItem,index) => <RowItem  key={index} {...currentItem}  />}
        />
      </Suspense>
    </StyledTabChatFillWrapper>
  );
};

export default TabChatViewer;
