import { z as push, G as escape_html, F as attr, E as store_get, J as unsubscribe_stores, B as pop } from "../../../../chunks/index.js";
import { p as page } from "../../../../chunks/stores.js";
import { t, c as currentLang } from "../../../../chunks/languageStore.js";
import { C as ContactForm } from "../../../../chunks/ContactForm.js";
function Video($$payload, $$props) {
  push();
  var $$store_subs;
  $$payload.out.push(`<section class="page-header svelte-1yi30mw"><div class="container"><h1 class="svelte-1yi30mw">${escape_html(store_get($$store_subs ??= {}, "$t", t)("video"))}</h1></div></section> <section class="section"><div class="container"><div class="video-content svelte-1yi30mw"><div class="video-intro svelte-1yi30mw"><p class="svelte-1yi30mw">${escape_html(store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Watch our craftsmanship in action. These videos showcase our woodworking process and the quality of our products." : "Посмотрите наше мастерство в действии. Эти видео демонстрируют наш процесс деревообработки и качество нашей продукции.")}</p></div> <div class="videos-grid svelte-1yi30mw"><div class="video-container svelte-1yi30mw"><iframe src="https://www.youtube.com/embed/lWOGi36dKrU" width="100%" height="100%" style="border:0;" allowfullscreen loading="lazy"${attr("title", store_get($$store_subs ??= {}, "$t", t)("videoTitle"))}></iframe></div> <div class="video-container svelte-1yi30mw"><iframe src="https://www.youtube.com/embed/v7YqH3OGIN4" width="100%" height="100%" style="border:0;" allowfullscreen loading="lazy"${attr("title", store_get($$store_subs ??= {}, "$t", t)("videoTitle"))}></iframe></div></div></div></div></section> <section class="section contact-section svelte-1yi30mw"><div class="container"><div class="contact-container svelte-1yi30mw"><div class="contact-info svelte-1yi30mw"><h2 class="svelte-1yi30mw">${escape_html(store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Interested in Our Services?" : "Заинтересованы в наших услугах?")}</h2> <p class="svelte-1yi30mw">${escape_html(store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Contact us to discuss your project. We offer free consultations and will help you bring your vision to life." : "Свяжитесь с нами, чтобы обсудить ваш проект. Мы предлагаем бесплатные консультации и поможем воплотить вашу идею в жизнь.")}</p></div> <div class="contact-form-container">`);
  ContactForm($$payload, {
    formTitle: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Contact Us" : "Связаться с нами",
    buttonText: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Submit" : "Отправить"
  });
  $$payload.out.push(`<!----></div></div></div></section>`);
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  {
    if (store_get($$store_subs ??= {}, "$page", page).params.lang) ;
  }
  Video($$payload);
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _page as default
};
