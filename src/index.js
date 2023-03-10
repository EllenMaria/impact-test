import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App";
import { GlobalStyles, theme } from "./styles";
import { ThemeProvider } from "styled-components";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>,
);
