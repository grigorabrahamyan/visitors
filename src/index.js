import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./components/layout/Layout.container";
import { Provider } from "react-redux";
import store from "./store";
import { ThemeProvider } from "@mui/material";
import customTheme from "./Theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={customTheme}>
      <Provider store={store}>
        <Layout />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
