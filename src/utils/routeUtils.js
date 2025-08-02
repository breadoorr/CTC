import { get } from 'svelte/store';
import { currentLang } from '../stores/languageStore';

/**
 * Get a language-specific route path
 * @param {string} route - The route path without language prefix
 * @param {string|null} lang - Optional language code. If not provided, uses the current language from the store
 * @returns {string} The route path with language prefix
 */
export function getLangRoute(route, lang = null) {
  const language = lang || get(currentLang);
  
  // If route already starts with a slash, don't add another one
  const routePath = route.startsWith('/') ? route : `/${route}`;
  
  return `/${language}${routePath}`;
}