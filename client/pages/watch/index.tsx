import ContainerChatTabs from "@fb-containers/ContainerChatTabs";
import ContainerMainNavigator from "@fb-containers/ContainerMainNavigator";
import ContainerOptionsNavigation from "@fb-containers/ContainerOptionsNavigation";
import LayoutsDrawer from "@fb-components/layouts/LayoutsDrawer";
import WatchVideosView from "@views/WatchVideosView";

export default function Watch() {
  return (
    <ContainerMainNavigator>
      <LayoutsDrawer.Drawer>
        <LayoutsDrawer.GridColumn variant="left-rail fluid">
          <LayoutsDrawer.LeftRail compact>
            <ContainerOptionsNavigation />
          </LayoutsDrawer.LeftRail>
          <WatchVideosView/>
        </LayoutsDrawer.GridColumn>
      </LayoutsDrawer.Drawer>
      <ContainerChatTabs />
    </ContainerMainNavigator>
  );
}
