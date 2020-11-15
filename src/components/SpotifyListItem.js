import React from "react";

import {
  ListItem,
  ListItemText,
  ListItemAvatar,
  ListItemSecondaryAction,
  Avatar,
  Typography
} from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

import { AddToPlaylistButton } from "./AddToPlaylistButton";

export function SpotifyListItem(props) {
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
      {item.type === "track" && (
        <ListItemSecondaryAction>
          <AddToPlaylistButton item={item} />
        </ListItemSecondaryAction>
      )}
    </ListItem>
  );
}
