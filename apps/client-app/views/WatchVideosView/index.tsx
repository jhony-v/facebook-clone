import FlexWrapper from "@fb-components/common/FlexWrapper";
import Wrapper from "@fb-components/common/Wrapper";
import ListWatchVideoGlobals from "./components/ListWatchVideoGlobals";

const WatchVideosView = () => (
  <>
    <Wrapper />
    <FlexWrapper align="center" flexDirection="column">
      <Wrapper w="75%">
        <ListWatchVideoGlobals />
      </Wrapper>
    </FlexWrapper>
  </>
);

export default WatchVideosView;
