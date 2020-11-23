import Wrapper from "@fb-components/common/Wrapper";
import LayoutDrawer from "@fb-components/layouts/LayoutsDrawer/LayoutDrawer";
import LayoutDrawerGridColumn from "@fb-components/layouts/LayoutsDrawer/LayoutDrawerGridColumn";
import LayoutDrawerLeftRail from "@fb-components/layouts/LayoutsDrawer/LayoutDrawerLeftRail";
import ContainerMainNavigator from "@fb-containers/ContainerMainNavigator";
import ContainerOptionsNavigation from "@fb-containers/ContainerOptionsNavigation";
import SearchView from "@views/SearchView";

export default function Search() {
  return (
    <ContainerMainNavigator>
      <LayoutDrawer>
        <Wrapper w="100%">
          <LayoutDrawerGridColumn variant="left-rail fluid">
            <LayoutDrawerLeftRail compact>
              <ContainerOptionsNavigation />
            </LayoutDrawerLeftRail>
            <SearchView />
          </LayoutDrawerGridColumn>
        </Wrapper>
      </LayoutDrawer>
    </ContainerMainNavigator>
  );
}
