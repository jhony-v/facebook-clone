import TotalViews from "@fb-components/common/TotalViews";
import Wrapper from "@fb-components/common/Wrapper";
import React from "react";

const TotalViewsFloating = ({ total }: { total: number }) => (
  <Wrapper
    absolute={{
      top: "5px",
      left: "5px"
    }}
  >
    <TotalViews total={total} />
  </Wrapper>
);

export default TotalViewsFloating;
