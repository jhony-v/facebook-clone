import Avatar from "@fb-components/common/Avatar";
import FlexWrapper from "@fb-components/common/FlexWrapper";
import TextLabel from "@fb-components/common/TextLabel";
import Wrapper from "@fb-components/common/Wrapper";
import { faker } from "@faker-js/faker";

const DetailUser = () => (
  <Wrapper m="0 0 20px">
    <FlexWrapper align="center">
      <Avatar src={faker.image.url()} />
      <Wrapper m="0 0 0 10px">
        <TextLabel weight textColor="vgTextBlack">
          {faker.person.firstName()}
        </TextLabel>
      </Wrapper>
    </FlexWrapper>
  </Wrapper>
);

export default DetailUser;
