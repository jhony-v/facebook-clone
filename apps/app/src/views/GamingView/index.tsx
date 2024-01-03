"use client";
import ContainerChatTabs from "@fb-containers/ContainerChatTabs";
import ContainerMainNavigator from "@fb-containers/ContainerMainNavigator";
import ContainerOptionsNavigation from "@fb-containers/ContainerOptionsNavigation";
import LayoutDrawer from "@fb-components/layouts/LayoutsDrawer/LayoutDrawer";
import LayoutDrawerLeftRail from "@fb-components/layouts/LayoutsDrawer/LayoutDrawerLeftRail";
import LayoutDrawerGridColumn from "@fb-components/layouts/LayoutsDrawer/LayoutDrawerGridColumn";
import PreviewStreamByUserProfileCard from "@fb-components/globals/PreviewStreamByUserProfileCard";
import PreviewStreamWatchVideoCard from "@fb-components/globals/PreviewStreamWatchVideoCard";
import ScrollingSlider from "@fb-components/globals/ScrollingSlider";
import Wrapper from "@fb-components/common/Wrapper";
import { faker } from "@faker-js/faker";

const GamingView = () => (
  <ContainerMainNavigator>
    <LayoutDrawer>
      <LayoutDrawerGridColumn variant="left-rail fluid">
        <LayoutDrawerLeftRail $compact>
          <ContainerOptionsNavigation />
        </LayoutDrawerLeftRail>
        <Wrapper />
        <Wrapper $p="40px">
          <ScrollingSlider title="Suggested live now">
            {Array(20)
              .fill(0)
              .map((e, i) => (
                <Wrapper key={i} $w="310px" $m="0 10px 0 0">
                  <PreviewStreamWatchVideoCard
                    poster={faker.image.url()}
                    live
                    totalViews={5}
                    detailStream={{
                      avatar: faker.image.url(),
                      detail: "3D Juegos - Fortnite",
                      title: "Cordinando una nueva victoria en Warzone"
                    }}
                  />
                </Wrapper>
              ))}
          </ScrollingSlider>
          <ScrollingSlider title="Popular games">
            {Array(20)
              .fill(0)
              .map((e, i) => (
                <Wrapper key={i} $w="180px" $m="0 10px 0 0">
                  <PreviewStreamByUserProfileCard
                    description="oeapfje"
                    title="AmogUs Game by Juan"
                    image={faker.image.url()}
                    stringAvatars={[
                      faker.image.url(),
                      faker.image.url(),
                      faker.image.url(),
                      faker.image.url()
                    ]}
                    textDetail="140 followers"
                    following={false}
                  />
                </Wrapper>
              ))}
          </ScrollingSlider>
          <ScrollingSlider title="Suggested live now">
            {Array(20)
              .fill(0)
              .map((e, i) => (
                <Wrapper key={i} $w="310px" $m="0 10px 0 0">
                  <PreviewStreamWatchVideoCard
                    poster={faker.image.url()}
                    detailStream={{
                      avatar: faker.image.url(),
                      detail: "Team Pelicula en acción",
                      title: "Comisario  · American Truck Simulator"
                    }}
                  />
                </Wrapper>
              ))}
          </ScrollingSlider>
        </Wrapper>
      </LayoutDrawerGridColumn>
    </LayoutDrawer>
    <ContainerChatTabs />
  </ContainerMainNavigator>
);

export default GamingView;
