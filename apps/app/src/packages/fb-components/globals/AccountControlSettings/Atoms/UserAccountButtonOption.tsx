import { faker } from "@faker-js/faker";
import Avatar from "@fb-components/common/Avatar";
import { StyledUserAccountButton } from "./elements";

const data = {
  text: faker.person.firstName(),
  src: faker.image.urlLoremFlickr({ category: "people" })
}

const UserAccountButtonOption = () => (
  <StyledUserAccountButton
    text={data.text}
    image={
      <Avatar
        src={data.src}
        $dimension="30px"
      />
    }
  />
);

export default UserAccountButtonOption;
