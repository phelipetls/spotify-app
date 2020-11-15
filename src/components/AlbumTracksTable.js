import React, { useState } from "react";

import {
  Link,
  Table,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  Toolbar,
  Typography,
  Checkbox
} from "@material-ui/core";

import { AddToPlaylistButton } from "./AddToPlaylistButton";

import { formatDuration } from "./utils/formatDuration";

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(2)
  },
  toolbar: {},
  toolbarTitle: {
    flex: "1 1 100%"
  },
  table: {
    "& td": {
      borderColor: theme.palette.action.selected
    },
    "& th": {
      fontWeight: "bold",
      borderColor: theme.palette.divider
    }
  }
}));

function isArrayEqual(arr1, arr2) {
  arr1.length === arr2.length && arr1.every(item => arr2.includes(item));
}

export function AlbumTracksTable(props) {
  const classes = useStyles();

  const { tracks } = props;

  const [selected, setSelected] = useState([]);

  const handleClick = (e, id) => {
    if (selected.includes(id)) {
      setSelected(selected => selected.filter(trackId => trackId !== id));
    } else {
      setSelected(selected => selected.concat(id));
    }
  };

  const allTracksIds = tracks.map(track => track.id);

  const handleSelectAll = e => {
    setSelected(e.target.checked ? allTracksIds : []);
  };

  return (
    <>
      <Toolbar component="div" className={classes.toolbar}>
        <Typography
          color="inherit"
          variant="h6"
          component="div"
          className={classes.toolbarTitle}
        >
          Faixas
        </Typography>

        <AddToPlaylistButton tracks={selected} />
      </Toolbar>

      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox">
              <Checkbox
                color="primary"
                checked={isArrayEqual(selected, allTracksIds)}
                onClick={handleSelectAll}
                inputProps={{ "aria-label": "Selecionar todas as faixas" }}
              />
            </TableCell>
            <TableCell>#</TableCell>
            <TableCell>Nome</TableCell>
            <TableCell>Duração</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {tracks.map(track => (
            <TableRow>
              <TableCell
                padding="checkbox"
                onClick={e => handleClick(e, track.id)}
              >
                <Checkbox
                  color="primary"
                  checked={selected.includes(track.id)}
                />
              </TableCell>
              <TableCell>{track.number}</TableCell>
              <TableCell>
                <Link color="inherit" underline="none" href={track.spotify_url}>
                  {track.name}
                </Link>
              </TableCell>
              <TableCell align="right">
                {formatDuration(track.duration)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
