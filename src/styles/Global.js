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
    `}
  }
  h1 {
    ${({ theme }) => css`
      color: ${theme.colors.accentColor};
      text-align: center;
    `}
  }
`;
