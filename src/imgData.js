const images = import.meta.glob(
  "./assets/images/*.png",
  { eager: true, import: "default" }
)

export const imgData = Object.values(images).sort((a, b) =>
  a.localeCompare(b, undefined, { numeric: true })
).slice(0,14)
