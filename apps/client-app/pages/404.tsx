import ContainerMainNavigator from "@fb-containers/ContainerMainNavigator";
import ContainerChatTabs from "@fb-containers/ContainerChatTabs";
import LayoutDrawerAbsoluteFullScreen from "@fb-components/layouts/LayoutsDrawer/LayoutDrawerAbsoluteFullScreen";
import Error4040View from "@views/Error404View";

export default function ErrorPage() {
  return (
    <ContainerMainNavigator>
      <LayoutDrawerAbsoluteFullScreen>
        <Error4040View />
      </LayoutDrawerAbsoluteFullScreen>
      <ContainerChatTabs />
    </ContainerMainNavigator>
  );
}
