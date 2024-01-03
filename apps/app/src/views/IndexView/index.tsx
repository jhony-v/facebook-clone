"use client";
import SEOMetaTag from "@fb-components/application/SEO/SEOMetaTag";
import LayoutDrawer from "@fb-components/layouts/LayoutsDrawer/LayoutDrawer";
import LayoutDrawerLeftRail from "@fb-components/layouts/LayoutsDrawer/LayoutDrawerLeftRail";
import LayoutDrawerRigthRail from "@fb-components/layouts/LayoutsDrawer/LayoutDrawerRigthRail";
import ContainerChatTabs from "@fb-containers/ContainerChatTabs";
import ContainerMainNavigator from "@fb-containers/ContainerMainNavigator";
import ContainerOnlineContactFriendsList from "@fb-containers/ContainerOnlineContactFriendsList";
import ContainerOptionsNavigation from "@fb-containers/ContainerOptionsNavigation";
import Wrapper from "@fb-components/common/Wrapper";
import ContainerGridStories from "@fb-containers/ContainerGridStories";
import ContainerGetNewsFeed from "@fb-containers/ContainerGetNewsFeed";
import ContainerCreateNewPost from "@fb-containers/ContainerCreateNewPost";
import LayoutDrawerStories from "@fb-components/layouts/LayoutsDrawer/LayoutDrawerStories";
import LayoutDrawerFeed from "@fb-components/layouts/LayoutsDrawer/LayoutDrawerFeed";

const IndexView = () => (
  <ContainerMainNavigator>
    <SEOMetaTag mainTitle="Facebook" />
    <LayoutDrawer>
      <Wrapper>
        <LayoutDrawerStories>
          <ContainerGridStories />
        </LayoutDrawerStories>
        <LayoutDrawerFeed>
          <ContainerCreateNewPost />
          <ContainerGetNewsFeed />
        </LayoutDrawerFeed>
      </Wrapper>
    </LayoutDrawer>
    <LayoutDrawerRigthRail>
      <ContainerOnlineContactFriendsList />
    </LayoutDrawerRigthRail>
    <LayoutDrawerLeftRail>
      <ContainerOptionsNavigation />
    </LayoutDrawerLeftRail>
    <ContainerChatTabs />
  </ContainerMainNavigator>
);

export default IndexView;
