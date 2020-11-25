import ChevronIconButtton from "@fb-components/common/ChevronIconButtton";
import LayoutDrawer from "@fb-components/layouts/LayoutsDrawer/LayoutDrawer";
import LayoutDrawerGridColumn from "@fb-components/layouts/LayoutsDrawer/LayoutDrawerGridColumn";
import LayoutDrawerLeftRail from "@fb-components/layouts/LayoutsDrawer/LayoutDrawerLeftRail";
import ContainerMainNavigator from "@fb-containers/ContainerMainNavigator";
import ContainerOptionsNavigation from "@fb-containers/ContainerOptionsNavigation";

const Weather = () => {
  return <ContainerMainNavigator>
      <LayoutDrawer>
        <LayoutDrawerGridColumn variant="left-rail fluid">
          <LayoutDrawerLeftRail compact>
            <ContainerOptionsNavigation />
          </LayoutDrawerLeftRail>
        </LayoutDrawerGridColumn>
      </LayoutDrawer>
  </ContainerMainNavigator>;
};

export default Weather;
