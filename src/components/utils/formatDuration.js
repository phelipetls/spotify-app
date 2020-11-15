function padNumber(number) {
  return String(number).padStart(2, "0");
}

export function formatDuration(milliseconds) {
  const minutes = new Date(milliseconds).getMinutes();
  const seconds = new Date(milliseconds).getSeconds();
  return `${padNumber(minutes)}:${padNumber(seconds)}`;
}
