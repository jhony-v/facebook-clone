import ContainerChatTabs from "@fb-containers/ContainerChatTabs";
import ContainerMainNavigator from "@fb-containers/ContainerMainNavigator";
import LayoutsDrawer from "@fb-components/layouts/LayoutsDrawer";
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
