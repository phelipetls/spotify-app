import "./App.css";

import { Container } from "@material-ui/core";

import { Route, Switch } from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRoute";

import { SpotifyAuthProvider } from "./context/spotify-auth";

import { AuthPage } from "./components/AuthPage";
import { LoginPage } from "./components/LoginPage";
import { HomePage } from "./components/HomePage";
import { Search } from "./components/Search";
import { Playlists } from "./components/Playlists";

function App() {
  return (
    <SpotifyAuthProvider>
      <Container maxWidth="xs" style={{ height: "100vh" }}>
        <Switch>
          <Route exact path="/auth" component={AuthPage} />
          <Route exact path="/login" component={LoginPage} />
          <PrivateRoute exact path="/" component={HomePage} />
          <PrivateRoute exact path="/search" component={Search} />
          <PrivateRoute exact path="/playlists" component={Playlists} />
        </Switch>
      </Container>
    </SpotifyAuthProvider>
  );
}

export default App;
