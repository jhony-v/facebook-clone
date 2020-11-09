import ContainerMainNavigator from "@fb-components/ContainerMainNavigator";
import LayoutsDrawer from "@fb-components/LayoutsDrawer";
import OptionsNavigationList from "@fb-components/OptionsNavigationList";
import Wrapper from "@fb-components/Wrapper";
import ChatTabExample from "examples/ChatTab.example";
import NewsFeedExample from "examples/NewsFeed.example";

const GroupsView = () => {
  return (
    <ContainerMainNavigator>
      <LayoutsDrawer.Drawer>
        <Wrapper w="100%">
          <LayoutsDrawer.GridColumn variant="left-rail fluid">
            <LayoutsDrawer.LeftRail compact>
              <OptionsNavigationList />
            </LayoutsDrawer.LeftRail>
            <Wrapper/>
            <Wrapper m="auto" w="50%"> 
                <NewsFeedExample/>
            </Wrapper>
          </LayoutsDrawer.GridColumn>
        </Wrapper>
      </LayoutsDrawer.Drawer>
      <ChatTabExample/>
    </ContainerMainNavigator>
  );
};

export default GroupsView;
