import { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "../src/styles";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    default: "light",
    values: [
      {
        name: 'light',
        value: theme.colors.lightColor,
      },
      {
        name: 'dark',
        value: theme.colors.darkColor,
      }
    ],
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
      <GlobalStyles />
    </ThemeProvider>
  ),
];
