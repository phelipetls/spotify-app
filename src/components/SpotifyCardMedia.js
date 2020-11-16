import { CardMedia } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { Skeleton } from "@material-ui/lab";

const useStyles = makeStyles(theme => ({
  root: {
    height: "110px",
    width: "110px",
    margin: theme.spacing(1)
  }
}));

export function SpotifyCardMedia(props) {
  const classes = useStyles();

  return <CardMedia component="img" className={classes.root} {...props} />;
}

export function SpotifyCardMediaSkeleton(props) {
  const classes = useStyles();

  return <Skeleton variant="rect" className={classes.root} />;
}
