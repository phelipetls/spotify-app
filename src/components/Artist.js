import React from "react";

import { Typography } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

import { useParams } from "react-router-dom";

import axios from "axios";
import { useSpotifyQuery } from "./hooks/spotify-query";

import { ArtistAlbums } from "./ArtistAlbums";
import { ArtistTopTracks } from "./ArtistTopTracks";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  artistImg: {
    height: "20vh",
    width: "100%",
    objectFit: "cover"
  }
}));

/**
 * A page to show artist informations such as top tracks and albums.
 *
 */
export function Artist() {
  const classes = useStyles();

  const { id } = useParams();

  const { isLoading, data = {} } = useSpotifyQuery(
    ["Fetch artist metadata", { id }],
    () => axios(`/artists/${id}`)
  );

  const artist = data?.data || {};

  return (
    <>
      {isLoading ? (
        <Skeleton variant="rect" height="20vh" />
      ) : (
        <img
          alt={`Imagem de ${artist.name}`}
          src={artist.images[0].url}
          className={classes.artistImg}
        />
      )}

      <Typography variant="h5" component="h2">
        {isLoading ? <Skeleton /> : artist.name}
      </Typography>

      <Typography color="textSecondary" gutterBottom>
        {isLoading ? (
          <Skeleton />
        ) : (
          `${new Intl.NumberFormat().format(
            artist.followers.total
          )} seguidores · ${artist.genres.slice(0, 3).join(", ")}...`
        )}
      </Typography>

      <ArtistAlbums id={id} />
      <ArtistTopTracks id={id} name={artist.name} />
    </>
  );
}

export default Artist;
