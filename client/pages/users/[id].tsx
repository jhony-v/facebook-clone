import ContainerChatTabs from "@fb-components/ContainerChatTabs";
import ContainerMainNavigator from "@fb-components/ContainerMainNavigator";
import LayoutsDrawer from "@fb-components/LayoutsDrawer";
import UsersView from "@views/UsersView";

export default function Users() {
  return (
    <ContainerMainNavigator>
      <LayoutsDrawer.Drawer>
        <UsersView />
      </LayoutsDrawer.Drawer>
      <ContainerChatTabs />
    </ContainerMainNavigator>
  );
}
