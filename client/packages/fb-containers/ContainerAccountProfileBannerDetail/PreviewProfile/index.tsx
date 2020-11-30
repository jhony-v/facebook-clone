import React from 'react';
import AccountProfileBanner from '@fb-components/globals/AccountProfileBanner';
import Wrapper from '@fb-components/common/Wrapper';
import faker from 'faker';

const PreviewProfile: React.FC = ({ children }) => (
  <AccountProfileBanner
    backgroundImage={faker.random.image()}
    text={`${faker.name.findName()} ${faker.name.lastName()} | ${faker.address.country()}`}
    avatar={faker.random.image()}
  >
    <Wrapper>{children}</Wrapper>
  </AccountProfileBanner>
);

export default PreviewProfile;
