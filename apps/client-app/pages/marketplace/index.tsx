import ContainerChatTabs from "@fb-containers/ContainerChatTabs";
import ContainerMainNavigator from "@fb-containers/ContainerMainNavigator";
import ContainerOptionsNavigation from "@fb-containers/ContainerOptionsNavigation";
import MarketPlaceView from "@views/MarketPlaceView";
import LayoutDrawer from "@fb-components/layouts/LayoutsDrawer/LayoutDrawer";
import LayoutDrawerLeftRail from "@fb-components/layouts/LayoutsDrawer/LayoutDrawerLeftRail";
import LayoutDrawerGridColumn from "@fb-components/layouts/LayoutsDrawer/LayoutDrawerGridColumn";

export default function Marketplace() {
  return (
    <ContainerMainNavigator>
      <LayoutDrawer>
        <LayoutDrawerGridColumn variant="left-rail fluid">
          <LayoutDrawerLeftRail compact>
            <ContainerOptionsNavigation />
          </LayoutDrawerLeftRail>
          <MarketPlaceView />
        </LayoutDrawerGridColumn>
      </LayoutDrawer>
      <ContainerChatTabs />
    </ContainerMainNavigator>
  );
}
