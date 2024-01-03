"use client";
import Wrapper from "@fb-components/common/Wrapper";
import ContainerListSearchPeople from "@fb-containers/ContainerListSearchPeople";
import LayoutDrawer from "@fb-components/layouts/LayoutsDrawer/LayoutDrawer";
import LayoutDrawerGridColumn from "@fb-components/layouts/LayoutsDrawer/LayoutDrawerGridColumn";
import LayoutDrawerLeftRail from "@fb-components/layouts/LayoutsDrawer/LayoutDrawerLeftRail";
import ContainerMainNavigator from "@fb-containers/ContainerMainNavigator";
import ContainerOptionsNavigation from "@fb-containers/ContainerOptionsNavigation";

const SearchView = () => (
  <ContainerMainNavigator>
    <LayoutDrawer>
      <Wrapper $w="100%">
        <LayoutDrawerGridColumn variant="left-rail fluid">
          <LayoutDrawerLeftRail $compact>
            <ContainerOptionsNavigation />
          </LayoutDrawerLeftRail>
          <Wrapper />
          <Wrapper $w="65%" $m="2em auto">
            <ContainerListSearchPeople />
          </Wrapper>
        </LayoutDrawerGridColumn>
      </Wrapper>
    </LayoutDrawer>
  </ContainerMainNavigator>
);

export default SearchView;
