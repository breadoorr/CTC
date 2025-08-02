import { z as push, E as store_get, K as slot, J as unsubscribe_stores, B as pop } from "../../../chunks/index.js";
import { p as page } from "../../../chunks/stores.js";
import "../../../chunks/languageStore.js";
import "@sveltejs/kit/internal";
import "../../../chunks/exports.js";
import "clsx";
import "../../../chunks/state.svelte.js";
function _layout($$payload, $$props) {
  push();
  var $$store_subs;
  store_get($$store_subs ??= {}, "$page", page).params.lang;
  $$payload.out.push(`<!---->`);
  slot($$payload, $$props, "default", {});
  $$payload.out.push(`<!---->`);
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _layout as default
};
