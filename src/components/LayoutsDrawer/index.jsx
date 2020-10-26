import styled from "styled-components";
import defaultTheme from "../../theme/defaultTheme";

const LayoutsDrawer = {
  Drawer: styled.div`
    width: 100%;
    display:flex;
    justify-content:center;
    marginTop : ${defaultTheme.height.header};
  `,
  Stories: styled.div`
    width: ${defaultTheme.width.storiesUnit};
  `,
  Feed: styled.div`
    width: ${defaultTheme.width.feedUnit};
  `,
};

export default LayoutsDrawer;
