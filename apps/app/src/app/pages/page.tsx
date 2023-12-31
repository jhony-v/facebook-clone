import ContainerChatTabs from "@fb-containers/ContainerChatTabs";
import ContainerMainNavigator from "@fb-containers/ContainerMainNavigator";
import ContainerOptionsNavigation from "@fb-containers/ContainerOptionsNavigation";
import LayoutDrawerLeftRail from "@fb-components/layouts/LayoutsDrawer/LayoutDrawerLeftRail";
import LayoutDrawer from "@fb-components/layouts/LayoutsDrawer/LayoutDrawer";
import LayoutDrawerGridColumn from "@fb-components/layouts/LayoutsDrawer/LayoutDrawerGridColumn";
import PagesView from "@views/PagesView";

const Pages = () => (
  <ContainerMainNavigator>
    <LayoutDrawer>
      <LayoutDrawerGridColumn variant="left-rail fluid">
        <LayoutDrawerLeftRail compact>
          <ContainerOptionsNavigation />
        </LayoutDrawerLeftRail>
        <PagesView />
      </LayoutDrawerGridColumn>
    </LayoutDrawer>
    <ContainerChatTabs />
  </ContainerMainNavigator>
);

export default Pages;
