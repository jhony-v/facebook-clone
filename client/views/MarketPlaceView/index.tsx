import ContainerMainNavigator from "@fb-components/ContainerMainNavigator";
import ContainerOptionsNavigation from "@fb-components/ContainerOptionsNavigation";
import Grid from "@fb-components/Grid";
import LayoutsDrawer from "@fb-components/LayoutsDrawer";
import MarketplaceCard from "@fb-components/MarketplaceCard";
import Wrapper from "@fb-components/Wrapper";
import ChatTabExample from "examples/ChatTab.example";
import faker from "faker";
import TextLabel from "@fb-components/TextLabel";

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
                <Grid repeatColumns={3} gap="15px">
                  {Array(20)
                    .fill(0)
                    .map((e, i) => (
                      <MarketplaceCard
                        key={i}
                        image={faker.random.image()}
                        price="S/35.00"
                        description="Celulares nuevos desde 440"
                        location="Comas, Lima"
                      />
                    ))}
                </Grid>
              </Wrapper>
            </Wrapper>
        </LayoutsDrawer.GridColumn>
      </LayoutsDrawer.Drawer>
      <ChatTabExample />
    </ContainerMainNavigator>
  );
};

export default MarketPlaceView;
