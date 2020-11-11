import React from "react";
import faker from "faker";
import AccountProfileBanner from "@fb-components/AccountProfileBanner";
import Wrapper from "@fb-components/Wrapper";

const PreviewProfile: React.FC = ({ children }) => {
  return (
    <AccountProfileBanner
      backgroundImage={faker.random.image()}
      text="Jhony Vega | Programmer"
      avatar={faker.random.image()}
    >
      <Wrapper>{children}</Wrapper>
    </AccountProfileBanner>
  );
};

export default PreviewProfile;
