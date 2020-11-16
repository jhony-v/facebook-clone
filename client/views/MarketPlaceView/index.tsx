import ContainerMainNavigator from "@fb-components/ContainerMainNavigator";
import ContainerOptionsNavigation from "@fb-components/ContainerOptionsNavigation";
import LayoutsDrawer from "@fb-components/LayoutsDrawer";
import Wrapper from "@fb-components/Wrapper";
import ChatTabExample from "examples/ChatTab.example";
import TextLabel from "@fb-components/TextLabel";
import ContainerGetListProducts from "@fb-components/ContainerGetListProducts";

const MarketPlaceView = () => {
  return (
    <ContainerMainNavigator>
      <LayoutsDrawer.Drawer>
        <LayoutsDrawer.GridColumn variant="left-rail fluid">
            <LayoutsDrawer.LeftRail compact>
              <ContainerOptionsNavigation />
            </LayoutsDrawer.LeftRail>
            <Wrapper />
            <Wrapper m="auto">
              <Wrapper m="40px 0">
                <TextLabel weight textColor="vgTextBlack" textSize={600}>
                  Today's Picks for You
                </TextLabel>
              </Wrapper>
              <Wrapper w="65%">
                <ContainerGetListProducts/>
              </Wrapper>
            </Wrapper>
        </LayoutsDrawer.GridColumn>
      </LayoutsDrawer.Drawer>
      <ChatTabExample />
    </ContainerMainNavigator>
  );
};

export default MarketPlaceView;
