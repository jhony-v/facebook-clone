import Wrapper from "@fb-components/common/Wrapper";
import AccountControlSettings from "@fb-components/globals/AccountControlSettings";
import ContainerListUserStories from "@fb-containers/ContainerListUserStories";
import FacebookCloseWithAvatar from "@fb-components/application/FacebookCloseWithAvatar";
import LayoutDrawerAbsoluteFullScreen from "@fb-components/layouts/LayoutsDrawer/LayoutDrawerAbsoluteFullScreen";
import LayoutDrawerFlexSidebar from "@fb-components/layouts/LayoutsDrawer/LayoutDrawerFlexSidebar";
import LayoutDrawerFlexFluid from "@fb-components/layouts/LayoutsDrawer/LayoutDrawerFlexFluid";
import InstaStories from "@fb-components/globals/InstaStories";

const StoriesView = () => {
  return (
    <Wrapper>
      <FacebookCloseWithAvatar onClose={() => null} />
      <AccountControlSettings hideButtonAccount />
      <LayoutDrawerAbsoluteFullScreen>
        <LayoutDrawerFlexSidebar>
          <ContainerListUserStories />
        </LayoutDrawerFlexSidebar>
        <LayoutDrawerFlexFluid>
          <InstaStories/>
        </LayoutDrawerFlexFluid>
      </LayoutDrawerAbsoluteFullScreen>
    </Wrapper>
  );
};

export default StoriesView;
