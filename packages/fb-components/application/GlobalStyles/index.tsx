import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
   * {
       box-sizing:border-box;
   }
    body {
        background-color:${(props) => props.theme.colors.vgPage};
    }
`
export default GlobalStyles;
