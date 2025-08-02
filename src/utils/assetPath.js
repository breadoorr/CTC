// Utility function to handle asset paths correctly with the base path
// This ensures that assets are loaded correctly when deployed to GitHub Pages

/**
 * Prepends the correct base path to asset URLs
 * @param {string} path - The asset path (should start with '/')
 * @returns {string} - The corrected path with the base path prepended if needed
 */
export function getAssetPath(path) {
  // If the path already includes the base path or is an absolute URL, return it as is
  if (path.startsWith('http') || path.startsWith('https') || path.startsWith('./')) {
    return path;
  }

  // For paths that start with '/', ensure they work with the base path
  const base = import.meta.env.BASE_URL || '/';

  // Remove the leading slash from the path if the base path already has a trailing slash
  const cleanPath = path.startsWith('/') ? path.substring(1) : path;

  // Remove any language prefix from the path
  // This is the key fix - we need to ensure no language code is in the asset path
  const pathWithoutLang = cleanPath.replace(/^(en|ru)\//, '');

  // Combine the base path with the clean path (without language prefix)
  return `${base}${pathWithoutLang}`;
}