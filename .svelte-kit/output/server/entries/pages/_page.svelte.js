import "clsx";
import { z as push, B as pop } from "../../chunks/index.js";
import "@sveltejs/kit/internal";
import "../../chunks/exports.js";
import "../../chunks/state.svelte.js";
import "../../chunks/languageStore.js";
function _page($$payload, $$props) {
  push();
  $$payload.out.push(`<div>Redirecting...</div>`);
  pop();
}
export {
  _page as default
};
