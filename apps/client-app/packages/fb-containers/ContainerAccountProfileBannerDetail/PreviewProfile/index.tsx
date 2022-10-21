import faker from "faker";
import AccountProfileBanner from "@fb-components/globals/AccountProfileBanner";
import Wrapper from "@fb-components/common/Wrapper";
import { FCWithChildren } from "@utils/types";

const PreviewProfile: FCWithChildren = ({ children }) => (
  <AccountProfileBanner
    backgroundImage={faker.random.image()}
    text={`${faker.name.findName()} ${faker.name.lastName()} | ${faker.address.country()}`}
    avatar={faker.random.image()}
  >
    <Wrapper>{children}</Wrapper>
  </AccountProfileBanner>
);

export default PreviewProfile;
