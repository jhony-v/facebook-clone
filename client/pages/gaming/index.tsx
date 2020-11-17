import ContainerChatTabs from "@fb-components/ContainerChatTabs";
import ContainerMainNavigator from "@fb-components/ContainerMainNavigator";
import ContainerOptionsNavigation from "@fb-components/ContainerOptionsNavigation";
import LayoutsDrawer from "@fb-components/LayoutsDrawer";
import GamingView from "@views/GamingView";

export default function gaming() {
  return (
    <ContainerMainNavigator>
      <LayoutsDrawer.Drawer>
        <LayoutsDrawer.GridColumn variant="left-rail fluid">
          <LayoutsDrawer.LeftRail compact>
            <ContainerOptionsNavigation />
          </LayoutsDrawer.LeftRail>
          <GamingView />
        </LayoutsDrawer.GridColumn>
      </LayoutsDrawer.Drawer>
      <ContainerChatTabs />
    </ContainerMainNavigator>
  );
}
