import React, { useState } from "react";

import { useLocation } from "react-router-dom";

import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import { Home, QueueMusic, Search } from "@material-ui/icons";

import { Link as RouterLink } from "react-router-dom";

export function NavigationBottom() {
  // The initial value must be dependent on the current URL. If the user goes
  // to '/search', the initial value should then be 'search'.
  const location = useLocation();

  const [value, setValue] = useState(location.pathname.slice(1));

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      showLabels
      data-testid="navigation-bottom"
    >
      <BottomNavigationAction
        component={RouterLink}
        value=""
        to="/"
        label="Início"
        icon={<Home />}
      />
      <BottomNavigationAction
        component={RouterLink}
        value="search"
        to="/search"
        label="Pesquisar"
        icon={<Search />}
      />
      <BottomNavigationAction
        component={RouterLink}
        value="playlists"
        to="/playlists"
        label="Playlists"
        icon={<QueueMusic />}
      />
    </BottomNavigation>
  );
}
