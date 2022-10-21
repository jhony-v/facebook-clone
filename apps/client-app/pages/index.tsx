import SEOMetaTag from "@fb-components/application/SEO/SEOMetaTag";
import LayoutDrawer from "@fb-components/layouts/LayoutsDrawer/LayoutDrawer";
import LayoutDrawerLeftRail from "@fb-components/layouts/LayoutsDrawer/LayoutDrawerLeftRail";
import LayoutDrawerRigthRail from "@fb-components/layouts/LayoutsDrawer/LayoutDrawerRigthRail";
import ContainerChatTabs from "@fb-containers/ContainerChatTabs";
import ContainerMainNavigator from "@fb-containers/ContainerMainNavigator";
import ContainerOnlineContactFriendsList from "@fb-containers/ContainerOnlineContactFriendsList";
import ContainerOptionsNavigation from "@fb-containers/ContainerOptionsNavigation";
import IndexView from "@views/IndexView";

export default function Index() {
  return (
    <ContainerMainNavigator>
      <SEOMetaTag mainTitle="Facebook" />
      <LayoutDrawer>
        <IndexView />
      </LayoutDrawer>
      <LayoutDrawerRigthRail>
        <ContainerOnlineContactFriendsList />
      </LayoutDrawerRigthRail>
      <LayoutDrawerLeftRail>
        <ContainerOptionsNavigation />
      </LayoutDrawerLeftRail>
      <ContainerChatTabs />
    </ContainerMainNavigator>
  );
}
