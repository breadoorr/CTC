import { z as push, E as store_get, N as ensure_array_like, G as escape_html, F as attr, J as unsubscribe_stores, B as pop } from "../../../../../chunks/index.js";
import { p as page } from "../../../../../chunks/stores.js";
import { C as ContactForm } from "../../../../../chunks/ContactForm.js";
import { c as currentLang } from "../../../../../chunks/languageStore.js";
import { g as getAssetPath } from "../../../../../chunks/assetPath.js";
function OutdoorFurniture($$payload, $$props) {
  push();
  var $$store_subs;
  const images = [
    {
      id: 1,
      src: getAssetPath("/images/outdoor furniture/2024-04-11 11-18-49.JPG"),
      alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Outdoor Furniture" : "Уличная мебель"
    },
    {
      id: 2,
      src: getAssetPath("/images/outdoor furniture/2024-04-11 11-18-53.JPG"),
      alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Outdoor Furniture" : "Уличная мебель"
    },
    {
      id: 3,
      src: getAssetPath("/images/outdoor furniture/2024-04-11 11-19-20.JPG"),
      alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Outdoor Furniture" : "Уличная мебель"
    },
    {
      id: 4,
      src: getAssetPath("/images/outdoor furniture/2024-05-13 12-08-37.JPG"),
      alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Outdoor Furniture" : "Уличная мебель"
    },
    {
      id: 6,
      src: getAssetPath("/images/outdoor furniture/2024-06-20 16-13-00.JPG"),
      alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Outdoor Furniture" : "Уличная мебель"
    },
    {
      id: 9,
      src: getAssetPath("/images/outdoor furniture/2024-06-21 16-36-31.JPG"),
      alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Outdoor Furniture" : "Уличная мебель"
    },
    {
      id: 11,
      src: getAssetPath("/images/outdoor furniture/2024-06-21 16-37-11.JPG"),
      alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Outdoor Furniture" : "Уличная мебель"
    },
    {
      id: 12,
      src: getAssetPath("/images/outdoor furniture/2024-06-21 16-37-11 (1).JPG"),
      alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Outdoor Furniture" : "Уличная мебель"
    },
    {
      id: 13,
      src: getAssetPath("/images/outdoor furniture/2024-06-24 06-27-19.JPG"),
      alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Outdoor Furniture" : "Уличная мебель"
    },
    {
      id: 14,
      src: getAssetPath("/images/outdoor furniture/2024-06-24 06-27-19_1719213059979.JPG"),
      alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Outdoor Furniture" : "Уличная мебель"
    },
    {
      id: 15,
      src: getAssetPath("/images/outdoor furniture/2024-06-24 06-27-19_1719213080407.JPG"),
      alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Outdoor Furniture" : "Уличная мебель"
    },
    {
      id: 16,
      src: getAssetPath("/images/outdoor furniture/2024-06-24 06-48-06.JPG"),
      alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Outdoor Furniture" : "Уличная мебель"
    },
    {
      id: 17,
      src: getAssetPath("/images/outdoor furniture/2024-07-20 13-39-55.JPG"),
      alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Outdoor Furniture" : "Уличная мебель"
    },
    {
      id: 18,
      src: getAssetPath("/images/outdoor furniture/2024-07-20 13-40-13.JPG"),
      alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Outdoor Furniture" : "Уличная мебель"
    },
    {
      id: 21,
      src: getAssetPath("/images/outdoor furniture/chair.jpg"),
      alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Outdoor Chair" : "Уличный стул"
    },
    {
      id: 22,
      src: getAssetPath("/images/outdoor furniture/photo_2025-07-01_07-07-40.jpg"),
      alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Outdoor Furniture" : "Уличная мебель"
    },
    {
      id: 23,
      src: getAssetPath("/images/outdoor furniture/photo_2025-07-01_07-07-40 (2).jpg"),
      alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Outdoor Furniture" : "Уличная мебель"
    },
    {
      id: 24,
      src: getAssetPath("/images/outdoor furniture/photo_2025-07-01_07-07-40 (3).jpg"),
      alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Outdoor Furniture" : "Уличная мебель"
    },
    {
      id: 25,
      src: getAssetPath("/images/outdoor furniture/photo_2025-07-21_21-39-49.jpg"),
      alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Outdoor Furniture" : "Уличная мебель"
    },
    {
      id: 26,
      src: getAssetPath("/images/outdoor furniture/photo_2025-07-21_21-39-50.jpg"),
      alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Outdoor Furniture" : "Уличная мебель"
    },
    {
      id: 27,
      src: getAssetPath("/images/outdoor furniture/photo_2025-07-26_15-39-24.jpg"),
      alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Outdoor Furniture" : "Уличная мебель"
    },
    {
      id: 29,
      src: getAssetPath("/images/outdoor furniture/photo_2025-07-26_15-39-29.jpg"),
      alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Outdoor Furniture" : "Уличная мебель"
    },
    {
      id: 30,
      src: getAssetPath("/images/outdoor furniture/photo_2025-07-26_15-39-32.jpg"),
      alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Outdoor Furniture" : "Уличная мебель"
    }
  ];
  store_get($$store_subs ??= {}, "$page", page).url.pathname;
  const each_array = ensure_array_like(images);
  $$payload.out.push(`<section class="page-header svelte-11kokgt"><div class="container"><h1 class="svelte-11kokgt">${escape_html(store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Outdoor Furniture" : "Уличная мебель")}</h1></div></section> <section class="section"><div class="container"><div class="direction-intro svelte-11kokgt"><p class="svelte-11kokgt">${escape_html(store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "We create high-quality outdoor furniture that combines durability, comfort, and style. Our products are designed to withstand various weather conditions while maintaining their aesthetic appeal. From loungers and chairs to children's playhouses, we offer a wide range of outdoor furniture solutions." : "Мы создаем высококачественную уличную мебель, сочетающую в себе прочность, комфорт и стиль. Наши изделия разработаны для противостояния различным погодным условиям, сохраняя при этом свою эстетическую привлекательность. От шезлонгов и кресел до детских домиков, мы предлагаем широкий спектр решений для уличной мебели.")}</p> <p class="svelte-11kokgt">${escape_html(store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "All our outdoor furniture is made from carefully selected wood species that are resistant to moisture, sun exposure, and temperature changes. We use special treatments and finishes to enhance the natural durability of the wood and ensure long-lasting performance." : "Вся наша уличная мебель изготовлена из тщательно отобранных пород дерева, устойчивых к влаге, воздействию солнца и перепадам температур. Мы используем специальные обработки и покрытия, чтобы усилить естественную прочность дерева и обеспечить долговечность изделий.")}</p></div> <div class="direction-features svelte-11kokgt"><div class="feature svelte-11kokgt"><div class="feature-icon svelte-11kokgt"><svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" fill="currentColor"></path></svg></div> <div class="feature-content svelte-11kokgt"><h3 class="svelte-11kokgt">${escape_html(store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Weather Resistant" : "Устойчивость к погодным условиям")}</h3> <p class="svelte-11kokgt">${escape_html(store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Our outdoor furniture is designed to withstand sun, rain, and temperature changes." : "Наша уличная мебель разработана для противостояния солнцу, дождю и перепадам температур.")}</p></div></div> <div class="feature svelte-11kokgt"><div class="feature-icon svelte-11kokgt"><svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z" fill="currentColor"></path></svg></div> <div class="feature-content svelte-11kokgt"><h3 class="svelte-11kokgt">${escape_html(store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Comfort and Style" : "Комфорт и стиль")}</h3> <p class="svelte-11kokgt">${escape_html(store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "We prioritize both comfort and aesthetics in our designs." : "Мы уделяем приоритетное внимание как комфорту, так и эстетике в наших дизайнах.")}</p></div></div> <div class="feature svelte-11kokgt"><div class="feature-icon svelte-11kokgt"><svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM9 17H7V10H9V17ZM13 17H11V7H13V17ZM17 17H15V13H17V17Z" fill="currentColor"></path></svg></div> <div class="feature-content svelte-11kokgt"><h3 class="svelte-11kokgt">${escape_html(store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Durability" : "Долговечность")}</h3> <p class="svelte-11kokgt">${escape_html(store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Our furniture is built to last for many years with proper care." : "Наша мебель создана для того, чтобы служить долгие годы при правильном уходе.")}</p></div></div></div> <div class="gallery-grid svelte-11kokgt"><!--[-->`);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let image = each_array[$$index];
    $$payload.out.push(`<div class="gallery-item svelte-11kokgt"><img${attr("src", image.src)}${attr("alt", image.alt)} class="svelte-11kokgt"/> <div class="gallery-item-overlay svelte-11kokgt"><span class="view-icon svelte-11kokgt">+</span></div></div>`);
  }
  $$payload.out.push(`<!--]--></div></div></section> <section class="section contact-section svelte-11kokgt"><div class="container"><div class="contact-container svelte-11kokgt"><div class="contact-info svelte-11kokgt"><h2 class="svelte-11kokgt">${escape_html(store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Interested in our outdoor furniture?" : "Заинтересованы в нашей уличной мебели?")}</h2> <p class="svelte-11kokgt">${escape_html(store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Contact us to discuss your project. We offer custom outdoor furniture solutions tailored to your specific needs and preferences." : "Свяжитесь с нами, чтобы обсудить ваш проект. Мы предлагаем индивидуальные решения для уличной мебели, адаптированные к вашим конкретным потребностям и предпочтениям.")}</p></div> <div class="contact-form-container">`);
  ContactForm($$payload, {
    formTitle: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Request a Consultation" : "Запросить консультацию",
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
  OutdoorFurniture($$payload);
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _page as default
};
