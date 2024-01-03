import { faker } from "@faker-js/faker";
import AccountProfileBanner from "@fb-components/globals/AccountProfileBanner";
import Wrapper from "@fb-components/common/Wrapper";
import { FCWithChildren } from "@utils/types";

const PreviewProfile: FCWithChildren = ({ children }) => (
  <AccountProfileBanner
    backgroundImage={faker.image.url()}
    text={`${faker.person.firstName()} ${faker.person.lastName()} | ${faker.address.country()}`}
    avatar={faker.image.url()}
  >
    <Wrapper>{children}</Wrapper>
  </AccountProfileBanner>
);

export default PreviewProfile;
