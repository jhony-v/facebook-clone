"use client";
import ContainerGetNewsFeed from "@fb-containers/ContainerGetNewsFeed";
import LayoutDrawer from "@fb-components/layouts/LayoutsDrawer/LayoutDrawer";
import LayoutDrawerLeftRail from "@fb-components/layouts/LayoutsDrawer/LayoutDrawerLeftRail";
import LayoutDrawerGridColumn from "@fb-components/layouts/LayoutsDrawer/LayoutDrawerGridColumn";
import ContainerChatTabs from "@fb-containers/ContainerChatTabs";
import ContainerMainNavigator from "@fb-containers/ContainerMainNavigator";
import OptionsNavigationList from "@fb-components/layouts/OptionsNavigationList";
import Wrapper from "@fb-components/common/Wrapper";

const GroupsView = () => (
  <ContainerMainNavigator>
    <LayoutDrawer>
      <Wrapper w="100%">
        <LayoutDrawerGridColumn variant="left-rail fluid">
          <LayoutDrawerLeftRail compact>
            <OptionsNavigationList />
          </LayoutDrawerLeftRail>
          <Wrapper />
          <Wrapper m="auto" w="50%">
            <ContainerGetNewsFeed />
          </Wrapper>
        </LayoutDrawerGridColumn>
      </Wrapper>
    </LayoutDrawer>
    <ContainerChatTabs />
  </ContainerMainNavigator>
);

export default GroupsView;
