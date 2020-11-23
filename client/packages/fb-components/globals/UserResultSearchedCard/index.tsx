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
  rightComponent ?: React.ReactNode;
};
const UserResultSearchedCard = (props: UserResultSearchedCardProps) => {
  return (
    <Card variant="compact">
      <Wrapper p="10px">
        <FlexWrapper>
          <Wrapper flexNone m="0 10px 0 0">
            <Avatar src={props.avatar} dimension="60px" />
          </Wrapper>
          <FlexWrapper flexDirection="column" w="60%" justify="center">
            <TextLabel weight textColor="vgTextBlack" textSize={300}>
              {props.fullName}
            </TextLabel>
            <Wrapper>
              {props.subtitle && (
              <Wrapper m="5px 0 0">
                  <TextLabel textSize={200}>{props.subtitle}</TextLabel>
              </Wrapper>
              )}  
              {props.description && (
                <Wrapper m="10px 0 0">
                    <TextLabel textSize={300}>{props.description}</TextLabel>
                </Wrapper>
              )}
            </Wrapper>
            {props.children}
          </FlexWrapper>
          <Wrapper flexNone m="auto 0 auto auto">
              {props.rightComponent}
          </Wrapper>
        </FlexWrapper>
      </Wrapper>
    </Card>
  );
};
export default UserResultSearchedCard;
