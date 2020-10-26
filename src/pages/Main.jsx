import React from "react";
import Navigation from "../components/Navigation";
import HeaderNavigation from "../components/HeaderNavigation";
import AccountControlSettings from "../components/AccountControlSettings";
import FacebookAvatar from "../components/FacebookAvatar";
import { ChatTabExample, ContactListExample, StoriesExample } from "../__examples__";
import LayoutsDrawer from "../components/LayoutsDrawer";
import Wrapper from "../components/Common/Wrapper";
import CreateNewPostExample from "../__examples__/CreateNewPost.example";
import NewsFeedExample from "../__examples__/NewsFeed.example";

function App() {
  return (
    <>
      <HeaderNavigation>
        <FacebookAvatar isFixed />
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
      <ChatTabExample/>
    </>
  );
}

export default App;