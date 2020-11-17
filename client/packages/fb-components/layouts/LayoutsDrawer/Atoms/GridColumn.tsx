import React from "react";
import Grid from "@fb-components/common/Grid";
import Wrapper from "@fb-components/common/Wrapper";
import { useTheme } from "styled-components";

type GridColumnProps = {
  variant ?: "left-rail fluid" | "fluid right-rail";
};

const GridColumn: React.FC<GridColumnProps> = (props) => {
  const { variant, children } = props;
  const { layoutSizes } = useTheme();
  let columns;
  switch (variant) {
    case "left-rail fluid":
      columns = [layoutSizes.widthLeftRail, "1fr"];
      break;
    case "fluid right-rail":
      columns = ["1fr", layoutSizes.widthRightRail];
      break;
    default:
      columns = ["1fr"];
      break;
  }
  return(
    <Wrapper w="100%">
      <Grid sizeColumns={columns}>{children}</Grid>
    </Wrapper>
  );
};

export default GridColumn;
