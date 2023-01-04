import { createGlobalStyle, css } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    ${({ theme }) => css`
      background: ${theme.colors.darkColor};
      color: ${theme.colors.lightColor};
      font-family: ${theme.fonts.primaryFont};
      max-width: 1080px;
      margin: 0 auto;
      padding: 2em;
    `}
  }
`;
