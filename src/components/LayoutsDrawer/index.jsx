import styled from "styled-components";
import defaultTheme from "../../theme/defaultTheme";
import Wrapper from "../Common/Wrapper";

const LayoutsDrawer = {
  Drawer: styled.div`
    width: 100%;
    display:flex;
    justify-content:center;
    margin-top : ${defaultTheme.height.header};
  `,
  Stories: styled(Wrapper)`
    margin:2em auto;
    width: ${defaultTheme.width.storiesUnit};
  `,
  Feed: styled(Wrapper)` 
    width: ${defaultTheme.width.feedUnit};
    margin:2em auto 0;
  `,
  RightRail : styled.div`
    position:fixed;
    right:0;
    bottom:0;
    display:flex;
    align-items:stretch;
    height:calc(100vh - ${defaultTheme.height.header});
  `
};

export default LayoutsDrawer;
