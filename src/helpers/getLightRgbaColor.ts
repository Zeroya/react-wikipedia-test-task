export function getLightRgbaColor(): string {
  const r = Math.floor(Math.random() * (256 - 200) + 200);
  const g = Math.floor(Math.random() * (256 - 200) + 200);
  const b = Math.floor(Math.random() * (256 - 200) + 200);
  const a = 0.3;

  return `rgba(${r}, ${g}, ${b}, ${a})`;
}
