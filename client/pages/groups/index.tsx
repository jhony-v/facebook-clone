import ContainerChatTabs from "@fb-containers/ContainerChatTabs";
import ContainerMainNavigator from "@fb-containers/ContainerMainNavigator";
import LayoutsDrawer from "@fb-components/layouts/LayoutsDrawer";
import OptionsNavigationList from "@fb-components/layouts/OptionsNavigationList";
import Wrapper from "@fb-components/common/Wrapper";
import GroupsView from "@views/GroupsView";

export default function Groups() {
  return (
    <ContainerMainNavigator>
      <LayoutsDrawer.Drawer>
        <Wrapper w="100%">
          <LayoutsDrawer.GridColumn variant="left-rail fluid">
            <LayoutsDrawer.LeftRail compact>
              <OptionsNavigationList />
            </LayoutsDrawer.LeftRail>
            <GroupsView/>
          </LayoutsDrawer.GridColumn>
        </Wrapper>
      </LayoutsDrawer.Drawer>
      <ContainerChatTabs />
    </ContainerMainNavigator>
  );
}
