import ContainerChatTabs from "@fb-components/ContainerChatTabs";
import ContainerMainNavigator from "@fb-components/ContainerMainNavigator";
import LayoutsDrawer from "@fb-components/LayoutsDrawer";
import OptionsNavigationList from "@fb-components/OptionsNavigationList";
import Wrapper from "@fb-components/Wrapper";
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
