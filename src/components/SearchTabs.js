import React from "react";

import { Tabs, Tab } from "@material-ui/core";

import { withStyles } from "@material-ui/styles";

const SmallerTab = withStyles({
  root: {
    minWidth: 0,
    flex: 1
  }
})(Tab);

export function SearchTabs({ tab, handleChange }) {
  return (
    <Tabs
      value={tab}
      onChange={handleChange}
      aria-label="Tipo de procura"
      indicatorColor="primary"
      textColor="primary"
    >
      <SmallerTab value="artist" label="Artista" />
      <SmallerTab value="album" label="Álbum" />
      <SmallerTab value="track" label="Faixas" />
    </Tabs>
  );
}
