import ContainerChatTabs from "@fb-containers/ContainerChatTabs";
import ContainerMainNavigator from "@fb-containers/ContainerMainNavigator";
import ContainerOptionsNavigation from "@fb-containers/ContainerOptionsNavigation";
import WatchVideosView from "@views/WatchVideosView";
import LayoutDrawerLeftRail from "@fb-components/layouts/LayoutsDrawer/LayoutDrawerLeftRail";
import LayoutDrawer from "@fb-components/layouts/LayoutsDrawer/LayoutDrawer";
import LayoutDrawerGridColumn from "@fb-components/layouts/LayoutsDrawer/LayoutDrawerGridColumn";

export default function Watch() {
  return (
    <ContainerMainNavigator>
      <LayoutDrawer>
        <LayoutDrawerGridColumn variant="left-rail fluid">
          <LayoutDrawerLeftRail compact>
            <ContainerOptionsNavigation />
          </LayoutDrawerLeftRail>
          <WatchVideosView />
        </LayoutDrawerGridColumn>
      </LayoutDrawer>
      <ContainerChatTabs />
    </ContainerMainNavigator>
  );
}
