export const toTitleCase = word => {
  return word
    .split("-")
    .map(word => {
      return word
        .charAt(0)
        .toUpperCase()
        .concat(word.split("").slice(1).join(""))
    })
    .join(" ")
}
