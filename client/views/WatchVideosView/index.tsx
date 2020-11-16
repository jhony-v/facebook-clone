import FlexWrapper from "@fb-components/FlexWrapper";
import Wrapper from "@fb-components/Wrapper";
import ListWatchVideoGlobals from "./components/ListWatchVideoGlobals";

const WatchVideosView = () => {
  return (
    <>
      <Wrapper />
      <FlexWrapper align="center" flexDirection="column">
        <Wrapper w="75%">
          <ListWatchVideoGlobals />
        </Wrapper>
      </FlexWrapper>
    </>
  );
};

export default WatchVideosView;
