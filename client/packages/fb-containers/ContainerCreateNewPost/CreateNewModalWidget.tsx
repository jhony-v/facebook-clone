import WriteNewPostModal from "@fb-components/WriteNewPostModal";
import { useCreateNewPostOpenModal } from "@fb-features-recoil/createNewPost/hooks";

const CreateNewModalWidget = () => {
  const { open, toggleModal } = useCreateNewPostOpenModal();
  return (
    <WriteNewPostModal
      actions={{
        open,
        onClose: () => toggleModal(),
      }}
    />
  );
};

export default CreateNewModalWidget;
