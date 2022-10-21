import ContainerChatTabs from "@fb-containers/ContainerChatTabs";
import ContainerMainNavigator from "@fb-containers/ContainerMainNavigator";
import OptionsNavigationList from "@fb-components/layouts/OptionsNavigationList";
import Wrapper from "@fb-components/common/Wrapper";
import GroupsView from "@views/GroupsView";
import LayoutDrawer from "@fb-components/layouts/LayoutsDrawer/LayoutDrawer";
import LayoutDrawerLeftRail from "@fb-components/layouts/LayoutsDrawer/LayoutDrawerLeftRail";
import LayoutDrawerGridColumn from "@fb-components/layouts/LayoutsDrawer/LayoutDrawerGridColumn";

export default function Groups() {
  return (
    <ContainerMainNavigator>
      <LayoutDrawer>
        <Wrapper w="100%">
          <LayoutDrawerGridColumn variant="left-rail fluid">
            <LayoutDrawerLeftRail compact>
              <OptionsNavigationList />
            </LayoutDrawerLeftRail>
            <GroupsView />
          </LayoutDrawerGridColumn>
        </Wrapper>
      </LayoutDrawer>
      <ContainerChatTabs />
    </ContainerMainNavigator>
  );
}
