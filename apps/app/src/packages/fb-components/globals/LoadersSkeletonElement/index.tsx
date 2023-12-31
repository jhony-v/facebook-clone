import FlexWrapper from "@fb-components/common/FlexWrapper";
import Grid from "@fb-components/common/Grid";
import Skeleton from "@fb-components/common/Skeleton";
import Wrapper from "@fb-components/common/Wrapper";
import { converMeasureCSSToNumber } from "@utils/transforms";

const scaleValue = (scale?: string) =>
  converMeasureCSSToNumber(scale || "50px");

type RenderSkeketonsProps = {
  repeat?: number;
  children: (i: number) => React.ReactNode;
};

const RenderSkeketons = ({ repeat, children }: RenderSkeketonsProps) => (
  <Wrapper className="skeleton__loader" w="100%">
    {Array(repeat || 1)
      .fill(0)
      .map((_, i) => children(i))}
  </Wrapper>
);

type SkeletonElementProps = {
  repeat?: number;
  scale?: string;
};

export const SkeletonElementRow = ({
  scale,
  ...restProps
}: SkeletonElementProps) => {
  const value = scaleValue(scale);
  return (
    <RenderSkeketons {...restProps}>
      {(i) => (
        <Wrapper key={i} m="15px 0" w="100%">
          <FlexWrapper align="center">
            <Skeleton
              flexNone
              m="0 10px 0 0"
              type="circle"
              dimension={`${value}px`}
            />
            <Skeleton type="rect" w="100%" h={`${value - 10}px`} />
          </FlexWrapper>
        </Wrapper>
      )}
    </RenderSkeketons>
  );
};

export const SkeletonElementCard = ({
  scale,
  ...restProps
}: SkeletonElementProps) => {
  const value = scaleValue(scale);
  return (
    <RenderSkeketons {...restProps}>
      {(i) => (
        <Wrapper key={i}>
          <SkeletonElementRow repeat={1} scale={scale} />
          <Skeleton type="rect" w="100%" h={`${value + 100}px`} />
          <Wrapper m="10px 0">
            <Skeleton type="rect" w="100%" h="7px" />
            <Skeleton type="rect" w="80%" h="7px" m="10px 0 0 0" />
          </Wrapper>
        </Wrapper>
      )}
    </RenderSkeketons>
  );
};

export const SkeletonElementCardGrid = ({ repeat }: SkeletonElementProps) => (
  <Grid repeatColumns={repeat} gap="10px">
    {Array(repeat)
      .fill(0)
      .map((_, i) => (
        <Skeleton key={i} type="rect" h="200px" r={20} />
      ))}
  </Grid>
);
