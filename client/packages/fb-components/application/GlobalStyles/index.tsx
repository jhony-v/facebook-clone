import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
   * {
       box-sizing:border-box;
       font-family:Arial, Helvetica, sans-serif;
   }
   input,button,textarea,select {
       outline:none;
       border-width:0;
   }
    body {
        background-color:${(props) => props.theme.colors.vgPage};
        margin:0;
        padding:0;
    }
`
export default GlobalStyles;
