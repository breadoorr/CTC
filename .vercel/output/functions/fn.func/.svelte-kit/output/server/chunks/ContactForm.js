import { z as push, Q as fallback, I as attr_class, G as escape_html, F as attr, E as store_get, J as unsubscribe_stores, R as bind_props, B as pop, P as stringify } from "./index.js";
import { t } from "./languageStore.js";
/* empty css                                          */
function ContactForm($$payload, $$props) {
  push();
  var $$store_subs;
  let formTitle = fallback($$props["formTitle"], () => store_get($$store_subs ??= {}, "$t", t)("leaveRequest"), true);
  let buttonText = fallback($$props["buttonText"], () => store_get($$store_subs ??= {}, "$t", t)("submit"), true);
  let isModal = fallback($$props["isModal"], false);
  let name = "";
  let phone = "";
  let message = "";
  let isSubmitting = false;
  $$payload.out.push(`<div${attr_class(`contact-form ${stringify(isModal ? "modal" : "")}`, "svelte-1qfw87x")}>`);
  if (isModal) {
    $$payload.out.push("<!--[-->");
    $$payload.out.push(`<button class="close-btn svelte-1qfw87x">×</button>`);
  } else {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--> <h3 class="svelte-1qfw87x">${escape_html(formTitle)}</h3> `);
  {
    $$payload.out.push("<!--[!-->");
    $$payload.out.push(`<form>`);
    {
      $$payload.out.push("<!--[!-->");
    }
    $$payload.out.push(`<!--]--> <div class="form-group"><input type="text" id="name" class="form-control"${attr("placeholder", store_get($$store_subs ??= {}, "$t", t)("yourName"))}${attr("value", name)} required/></div> <div class="form-group"><input type="tel" id="phone" class="form-control"${attr("placeholder", store_get($$store_subs ??= {}, "$t", t)("yourPhone"))}${attr("value", phone)} required/></div> <div class="form-group"><textarea id="message" class="form-control"${attr("placeholder", store_get($$store_subs ??= {}, "$t", t)("message"))} rows="4">`);
    const $$body = escape_html(message);
    if ($$body) {
      $$payload.out.push(`${$$body}`);
    }
    $$payload.out.push(`</textarea></div> <button type="submit" class="btn svelte-1qfw87x"${attr("disabled", isSubmitting, true)}>${escape_html(buttonText)}</button></form>`);
  }
  $$payload.out.push(`<!--]--></div>`);
  if ($$store_subs) unsubscribe_stores($$store_subs);
  bind_props($$props, { formTitle, buttonText, isModal });
  pop();
}
export {
  ContactForm as C
};
