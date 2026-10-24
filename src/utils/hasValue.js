export function hasValue(v) {
  if (v === null || v === undefined) return false;
  if (typeof v === "string" && v.trim() === "") return false;
  if (typeof v === "string" && v.trim() === "TO ADD") return false;
  return true;
}