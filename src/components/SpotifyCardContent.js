import { CardContent } from "@material-ui/core";

import { withStyles } from "@material-ui/styles";

export const SpotifyCardContent = withStyles(theme => ({
  root: {
    padding: `${theme.spacing(0.5)}px ${theme.spacing(1)}px`
  }
}))(CardContent);
