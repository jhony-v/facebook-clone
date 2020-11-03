import LayoutsDrawer from '@fb-components/LayoutsDrawer'
import Wrapper from '@fb-components/Wrapper'
import ChatTabExample from "../../examples/ChatTab.example";
import ContainerMainNavigator from '@fb-containers/ContainerMainNavigator';
import ContainerGridStories from '@fb-containers/ContainerGridStories';
import ContainerOptionsNavigation from '@fb-containers/ContainerOptionsNavigation';
import ContainerConnectionChatList from '@fb-containers/ContainerConnectionChatList';
import ContainerGetNewsFeed from '@fb-containers/ContainerGetNewsFeed';

const IndexView = () => {
    return (
        <ContainerMainNavigator>
        <LayoutsDrawer.Drawer>
          <Wrapper>
            <LayoutsDrawer.Stories>
              <ContainerGridStories/>
            </LayoutsDrawer.Stories>
            <LayoutsDrawer.Feed>
                <ContainerGetNewsFeed/>
            </LayoutsDrawer.Feed>
          </Wrapper>
        </LayoutsDrawer.Drawer>
        <LayoutsDrawer.RightRail>
            <ContainerConnectionChatList/>
        </LayoutsDrawer.RightRail>
        <LayoutsDrawer.LeftRail>
          <ContainerOptionsNavigation/>
        </LayoutsDrawer.LeftRail>
        <ChatTabExample/>
      </ContainerMainNavigator>
      )
}

export default IndexView
