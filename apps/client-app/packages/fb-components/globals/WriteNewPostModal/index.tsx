import ModalDialog from "@fb-components/globals/ModalDialog";
import ButtonAddPost from "./Atoms/ButtonAddPost";
import HeaderTitle from "./Atoms/HeaderTitle";
import TextAreaMessage from "./Atoms/TextAreaMessage";
import DetailUser from "./Molecules/DetailUser";
import OptionsAddMoreInformation from "./Molecules/OptionsAddMoreInformation";

type WriteNewPostModalProps = {
  actions: {
    open: boolean;
    onClose: () => void;
  };
};
const WriteNewPostModal = ({ actions }: WriteNewPostModalProps) => (
  <ModalDialog w="500px" open={actions.open} onClose={actions.onClose}>
    <ModalDialog.Header p="20px" border>
      <HeaderTitle />
    </ModalDialog.Header>
    <ModalDialog.Body p="20px">
      <DetailUser />
      <TextAreaMessage />
      <OptionsAddMoreInformation />
      <ButtonAddPost />
    </ModalDialog.Body>
  </ModalDialog>
);

export default WriteNewPostModal;
