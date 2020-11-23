import Wrapper from "@fb-components/common/Wrapper";
import UserResultSearchedCard from "@fb-components/globals/UserResultSearchedCard";
import LayoutDrawer from "@fb-components/layouts/LayoutsDrawer/LayoutDrawer";
import LayoutDrawerGridColumn from "@fb-components/layouts/LayoutsDrawer/LayoutDrawerGridColumn";
import LayoutDrawerLeftRail from "@fb-components/layouts/LayoutsDrawer/LayoutDrawerLeftRail";
import ContainerMainNavigator from "@fb-containers/ContainerMainNavigator";
import ContainerOptionsNavigation from "@fb-containers/ContainerOptionsNavigation";
import faker from "faker";

export default function Search() {
  return (
    <ContainerMainNavigator>
      <LayoutDrawer>
        <Wrapper w="100%">
          <LayoutDrawerGridColumn variant="left-rail fluid">
            <LayoutDrawerLeftRail compact>
              <ContainerOptionsNavigation />
            </LayoutDrawerLeftRail>
            <div />
            <div>
            <UserResultSearchedCard
              avatar={faker.random.image()}
              fullName="Jhony Vega"
              subtitle="16 friends"
              description="Owner and Founder at HELLO Ma Khaing Ma Cho
              University of Yangon Main"
            />
            </div>
          </LayoutDrawerGridColumn>
        </Wrapper>
      </LayoutDrawer>
    </ContainerMainNavigator>
  );
}
