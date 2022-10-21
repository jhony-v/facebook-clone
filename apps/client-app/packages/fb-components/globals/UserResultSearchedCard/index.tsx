import Avatar from "@fb-components/common/Avatar";
import Card from "@fb-components/common/Card";
import FlexWrapper from "@fb-components/common/FlexWrapper";
import TextLabel from "@fb-components/common/TextLabel";
import Wrapper from "@fb-components/common/Wrapper";

type UserResultSearchedCardProps = {
  avatar: string;
  fullName: string;
  subtitle?: string;
  description?: string;
  children?: React.ReactNode;
  rightComponent?: React.ReactNode;
};
const UserResultSearchedCard = ({
  avatar,
  subtitle,
  fullName,
  description,
  children,
  rightComponent
}: UserResultSearchedCardProps) => (
  <Card variant="compact">
    <Wrapper p="10px">
      <FlexWrapper>
        <Wrapper flexNone m="0 10px 0 0">
          <Avatar src={avatar} dimension="60px" />
        </Wrapper>
        <FlexWrapper flexDirection="column" w="60%" justify="center">
          <TextLabel weight textColor="vgTextBlack" textSize={300}>
            {fullName}
          </TextLabel>
          <Wrapper>
            {subtitle && (
              <Wrapper m="5px 0 0">
                <TextLabel textSize={200}>{subtitle}</TextLabel>
              </Wrapper>
            )}
            {description && (
              <Wrapper m="10px 0 0">
                <TextLabel textSize={300}>{description}</TextLabel>
              </Wrapper>
            )}
          </Wrapper>
          {children}
        </FlexWrapper>
        <Wrapper flexNone m="auto 0 auto auto">
          {rightComponent}
        </Wrapper>
      </FlexWrapper>
    </Wrapper>
  </Card>
);
export default UserResultSearchedCard;
