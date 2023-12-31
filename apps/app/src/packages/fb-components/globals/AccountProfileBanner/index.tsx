import React, { memo } from "react";
import Wrapper from "@fb-components/common/Wrapper";
import {
  BannerAvatar,
  BannerCardBackgroundImage,
  BannerCardContainer,
  BannerNameAccount
} from "./Atoms/elements";

type AccountProfileBannerProps = {
  backgroundImage: string;
  avatar: string;
  text: string | null;
  children?: React.ReactNode;
};

const AccountProfileBanner = (props: AccountProfileBannerProps) => {
  const { backgroundImage, avatar, text, children } = props;
  return (
    <BannerCardContainer>
      <Wrapper>
        <BannerCardBackgroundImage image={backgroundImage}>
          {avatar && <BannerAvatar src={avatar} role="img" />}
        </BannerCardBackgroundImage>
        {text && <BannerNameAccount>{text}</BannerNameAccount>}
      </Wrapper>
      {children && <Wrapper>{children}</Wrapper>}
    </BannerCardContainer>
  );
};

AccountProfileBanner.defaultProps = {
  children: null
};

export default memo(AccountProfileBanner);
