import ContainerChatTabs from "@fb-containers/ContainerChatTabs";
import ContainerMainNavigator from "@fb-containers/ContainerMainNavigator";
import ContainerOptionsNavigation from "@fb-containers/ContainerOptionsNavigation";
import LayoutsDrawer from "@fb-components/layouts/LayoutsDrawer";
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
