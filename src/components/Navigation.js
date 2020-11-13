import React from "react";

import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import { Home, QueueMusic, Search } from "@material-ui/icons";

import { Link as RouterLink } from "react-router-dom";

export function Navigation() {
  const [value, setValue] = React.useState(0);

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      showLabels
      data-testid="navigation"
    >
      <BottomNavigationAction
        component={RouterLink}
        to="/"
        label="Home"
        icon={<Home />}
      />
      <BottomNavigationAction
        component={RouterLink}
        to="/search"
        label="Search"
        icon={<Search />}
      />
      <BottomNavigationAction
        component={RouterLink}
        to="/playlists"
        label="Playlists"
        icon={<QueueMusic />}
      />
    </BottomNavigation>
  );
}
