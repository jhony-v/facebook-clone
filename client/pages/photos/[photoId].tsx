import FacebookCloseWithAvatar from "@fb-components/application/FacebookCloseWithAvatar";
import AccountControlSettings from "@fb-components/globals/AccountControlSettings";
import LayoutsDrawer from "@fb-components/layouts/LayoutsDrawer";

const PreviewPhotoById = () => {
  return <LayoutsDrawer.PreviewPublication>
    <FacebookCloseWithAvatar onClose={()=>null} />
    <AccountControlSettings/>
  </LayoutsDrawer.PreviewPublication>;
};

export default PreviewPhotoById;
