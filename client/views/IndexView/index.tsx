import LayoutsDrawer from "@fb-components/LayoutsDrawer";
import Wrapper from "@fb-components/Wrapper";
import ContainerGridStories from "@fb-containers/ContainerGridStories";
import ContainerOptionsNavigation from "@fb-containers/ContainerOptionsNavigation";
import ContainerGetNewsFeed from "@fb-containers/ContainerGetNewsFeed";
import ContainerOnlineContactFriendsList from "@fb-components/ContainerOnlineContactFriendsList";

const IndexView = () => {
  return (
    <>
      <LayoutsDrawer.Drawer>
        <Wrapper>
          <LayoutsDrawer.Stories>
            <ContainerGridStories />
          </LayoutsDrawer.Stories>
          <LayoutsDrawer.Feed>
            <ContainerGetNewsFeed />
          </LayoutsDrawer.Feed>
        </Wrapper>
      </LayoutsDrawer.Drawer>
      <LayoutsDrawer.RightRail>
        <ContainerOnlineContactFriendsList />
      </LayoutsDrawer.RightRail>
      <LayoutsDrawer.LeftRail>
        <ContainerOptionsNavigation />
      </LayoutsDrawer.LeftRail>
    </>
  );
};

export default IndexView;
