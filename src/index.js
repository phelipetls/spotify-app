import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter as Router } from "react-router-dom";

import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./styles/Theme.js";

import { QueryCache, ReactQueryCacheProvider } from "react-query";

import { AuthProvider } from "./context/auth";
import { PlaylistsProvider } from "./context/playlists";

const queryCache = new QueryCache({
  defaultConfig: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
});

const ContextWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>
    <PlaylistsProvider>
      <AuthProvider>{children}</AuthProvider>
    </PlaylistsProvider>
  </ThemeProvider>
);

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ReactQueryCacheProvider queryCache={queryCache}>
        <ContextWrapper>
          <CssBaseline />
          <App />
        </ContextWrapper>
      </ReactQueryCacheProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
