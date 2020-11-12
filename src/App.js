import "./App.css";

import { makeStyles } from "@material-ui/styles";

import { Route, Switch } from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRoute";

import { SpotifyAuthProvider } from "./context/spotify-auth";

import { AuthPage } from "./components/AuthPage";
import { LoginPage } from "./components/LoginPage";
import { HomePage } from "./components/HomePage";
import { Search } from "./components/Search";
import { Playlists } from "./components/Playlists";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexFlow: "column"
  }
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <SpotifyAuthProvider>
        <Switch>
          <Route exact path="/auth" component={AuthPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/another-route" render={() => <div>TESTE</div>} />
          <PrivateRoute exact path="/" component={HomePage} />
          <PrivateRoute exact path="/search" component={Search} />
          <PrivateRoute exact path="/playlists" component={Playlists} />
        </Switch>
      </SpotifyAuthProvider>
    </div>
  );
}

export default App;
