import { Typography } from "@material-ui/core";

export function SpotifyCardTitle({ children }) {
  return (
    <Typography variant="subtitle1" color="textPrimary" noWrap>
      {children}
    </Typography>
  );
}
