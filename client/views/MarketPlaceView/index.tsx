import Wrapper from "@fb-components/Wrapper";
import TextLabel from "@fb-components/TextLabel";
import ContainerGetListProducts from "@fb-components/ContainerGetListProducts";

const MarketPlaceView = () => {
  return (
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
};

export default MarketPlaceView;
