import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
   * {
       box-sizing:border-box;
       font-family:'Montserrat', Arial, Helvetica, sans-serif;
   }
   input,button,textarea,select,details {
       outline:none;
       border-width:0;
       background:none;
   }
   a {
       text-decoration:none;
   }
    body {
        background-color:${(props) => props.theme.colors.vgPage};
        margin:0;
        padding:0;
    }
`;
export default GlobalStyles;
