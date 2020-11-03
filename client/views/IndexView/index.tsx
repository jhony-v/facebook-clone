import LayoutsDrawer from '@fb-components/LayoutsDrawer'
import Wrapper from '@fb-components/Wrapper'
import ChatTabExample from "../../examples/ChatTab.example";
import ContainerMainNavigator from '@fb-components/ContainerMainNavigator';
import ContainerGridStories from '@fb-components/ContainerGridStories';
import ContainerOptionsNavigation from '@fb-components/ContainerOptionsNavigation';
import ContainerConnectionChatList from '@fb-components/ContainerConnectionChatList';
import ContainerGetNewsFeed from '@fb-components/ContainerGetNewsFeed';


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
