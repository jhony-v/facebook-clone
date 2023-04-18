import WeatherDetailCard from "@fb-components/globals/WeatherDetailCard";
import LayoutDrawer from "@fb-components/layouts/LayoutsDrawer/LayoutDrawer";
import LayoutDrawerGridColumn from "@fb-components/layouts/LayoutsDrawer/LayoutDrawerGridColumn";
import LayoutDrawerLeftRail from "@fb-components/layouts/LayoutsDrawer/LayoutDrawerLeftRail";
import ContainerMainNavigator from "@fb-containers/ContainerMainNavigator";
import ContainerOptionsNavigation from "@fb-containers/ContainerOptionsNavigation";

const Weather = () => (
  <ContainerMainNavigator>
    <LayoutDrawer>
      <LayoutDrawerGridColumn variant="left-rail fluid">
        <LayoutDrawerLeftRail compact>
          <ContainerOptionsNavigation />
        </LayoutDrawerLeftRail>
        <div />
        <div>
          <WeatherDetailCard />
        </div>
      </LayoutDrawerGridColumn>
    </LayoutDrawer>
  </ContainerMainNavigator>
);

export default Weather;
