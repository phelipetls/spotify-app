import { Typography } from "@material-ui/core";

export function SpotifyCardSubtitle({ children }) {
  return (
    <Typography variant="subtitle2" color="textSecondary" noWrap>
      {children}
    </Typography>
  );
}
