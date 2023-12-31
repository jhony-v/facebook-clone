import Wrapper from "@fb-components/common/Wrapper";
import { FCWithChildren } from "@utils/types";
import { WeatherDetailCardWrapper } from "./elements";

const MainWrapper: FCWithChildren = ({ children }) => (
  <WeatherDetailCardWrapper>
    <Wrapper m="20px">{children}</Wrapper>
  </WeatherDetailCardWrapper>
);

export default MainWrapper;
