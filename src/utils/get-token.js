export function getToken(url) {
  if (!url.hash) return "";
  return url.hash.match(/access_token=([^&]+)/)[1];
}
