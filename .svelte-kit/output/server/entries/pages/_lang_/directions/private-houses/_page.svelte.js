import { z as push, E as store_get, N as ensure_array_like, G as escape_html, F as attr, J as unsubscribe_stores, B as pop } from "../../../../../chunks/index.js";
import { p as page } from "../../../../../chunks/stores.js";
import { c as currentLang } from "../../../../../chunks/languageStore.js";
import { C as ContactForm } from "../../../../../chunks/ContactForm.js";
import { g as getAssetPath } from "../../../../../chunks/assetPath.js";
function PrivateHomes($$payload, $$props) {
  push();
  var $$store_subs;
  const images = [
    {
      id: 1,
      src: getAssetPath("/images/house/33bd0883de8e84637a5259827d798d53cedc01f1.jpeg"),
      alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Private Residential Home" : "Частный жилой дом",
      category: "private-houses"
    },
    {
      id: 2,
      src: getAssetPath("/images/house/a4f1748b8d0ba362d3ddb23f529e98b6.jpg"),
      alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Private Residential Home" : "Частный жилой дом",
      category: "private-houses"
    },
    {
      id: 3,
      src: getAssetPath("/images/house/house(1).jpg"),
      alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Private Residential Home" : "Частный жилой дом",
      category: "private-houses"
    },
    {
      id: 4,
      src: getAssetPath("/images/house/house(2).jpg"),
      alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Private Residential Home" : "Частный жилой дом",
      category: "private-houses"
    },
    {
      id: 5,
      src: getAssetPath("/images/house/house(3).jpg"),
      alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Private Residential Home" : "Частный жилой дом",
      category: "private-houses"
    },
    {
      id: 6,
      src: getAssetPath("/images/house/house(4).jpg"),
      alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Private Residential Home" : "Частный жилой дом",
      category: "private-houses"
    }
  ];
  store_get($$store_subs ??= {}, "$page", page).url.pathname;
  const each_array = ensure_array_like(images);
  $$payload.out.push(`<section class="page-header svelte-11kokgt"><div class="container"><h1 class="svelte-11kokgt">${escape_html(store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Private Residential Homes" : "Частные жилые дома")}</h1></div></section> <section class="section"><div class="container"><div class="direction-intro svelte-11kokgt"><p class="svelte-11kokgt">${escape_html(store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "We design and build custom private residential homes that reflect your personal style and meet your specific needs. From concept to completion, our team of experts will work with you to create a home that is both beautiful and functional." : "Мы проектируем и строим индивидуальные частные жилые дома, которые отражают ваш личный стиль и соответствуют вашим конкретным потребностям. От концепции до завершения, наша команда экспертов будет работать с вами, чтобы создать дом, который будет как красивым, так и функциональным.")}</p></div> <div class="direction-features svelte-11kokgt"><div class="feature svelte-11kokgt"><div class="feature-icon svelte-11kokgt"><svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 3L1 9L5 11.18V17.18L12 21L19 17.18V11.18L21 10.09V17H23V9L12 3ZM18.82 9L12 12.72L5.18 9L12 5.28L18.82 9ZM17 15.99L12 18.72L7 15.99V12.27L12 15L17 12.27V15.99Z" fill="currentColor"></path></svg></div> <div class="feature-content svelte-11kokgt"><h3 class="svelte-11kokgt">${escape_html(store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Custom Design" : "Индивидуальный дизайн")}</h3> <p class="svelte-11kokgt">${escape_html(store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "We create homes tailored to your specific needs, preferences, and lifestyle." : "Мы создаем дома, адаптированные к вашим конкретным потребностям, предпочтениям и образу жизни.")}</p></div></div> <div class="feature svelte-11kokgt"><div class="feature-icon svelte-11kokgt"><svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z" fill="currentColor"></path></svg></div> <div class="feature-content svelte-11kokgt"><h3 class="svelte-11kokgt">${escape_html(store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Quality Materials" : "Качественные материалы")}</h3> <p class="svelte-11kokgt">${escape_html(store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "We use only the finest materials for our residential home projects." : "Мы используем только лучшие материалы для наших проектов жилых домов.")}</p></div></div> <div class="feature svelte-11kokgt"><div class="feature-icon svelte-11kokgt"><svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM9 17H7V10H9V17ZM13 17H11V7H13V17ZM17 17H15V13H17V17Z" fill="currentColor"></path></svg></div> <div class="feature-content svelte-11kokgt"><h3 class="svelte-11kokgt">${escape_html(store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Full Service" : "Полный сервис")}</h3> <p class="svelte-11kokgt">${escape_html(store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "From concept to completion, we handle every aspect of your residential home project." : "От концепции до завершения, мы занимаемся всеми аспектами вашего проекта жилого дома.")}</p></div></div></div> <h2>${escape_html(store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Our Projects" : "Наши проекты")}</h2> <div class="gallery-grid svelte-11kokgt"><!--[-->`);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let image = each_array[$$index];
    $$payload.out.push(`<div class="gallery-item svelte-11kokgt"><img${attr("src", image.src)}${attr("alt", image.alt)} class="svelte-11kokgt"/> <div class="gallery-item-overlay svelte-11kokgt"><span class="view-icon svelte-11kokgt">+</span></div></div>`);
  }
  $$payload.out.push(`<!--]--></div></div></section> <section class="section contact-section svelte-11kokgt"><div class="container"><div class="contact-container svelte-11kokgt"><div class="contact-info svelte-11kokgt"><h2 class="svelte-11kokgt">${escape_html(store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Ready to Build Your Dream Home?" : "Готовы построить дом своей мечты?")}</h2> <p class="svelte-11kokgt">${escape_html(store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Contact us to discuss your residential home project. We offer free consultations and will help you bring your vision to life." : "Свяжитесь с нами, чтобы обсудить ваш проект жилого дома. Мы предлагаем бесплатные консультации и поможем воплотить вашу идею в жизнь.")}</p></div> <div class="contact-form-container">`);
  ContactForm($$payload, {
    formTitle: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Contact Us" : "Связаться с нами",
    buttonText: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Submit" : "Отправить"
  });
  $$payload.out.push(`<!----></div></div></div></section> `);
  {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--> `);
  {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]-->`);
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  {
    if (store_get($$store_subs ??= {}, "$page", page).params.lang) ;
  }
  PrivateHomes($$payload);
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _page as default
};
