import Wrapper from "@fb-components/common/Wrapper";
import AccountControlSettings from "@fb-components/globals/AccountControlSettings";
import ContainerListUserStories from "@fb-containers/ContainerListUserStories";
import FacebookCloseWithAvatar from "@fb-components/application/FacebookCloseWithAvatar";
import LayoutDrawerAbsoluteFullScreen from "@fb-components/layouts/LayoutsDrawer/LayoutDrawerAbsoluteFullScreen";
import LayoutDrawerFlexSidebar from "@fb-components/layouts/LayoutsDrawer/LayoutDrawerFlexSidebar";
import LayoutDrawerFlexFluid from "@fb-components/layouts/LayoutsDrawer/LayoutDrawerFlexFluid";
import ContainerViewUserStory from "@fb-containers/ContainerViewUserStory";

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
          <ContainerViewUserStory />
        </LayoutDrawerFlexFluid>
      </LayoutDrawerAbsoluteFullScreen>
    </Wrapper>
  );
};

export default StoriesView;
