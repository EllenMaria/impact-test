import { ThemeProvider } from "styled-components";
import { theme } from "./themes";

export const renderTheme = (children) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
