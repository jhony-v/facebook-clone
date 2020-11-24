import ContainerChatTabs from "@fb-containers/ContainerChatTabs";
import ContainerMainNavigator from "@fb-containers/ContainerMainNavigator";
import UsersView from "@views/UsersView";
import LayoutDrawer from "@fb-components/layouts/LayoutsDrawer/LayoutDrawer";

export default function Users() {
  return (
    <ContainerMainNavigator>
      <LayoutDrawer>
        <UsersView />
      </LayoutDrawer>
      <ContainerChatTabs />
    </ContainerMainNavigator>
  );
}
