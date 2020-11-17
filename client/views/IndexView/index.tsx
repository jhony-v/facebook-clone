import LayoutsDrawer from "@fb-components/layouts/LayoutsDrawer";
import Wrapper from "@fb-components/common/Wrapper";
import ContainerGridStories from "@fb-containers/ContainerGridStories";
import ContainerOptionsNavigation from "@fb-containers/ContainerOptionsNavigation";
import ContainerGetNewsFeed from "@fb-containers/ContainerGetNewsFeed";
import ContainerOnlineContactFriendsList from "@fb-containers/ContainerOnlineContactFriendsList";
import ContainerCreateNewPost from "@fb-containers/ContainerCreateNewPost";

const IndexView = () => {
  return (
    <>
      <LayoutsDrawer.Drawer>
        <Wrapper>
          <LayoutsDrawer.Stories>
            <ContainerGridStories />
          </LayoutsDrawer.Stories>
          <LayoutsDrawer.Feed>
            <ContainerCreateNewPost/>
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
