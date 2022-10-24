import faker from "faker";
import Avatar from "@fb-components/common/Avatar";
import { StyledUserAccountButton } from "./elements";

const UserAccountButtonOption = () => (
  <StyledUserAccountButton
    text={faker.name.firstName()}
    image={<Avatar src={faker.image.people()} dimension="30px" />}
  />
);

export default UserAccountButtonOption;
