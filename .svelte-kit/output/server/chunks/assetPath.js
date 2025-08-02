function getAssetPath(path) {
  if (path.startsWith("http") || path.startsWith("https") || path.startsWith("./")) {
    return path;
  }
  const base = "/";
  const cleanPath = path.startsWith("/") ? path.substring(1) : path;
  return `${base}${cleanPath}`;
}
export {
  getAssetPath as g
};
