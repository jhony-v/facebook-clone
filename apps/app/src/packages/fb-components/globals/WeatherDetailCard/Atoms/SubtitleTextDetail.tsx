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

const SubtitleTextDetail = ({
  title,
  subtitle,
  horizontal,
  weight,
  primaryTitle
}: SubtitleTextDetailProps) => {
  /**
   * Dynamic props readable
   */
  const weightProp = {
    ...(weight && {
      weight: 600
    })
  };
  const titleProps: any = {
    ...weightProp,
    ...(primaryTitle && {
      textColor: "vgTextBlack",
      weight: 600
    })
  };

  return (
    <Wrapper m="0 0 0 10px">
      <FlexWrapper flexDirection={horizontal ? "row" : "column"}>
        <TextLabel {...titleProps}>{title}</TextLabel>
        <Wrapper {...(horizontal && { m: "0 0 0 5px" })}>
          <TextLabel weight={weight && 600}>{subtitle}</TextLabel>
        </Wrapper>
      </FlexWrapper>
    </Wrapper>
  );
};

export default SubtitleTextDetail;
