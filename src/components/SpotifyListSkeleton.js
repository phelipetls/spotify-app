import React from "react";

import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography
} from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

export function SpotifyListSkeleton({ length = 10 }) {
  return (
    <List>
      {Array.from({ length }).map((_, id) => (
        <ListItem key={id}>
          <ListItemAvatar>
            <Skeleton variant="circle">
              <Avatar />
            </Skeleton>
          </ListItemAvatar>

          <ListItemText>
            <Typography variant="body1" style={{ width: "100%" }}>
              <Skeleton variant="rect" />
            </Typography>
          </ListItemText>
        </ListItem>
      ))}
    </List>
  );
}
