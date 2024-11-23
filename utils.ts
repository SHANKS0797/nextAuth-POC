export const toSentenceCase = (s: string) => {
  return s
    .toLocaleLowerCase()
    .split(" ")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
};
