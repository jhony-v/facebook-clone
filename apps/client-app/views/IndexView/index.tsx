import Wrapper from "@fb-components/common/Wrapper";
import ContainerGridStories from "@fb-containers/ContainerGridStories";
import ContainerGetNewsFeed from "@fb-containers/ContainerGetNewsFeed";
import ContainerCreateNewPost from "@fb-containers/ContainerCreateNewPost";
import LayoutDrawerStories from "@fb-components/layouts/LayoutsDrawer/LayoutDrawerStories";
import LayoutDrawerFeed from "@fb-components/layouts/LayoutsDrawer/LayoutDrawerFeed";

const IndexView = () => (
  <Wrapper>
    <LayoutDrawerStories>
      <ContainerGridStories />
    </LayoutDrawerStories>
    <LayoutDrawerFeed>
      <ContainerCreateNewPost />
      <ContainerGetNewsFeed />
    </LayoutDrawerFeed>
  </Wrapper>
);

export default IndexView;
