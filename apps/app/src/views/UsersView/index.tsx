"use client";
import ContainerAccountProfileBannerDetail from "@fb-containers/ContainerAccountProfileBannerDetail";
import Wrapper from "@fb-components/common/Wrapper";
import ContainerChatTabs from "@fb-containers/ContainerChatTabs";
import ContainerMainNavigator from "@fb-containers/ContainerMainNavigator";
import LayoutDrawer from "@fb-components/layouts/LayoutsDrawer/LayoutDrawer";

const UsersView = () => (
  <ContainerMainNavigator>
    <LayoutDrawer>
      <Wrapper w="100%">
        <ContainerAccountProfileBannerDetail />
      </Wrapper>
    </LayoutDrawer>
    <ContainerChatTabs />
  </ContainerMainNavigator>
);

export default UsersView;
