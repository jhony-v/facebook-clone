import Wrapper from "@fb-components/common/Wrapper";
import TextLabel from "@fb-components/common/TextLabel";
import ContainerGetListProducts from "@fb-containers/ContainerGetListProducts";

const MarketPlaceView = () => (
  <>
    <Wrapper />
    <Wrapper m="auto">
      <Wrapper m="40px 0">
        <TextLabel weight textColor="vgTextBlack" textSize={600}>
          Today's Picks for You
        </TextLabel>
      </Wrapper>
      <Wrapper w="65%">
        <ContainerGetListProducts />
      </Wrapper>
    </Wrapper>
  </>
);

export default MarketPlaceView;
