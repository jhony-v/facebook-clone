import React from "react";
import Navigation from "../components/Navigation";
import HeaderNavigation from "../components/HeaderNavigation";
import AccountControlSettings from "../components/AccountControlSettings";
import { ChatTabExample, ContactListExample, StoriesExample } from "../__examples__";
import LayoutsDrawer from "../components/LayoutsDrawer";
import Wrapper from "../components/Common/Wrapper";
import CreateNewPostExample from "../__examples__/CreateNewPost.example";
import NewsFeedExample from "../__examples__/NewsFeed.example";
import OptionsNavigationList from "../components/OptionsNavigationList";
import RootSearchEngine from "../components/RootSearchEngine";

function App() {
  return (
    <>
      <HeaderNavigation>
        <RootSearchEngine/>
        <Navigation />
        <AccountControlSettings />
      </HeaderNavigation>
      <LayoutsDrawer.Drawer>
        <Wrapper>
          <LayoutsDrawer.Stories>
            <StoriesExample/>
          </LayoutsDrawer.Stories>
          <LayoutsDrawer.Feed>
              <CreateNewPostExample/>
              <NewsFeedExample/>
          </LayoutsDrawer.Feed>
        </Wrapper>
      </LayoutsDrawer.Drawer>
      <LayoutsDrawer.RightRail>
          <ContactListExample/>
      </LayoutsDrawer.RightRail>
      <LayoutsDrawer.LeftRail>
        <OptionsNavigationList/>
      </LayoutsDrawer.LeftRail>
      <ChatTabExample/>
    </>
  );
}

export default App;