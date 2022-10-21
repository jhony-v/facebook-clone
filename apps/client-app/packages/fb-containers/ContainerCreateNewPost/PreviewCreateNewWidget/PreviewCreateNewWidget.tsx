import faker from "faker";
import CreateNewPost from "@fb-components/globals/CreateNewPost";
import { useCreateNewPostOpenModal } from "@fb-features-recoil/createNewPost";

const PreviewCreateNewWidget = () => {
  const { toggleModal } = useCreateNewPostOpenModal();
  return (
    <CreateNewPost
      onClick={() => toggleModal()}
      userImage={faker.image.people()}
      inputPlaceholder="Escribir nueva publicación"
    />
  );
};

export default PreviewCreateNewWidget;
