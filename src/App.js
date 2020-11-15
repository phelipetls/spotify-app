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
import { Logout } from "./components/Logout";
import { Artist } from "./components/Artist";

function App() {
  return (
    <SpotifyAuthProvider>
      <Container maxWidth="xs" style={{ height: "100vh" }}>
        <Switch>
          <Route exact path="/auth" component={AuthPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/logout" component={Logout} />
          <PrivateRoute exact path="/" component={HomePage} />
          <PrivateRoute exact path="/search" component={Search} />
          <PrivateRoute exact path="/playlists" component={Playlists} />
          <PrivateRoute exact path="/artist/:id" component={Artist} />
        </Switch>
      </Container>
    </SpotifyAuthProvider>
  );
}

export default App;
