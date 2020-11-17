import Avatar from "@fb-components/Avatar";
import FlexWrapper from "@fb-components/FlexWrapper";
import TextLabel from "@fb-components/TextLabel";
import Wrapper from "@fb-components/Wrapper";
import faker from "faker";

const DetailUser = () => {
  return (
    <Wrapper m="0 0 20px">
      <FlexWrapper align="center">
        <Avatar src={faker.random.image()} />
        <Wrapper m="0 0 0 10px">
          <TextLabel weight textColor="vgTextBlack">
            {faker.name.firstName()}
          </TextLabel>
        </Wrapper>
      </FlexWrapper>
    </Wrapper>
  );
};

export default DetailUser;
