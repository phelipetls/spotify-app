import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Navigation } from "./components/Navigation";
import { Search } from "./components/Search";
import { Playlists } from "./components/Playlists";
import { HomePage } from "./components/HomePage";

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexFlow: "column"
  }
}));

function App() {
  const classes = useStyles();

  return (
    <Router>
      <div className={classes.root}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/playlists" component={Playlists} />
        </Switch>
        <Navigation />
      </div>
    </Router>
  );
}

export default App;
