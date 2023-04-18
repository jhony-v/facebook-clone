import WriteNewPostModal from "@fb-components/globals/WriteNewPostModal";
import { useCreateNewPostOpenModal } from "@fb-features-recoil/createNewPost";

const CreateNewModalWidget = () => {
  const { open, toggleModal } = useCreateNewPostOpenModal();
  return (
    <WriteNewPostModal
      actions={{
        open,
        onClose: () => toggleModal()
      }}
    />
  );
};

export default CreateNewModalWidget;
