import FlexWrapper from "@fb-components/common/FlexWrapper";
import TextLabel from "@fb-components/common/TextLabel";
import Wrapper from "@fb-components/common/Wrapper";

type SubtitleTextDetailProps = {
  title?: string;
  subtitle?: string;
  horizontal?: boolean;
  weight?: boolean;
  primaryTitle?: boolean;
};

const SubtitleTextDetail = (props: SubtitleTextDetailProps) => {
  
  /**
   * Dynamic props readable
   */
  const weightProp = {
    ...(props.weight && {
      weight: 600,
    }),
  };
  const titleProps: any = {
    ...weightProp,
    ...(props.primaryTitle && {
      textColor: "vgTextBlack",
      weight: 600,
    }),
  };

  return (
    <Wrapper m="0 0 0 10px">
      <FlexWrapper flexDirection={props.horizontal ? "row" : "column"}>
        <TextLabel {...titleProps}>{props.title}</TextLabel>
        <Wrapper {...(props.horizontal && { m: "0 0 0 5px" })}>
          <TextLabel {...weightProp}>{props.subtitle}</TextLabel>
        </Wrapper>
      </FlexWrapper>
    </Wrapper>
  );
};

export default SubtitleTextDetail;
