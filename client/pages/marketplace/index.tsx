import ContainerChatTabs from "@fb-components/ContainerChatTabs";
import ContainerMainNavigator from "@fb-components/ContainerMainNavigator";
import ContainerOptionsNavigation from "@fb-components/ContainerOptionsNavigation";
import LayoutsDrawer from "@fb-components/LayoutsDrawer";
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
