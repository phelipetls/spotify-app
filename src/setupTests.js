// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

// Configuring nock to work with axios
// see https://www.npmjs.com/package/nock#axios
import axios from "axios";
import nock from "nock";
import http from "axios/lib/adapters/http";

axios.defaults.adapter = http;

nock("https://api.spotify.com/v1")
  .get("/me")
  .replyWithFile(200, __dirname + "/replies/me.json");

nock("https://api.spotify.com/v1")
  .get("/me/top/tracks")
  .replyWithFile(200, __dirname + "/replies/me-top-tracks.json");

nock("https://api.spotify.com/v1")
  .get("/me/top/artists")
  .replyWithFile(200, __dirname + "/replies/me-top-artists.json");
