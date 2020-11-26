import Avatar from "@fb-components/common/Avatar";
import FlexWrapper from "@fb-components/common/FlexWrapper";
import TextLabel from "@fb-components/common/TextLabel";
import Wrapper from "@fb-components/common/Wrapper";

export type PageInformationProps = {
    avatar ?: string;
    name ?: string;
    category ?: string;
    likes ?: number;
};
const PageInformation = (props: PageInformationProps) => {
  return (
    <Wrapper m="0 0 20px">
      <FlexWrapper>
        <Wrapper m="0 10px 0 0">
          <Avatar src={props.avatar} />
        </Wrapper>
        <Wrapper>
          <TextLabel weight textColor="vgTextBlack" textSize={600}>{props.name}</TextLabel>
          <Wrapper>
            <Wrapper>
              <TextLabel textSize={200} weight>{props.category}</TextLabel>
            </Wrapper>
            <TextLabel textSize={200}>{`${props.likes} people like this Page`}</TextLabel>
          </Wrapper>
        </Wrapper>
      </FlexWrapper>
    </Wrapper>
  );
};

export default PageInformation;
