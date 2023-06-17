import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { GlobalStyles, theme } from "./styles";
import { ThemeProvider } from "styled-components";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
