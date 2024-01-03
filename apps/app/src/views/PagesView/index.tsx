"use client";

import Grid from "@fb-components/common/Grid";
import TextLabel from "@fb-components/common/TextLabel";
import Wrapper from "@fb-components/common/Wrapper";
import SuggestedPageItemCard from "@fb-components/globals/SuggestedPageItemCard";
import { faker } from "@faker-js/faker";
import ContainerChatTabs from "@fb-containers/ContainerChatTabs";
import ContainerMainNavigator from "@fb-containers/ContainerMainNavigator";
import ContainerOptionsNavigation from "@fb-containers/ContainerOptionsNavigation";
import LayoutDrawerLeftRail from "@fb-components/layouts/LayoutsDrawer/LayoutDrawerLeftRail";
import LayoutDrawer from "@fb-components/layouts/LayoutsDrawer/LayoutDrawer";
import LayoutDrawerGridColumn from "@fb-components/layouts/LayoutsDrawer/LayoutDrawerGridColumn";


const PagesView = () => (
  <ContainerMainNavigator>
  <LayoutDrawer>
    <LayoutDrawerGridColumn variant="left-rail fluid">
      <LayoutDrawerLeftRail $compact>
        <ContainerOptionsNavigation />
      </LayoutDrawerLeftRail>
      <Wrapper />
    <Wrapper $w="70%" $m="auto">
      <Wrapper $m="40px 0">
        <TextLabel $weight $textColor="vgTextBlack" $textSize={600}>
          Suggested for your
        </TextLabel>
      </Wrapper>
      <Wrapper>
        <Grid $repeatColumns={2} $gap="15px">
          {Array(10)
            .fill(0)
            .map((e, i) => (
              <SuggestedPageItemCard
                key={i}
                image={faker.image.url()}
                avatar={faker.image.url()}
                liked
                likes={40}
                category="Software"
                name="Club de Programación"
              />
            ))}
        </Grid>
      </Wrapper>
    </Wrapper>
    </LayoutDrawerGridColumn>
  </LayoutDrawer>
  <ContainerChatTabs />
</ContainerMainNavigator>
);

export default PagesView;
