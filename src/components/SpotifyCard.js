import { Card } from "@material-ui/core";

import { withStyles } from "@material-ui/styles";

export const SpotifyCard = withStyles(theme => ({
  root: {
    width: "126px",
    "&:hover": {
      backgroundColor: theme.palette.action.hover
    }
  }
}))(Card);
