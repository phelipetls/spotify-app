import { createMuiTheme } from "@material-ui/core/styles";
import { ptBR } from "@material-ui/core/locale";

export const theme = createMuiTheme(
  {
    palette: {
      primary: {
        main: "#1DB954",
        contrastText: "#FFF"
      },
      secondary: {
        main: "#E80909",
        contrastText: "#FFF"
      },
      text: {
        primary: "#FFF",
        secondary: "#B3B3B3"
      },
      background: {
        default: "#121212",
        paper: "#171717"
      },
      action: {
        active: "#B3B3B3",
        selected: "#282828",
        hover: "#232323"
      },
      divider: "rgb(128, 128, 128)"
    },
    typography: {
      subtitle1: {
        fontSize: "smaller"
      },
      subtitle2: {
        fontSize: "x-smaller"
      }
    }
  },
  ptBR
);
