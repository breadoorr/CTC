import { j as get } from "./exports.js";
import { c as currentLang } from "./languageStore.js";
function getLangRoute(route, lang = null) {
  const language = lang || get(currentLang);
  const routePath = route.startsWith("/") ? route : `/${route}`;
  return `/${language}${routePath}`;
}
export {
  getLangRoute as g
};
