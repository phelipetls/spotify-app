export function formatMilliseconds(milliseconds) {
  const minutes = new Date(milliseconds).getMinutes();
  const seconds = new Date(milliseconds).getSeconds();
  return `${minutes}:${seconds}`;
}
