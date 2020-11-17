import ContainerChatTabs from "@fb-containers/ContainerChatTabs";
import ContainerMainNavigator from "@fb-containers/ContainerMainNavigator";
import ContainerOptionsNavigation from "@fb-containers/ContainerOptionsNavigation";
import LayoutsDrawer from "@fb-components/layouts/LayoutsDrawer";
import MarketPlaceView from "@views/MarketPlaceView";

export default function Marketplace() {
  return(
    <ContainerMainNavigator>
    <LayoutsDrawer.Drawer>
      <LayoutsDrawer.GridColumn variant="left-rail fluid">
        <LayoutsDrawer.LeftRail compact>
          <ContainerOptionsNavigation />
        </LayoutsDrawer.LeftRail>
        <MarketPlaceView/>
      </LayoutsDrawer.GridColumn>
      </LayoutsDrawer.Drawer>
      <ContainerChatTabs/>
    </ContainerMainNavigator>
  )
}
