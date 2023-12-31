import Avatar from "@fb-components/common/Avatar";
import FlexWrapper from "@fb-components/common/FlexWrapper";
import RaisedButton from "@fb-components/common/RaisedButton";
import TextLabel from "@fb-components/common/TextLabel";
import Wrapper from "@fb-components/common/Wrapper";

const UserDetailStory = ({ totalsNewStory, lastDatetimeStory }) => (
  <Wrapper m="5px 0 0 0">
    <FlexWrapper>
      <TextLabel
        block
        textAlign="left"
        textColor="vgTextPrimary"
        textSize={300}
      >
        {totalsNewStory} news
      </TextLabel>
      <TextLabel block textAlign="left" textSize={300}>
        {lastDatetimeStory}
      </TextLabel>
    </FlexWrapper>
  </Wrapper>
);

const UserFullNameStory = ({ fullName }: { fullName: string }) => (
  <TextLabel weight block textColor="vgTextBlack" textAlign="left">
    {fullName}
  </TextLabel>
);

type UserStoryProps = {
  user: {
    avatar: string;
    fullName: string;
  };
  totalsNewStory: number;
  lastDatetimeStory: string;
};
const UserStory = (props: UserStoryProps) => {
  const { user, totalsNewStory, lastDatetimeStory } = props;
  return (
    <Wrapper m="5px 0">
      <RaisedButton hover fluid>
        <Wrapper w="100%">
          <FlexWrapper align="center">
            <Avatar src={user.avatar} dimension="50px" />
            <Wrapper p="0 0 0 10px">
              <UserFullNameStory fullName={user.fullName} />
              <UserDetailStory
                lastDatetimeStory={lastDatetimeStory}
                totalsNewStory={totalsNewStory}
              />
            </Wrapper>
          </FlexWrapper>
        </Wrapper>
      </RaisedButton>
    </Wrapper>
  );
};

export default UserStory;
