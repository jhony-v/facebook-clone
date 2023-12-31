"use client";
import FlexWrapper from "@fb-components/common/FlexWrapper";
import Wrapper from "@fb-components/common/Wrapper";
import ListWatchVideoGlobals from "./components/ListWatchVideoGlobals";
import ContainerChatTabs from "@fb-containers/ContainerChatTabs";
import ContainerMainNavigator from "@fb-containers/ContainerMainNavigator";
import ContainerOptionsNavigation from "@fb-containers/ContainerOptionsNavigation";
import LayoutDrawerLeftRail from "@fb-components/layouts/LayoutsDrawer/LayoutDrawerLeftRail";
import LayoutDrawer from "@fb-components/layouts/LayoutsDrawer/LayoutDrawer";
import LayoutDrawerGridColumn from "@fb-components/layouts/LayoutsDrawer/LayoutDrawerGridColumn";

const WatchVideosView = () => (
  <ContainerMainNavigator>
    <LayoutDrawer>
      <LayoutDrawerGridColumn variant="left-rail fluid">
        <LayoutDrawerLeftRail compact>
          <ContainerOptionsNavigation />
        </LayoutDrawerLeftRail>
        <Wrapper />
        <FlexWrapper align="center" flexDirection="column">
          <Wrapper w="75%">
            <ListWatchVideoGlobals />
          </Wrapper>
        </FlexWrapper>
      </LayoutDrawerGridColumn>
    </LayoutDrawer>
    <ContainerChatTabs />
  </ContainerMainNavigator>
);

export default WatchVideosView;
