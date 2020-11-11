import React, { memo } from "react";
import {BannerAvatar,BannerCardBackgroundImage,BannerCardContainer, BannerNameAccount} from "./Atoms/elements";
import Wrapper from "@fb-components/Wrapper";

type AccountProfileBannerProps = {
    backgroundImage ?: string;
    avatar ?: string;
    text ?: string;
    children ?: React.ReactNode;
}

const AccountProfileBanner = (props: AccountProfileBannerProps) => {
  const { backgroundImage, avatar, text, children } = props;  
  return (
    <BannerCardContainer>
      <Wrapper>
        <BannerCardBackgroundImage image={backgroundImage}>
          {avatar && (
              <BannerAvatar src={avatar} />
          )}  
        </BannerCardBackgroundImage>
        <BannerNameAccount>{text}</BannerNameAccount>
      </Wrapper>
      <Wrapper>{children}</Wrapper>
    </BannerCardContainer>
  );
};

export default memo(AccountProfileBanner);
