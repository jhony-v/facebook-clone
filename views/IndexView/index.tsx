import AccountControlSettings from '@fb-components/AccountControlSettings'
import HeaderNavigation from '@fb-components/HeaderNavigation'
import LayoutsDrawer from '@fb-components/LayoutsDrawer'
import Navigation from '@fb-components/Navigation'
import RootSearchEngine from '@fb-components/RootSearchEngine'
import Wrapper from '@fb-components/Wrapper'
import StoriesExample from "../../examples/Stories.example"
import CreateNewPostExample from "../../examples/CreateNewPost.example"
import NewsFeedExample from "../../examples/NewsFeed.example"
import OptionsNavigationList from '@fb-components/OptionsNavigationList'
import ChatTabExample from "../../examples/ChatTab.example";
import ContactListExample from "../../examples/ContactList.example";

const IndexView = () => {
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
      )
}

export default IndexView
