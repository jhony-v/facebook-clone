import FacebookCloseWithAvatar from "@fb-components/application/FacebookCloseWithAvatar";
import AccountControlSettings from "@fb-components/globals/AccountControlSettings";
import LayoutDrawerAbsoluteFullScreen from "@fb-components/layouts/LayoutsDrawer/LayoutDrawerAbsoluteFullScreen";
import LayoutDrawerFlexFluid from "@fb-components/layouts/LayoutsDrawer/LayoutDrawerFlexFluid";
import LayoutDrawerFlexSidebar from "@fb-components/layouts/LayoutsDrawer/LayoutDrawerFlexSidebar";

export default function PreviewPhotoById() {
  return (
    <LayoutDrawerAbsoluteFullScreen>
      <LayoutDrawerFlexFluid />
      <LayoutDrawerFlexSidebar w="medium" />
      <FacebookCloseWithAvatar onClose={() => null} />
      <AccountControlSettings hideButtonAccount />
    </LayoutDrawerAbsoluteFullScreen>
  );
}
