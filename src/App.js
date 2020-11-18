import React, { Suspense } from "react";

import "./App.css";

import { Container } from "@material-ui/core";

import { Route, Switch } from "react-router-dom";

import { AppLayout } from "./components/AppLayout";
import { PrivateRoute } from "./components/PrivateRoute";
import { FullPageLoading } from "./components/FullPageLoading";

const AuthPage = React.lazy(() => import("./components/AuthPage"));
const LoginPage = React.lazy(() => import("./components/LoginPage"));
const HomePage = React.lazy(() => import("./components/HomePage"));
const Search = React.lazy(() => import("./components/Search"));
const Playlists = React.lazy(() => import("./components/Playlists"));
const Logout = React.lazy(() => import("./components/Logout"));
const Artist = React.lazy(() => import("./components/Artist"));
const Album = React.lazy(() => import("./components/Album"));
const Playlist = React.lazy(() => import("./components/Playlist"));

function App() {
  return (
    <Container maxWidth="xs" style={{ height: "100vh" }}>
      <Switch>
        <AppLayout>
          <Suspense fallback={<FullPageLoading />}>
            <Route exact path="/auth" component={AuthPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/logout" component={Logout} />
            <PrivateRoute exact path="/" component={HomePage} />
            <PrivateRoute exact path="/search" component={Search} />
            <PrivateRoute exact path="/playlists" component={Playlists} />
            <PrivateRoute exact path="/artist/:id" component={Artist} />
            <PrivateRoute exact path="/album/:id" component={Album} />
            <PrivateRoute exact path="/playlist/:id" component={Playlist} />
          </Suspense>
        </AppLayout>
      </Switch>
    </Container>
  );
}

export default App;
