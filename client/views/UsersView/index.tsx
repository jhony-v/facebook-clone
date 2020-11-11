import ContainerAccountProfileBannerDetail from "@fb-components/ContainerAccountProfileBannerDetail";
import ContainerMainNavigator from "@fb-components/ContainerMainNavigator";
import LayoutsDrawer from "@fb-components/LayoutsDrawer";
import Wrapper from "@fb-components/Wrapper";
import ChatTabExample from "examples/ChatTab.example";

const UsersView = () => {
  return (
    <ContainerMainNavigator>
      <LayoutsDrawer.Drawer>
        <Wrapper w="100%">
          <ContainerAccountProfileBannerDetail/>
        </Wrapper>
      </LayoutsDrawer.Drawer>
      <ChatTabExample/>
    </ContainerMainNavigator>
  );
};

export default UsersView;
