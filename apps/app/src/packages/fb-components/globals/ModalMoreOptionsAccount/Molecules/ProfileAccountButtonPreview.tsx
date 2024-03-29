import Avatar from "@fb-components/common/Avatar";
import TextLabel from "@fb-components/common/TextLabel";
import Wrapper from "@fb-components/common/Wrapper";
import FlexWrapper from "@fb-components/common/FlexWrapper";
import { faker } from "@faker-js/faker";
import ItemButtonSelectable from "../Atoms/ItemButtonSelectable";

const ProfileAccountButtonPreview = () => (
  <ItemButtonSelectable onClick={() => null} hideNextArrow>
    <FlexWrapper $align="center">
      <Avatar
        src={faker.image.urlLoremFlickr({ category: "people" })}
        $dimension="70px"
      />
      <Wrapper $m="0 0 0 15px">
        <TextLabel $weight $textColor="vgTextBlack" $block>
          {`${faker.person.firstName()} ${faker.person.lastName()} ${faker.person.lastName()}`}
        </TextLabel>
        <TextLabel $textSize={300} $block>
          See your profile
        </TextLabel>
      </Wrapper>
    </FlexWrapper>
  </ItemButtonSelectable>
);

export default ProfileAccountButtonPreview;
