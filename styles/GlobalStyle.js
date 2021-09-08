import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    /* max-width: 1400px !important; */
    a {
        color: black;
        text-decoration: none;
        &:hover {
            color: black;
        }
    }
    ul,li {
        list-style-type: none;
        padding: 0;
        margin: 0;
    }
  
`;

export default GlobalStyle;
