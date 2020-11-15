import React from "react";

import { Link, Typography } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

import { useParams } from "react-router-dom";

import axios from "axios";
import { useSpotifyQuery } from "./hooks/spotify-query";

import { AlbumTracks } from "./AlbumTracks";

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  albumImg: {
    height: "130px",
    objectFit: "cover",
    borderRadius: "50%",
    display: "block",
    margin: `${theme.spacing(2)}px auto`
  }
}));

export function Album() {
  const classes = useStyles();

  const { id } = useParams();

  const { isLoading, data = {} } = useSpotifyQuery(
    ["Fetch album metadata", { id }],
    () => axios(`/albums/${id}`)
  );

  const album = data?.data || {};

  return (
    <>
      {isLoading ? (
        <Skeleton variant="circle" width={130} className={classes.albumImg} />
      ) : (
        <img
          alt={`Imagem do álbum ${album.name} de ${album.artists[0].name}`}
          src={album.images[0].url}
          className={classes.albumImg}
        />
      )}

      <Typography
        align="center"
        variant="caption"
        component="h2"
        noWrap
        gutterBottom
      >
        {isLoading ? (
          <Skeleton />
        ) : (
          <Link
            color="inherit"
            underline="none"
            href={album.external_urls.spotify}
          >
            {album.name}
          </Link>
        )}
      </Typography>

      <Typography
        align="center"
        color="textSecondary"
        variant="subtitle1"
        noWrap
      >
        {isLoading ? (
          <Skeleton />
        ) : (
          <Link
            color="inherit"
            underline="none"
            href={album.artists[0].external_urls.spotify}
          >
            {album.artists[0].name}
          </Link>
        )}
      </Typography>

      <AlbumTracks id={id} name={album.name} />
    </>
  );
}
