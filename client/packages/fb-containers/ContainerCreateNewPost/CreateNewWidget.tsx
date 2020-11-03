import faker from "faker";
import CreateNewPost from "@fb-components/CreateNewPost";
import { useCreateNewPostOpenModal } from "@fb-features-recoil/createNewPost/hooks";

const CreateNewWidget = () => {
    const { toggleModal } = useCreateNewPostOpenModal();
    return (
        <CreateNewPost
        onClick={()=>toggleModal()}  
        userImage={faker.image.avatar()}
        inputPlaceholder="Escribir nueva publicación"/>
      )
}

export default CreateNewWidget
