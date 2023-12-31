import Avatar from "@fb-components/common/Avatar";
import Card from "@fb-components/common/Card";
import TextLabel from "@fb-components/common/TextLabel";
import styled from "styled-components";

export const BannerAvatar = styled(Avatar)`
  border: 4px solid white;
  width: 170px;
  height: 170px;
`;

export const BannerCardBackgroundImage = styled.div<{ image?: string }>`
  --margin-bottom-avatar: 25px;
  border-radius: 0 0 10px 10px;
  height: 340px;
  width: 75%;
  margin: auto;
  background: url(${(props) => props.image}) no-repeat center / cover;
  position: relative;
  margin-bottom: var(--margin-bottom-avatar);
  ${BannerAvatar} {
    position: absolute;
    bottom: calc(var(--margin-bottom-avatar) / 2 * -1);
    left: 0;
    right: 0;
    margin: auto;
  }
`;

export const BannerNameAccount = styled(TextLabel)`
  font-weight: bold;
  text-align: center;
  display: block;
  width: 98%;
  max-width: 450px;
  margin: 25px auto;
  font-size: ${(props) => props.theme.fontSizes[700]};
  color: ${(props) => props.theme.colors.vgTextBlack};
`;

export const BannerCardContainer = styled(Card).attrs({
  variant: "compact"
})`
  width: 100%;
  border-radius: 0;
  position: relative;
`;
