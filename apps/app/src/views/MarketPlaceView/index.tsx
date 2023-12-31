"use client";
import Wrapper from "@fb-components/common/Wrapper";
import TextLabel from "@fb-components/common/TextLabel";
import ContainerGetListProducts from "@fb-containers/ContainerGetListProducts";
import ContainerChatTabs from "@fb-containers/ContainerChatTabs";
import ContainerMainNavigator from "@fb-containers/ContainerMainNavigator";
import ContainerOptionsNavigation from "@fb-containers/ContainerOptionsNavigation";
import LayoutDrawer from "@fb-components/layouts/LayoutsDrawer/LayoutDrawer";
import LayoutDrawerLeftRail from "@fb-components/layouts/LayoutsDrawer/LayoutDrawerLeftRail";
import LayoutDrawerGridColumn from "@fb-components/layouts/LayoutsDrawer/LayoutDrawerGridColumn";

const MarketPlaceView = () => (
  <ContainerMainNavigator>
    <LayoutDrawer>
      <LayoutDrawerGridColumn variant="left-rail fluid">
        <LayoutDrawerLeftRail compact>
          <ContainerOptionsNavigation />
        </LayoutDrawerLeftRail>
        <Wrapper />
        <Wrapper m="auto">
          <Wrapper m="40px 0">
            <TextLabel weight textColor="vgTextBlack" textSize={600}>
              Today's Picks for You
            </TextLabel>
          </Wrapper>
          <Wrapper w="65%">
            <ContainerGetListProducts />
          </Wrapper>
        </Wrapper>
      </LayoutDrawerGridColumn>
    </LayoutDrawer>
    <ContainerChatTabs />
  </ContainerMainNavigator>
);

export default MarketPlaceView;
