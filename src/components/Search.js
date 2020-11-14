// Spotify documentation at
// https://developer.spotify.com/documentation/web-api/reference/search/search/
import React from "react";

import {
  TextField,
  Tabs,
  Tab,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography
} from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

import { useSpotifySearch } from "./hooks/spotify-search";

import { makeStyles, withStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  search: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(1),
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.paper
  },
  searchInput: {}
}));

const SmallerTab = withStyles({
  root: {
    minWidth: 0,
    flex: 1
  }
})(Tab);

const pluralize = word => word + "s";

const SearchTabs = ({ tab, handleChange }) => {
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
};

const placeholderSearchResults = Array.from({ length: 10 }).map((_, index) => ({
  id: index
}));

export function Search() {
  const classes = useStyles();

  const [
    query,
    setQuery,
    searchType,
    setSearchType,
    { data, isLoading }
  ] = useSpotifySearch();

  const items = data?.data?.[pluralize(searchType)]?.items || [];

  const searchResults =
    items.length > 0
      ? items.map(item => ({
          title: item.name,
          image: searchType === "track" ? item.album.images[0] : item.images[0],
          id: item.id,
          spotify_url: item.external_urls.spotify,
          subtitle: searchType !== "artist" ? item.artists[0].name : ""
        }))
      : placeholderSearchResults;

  const handleChangeSearchType = (_, newSearchType) => {
    setSearchType(newSearchType);
  };

  const handleChangeQuery = e => {
    setQuery(e.target.value);
  };

  return (
    <>
      <SearchTabs tab={searchType} handleChange={handleChangeSearchType} />

      <TextField
        required
        fullWidth
        value={query}
        onChange={handleChangeQuery}
        margin="dense"
        type="text"
        label="Pesquisar"
        variant="outlined"
        className={classes.search}
        inputProps={{
          className: classes.searchInput
        }}
      />

      <List>
        {searchResults.map(result => (
          <SearchResultListItem
            key={result.id}
            isLoading={isLoading}
            item={result}
          />
        ))}
      </List>
    </>
  );
}

const SearchResultListItem = props => {
  const { item, isLoading } = props;

  const avatar = isLoading ? (
    <Skeleton variant="circle">
      <Avatar />
    </Skeleton>
  ) : (
    <Avatar alt={item.title} src={item.image?.url} />
  );

  const text = isLoading ? (
    <Typography variant="body1" style={{ width: "100%" }}>
      <Skeleton variant="rect" />
    </Typography>
  ) : (
    <ListItemText primary={item.title} secondary={item.subtitle} />
  );

  return (
    <ListItem>
      <ListItemAvatar>{avatar}</ListItemAvatar>
      {text}
    </ListItem>
  );
};
