import { faker } from "@faker-js/faker";
import Avatar from "@fb-components/common/Avatar";
import { StyledUserAccountButton } from "./elements";

const UserAccountButtonOption = () => (
  <StyledUserAccountButton
    text={faker.person.firstName()}
    image={
      <Avatar
        src={faker.image.urlLoremFlickr({ category: "people" })}
        dimension="30px"
      />
    }
  />
);

export default UserAccountButtonOption;
