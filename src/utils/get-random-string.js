export const getRandomString = length => {
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  return Array.from({ length })
    .map(() => possible[Math.floor(Math.random() * possible.length)])
    .join("");
};
