import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
        background-color:${(props) => props.theme.colors.vgPage};
    }
`
export default GlobalStyles;
