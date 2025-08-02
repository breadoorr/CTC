import { z as push, E as store_get, N as ensure_array_like, G as escape_html, F as attr, J as unsubscribe_stores, B as pop } from "../../../../../chunks/index.js";
import { p as page } from "../../../../../chunks/stores.js";
import { C as ContactForm } from "../../../../../chunks/ContactForm.js";
import { c as currentLang } from "../../../../../chunks/languageStore.js";
import { g as getAssetPath } from "../../../../../chunks/assetPath.js";
function InteriorFurniture($$payload, $$props) {
  push();
  var $$store_subs;
  const images = [
    {
      id: 1,
      src: getAssetPath("/images/indoor/2024-06-24 06-27-19_1719213072226.JPG"),
      alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Interior Furniture" : "Мебель в интерьере"
    },
    {
      id: 2,
      src: getAssetPath("/images/indoor/2024-07-06 14-43-32.JPG"),
      alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Interior Furniture" : "Мебель в интерьере"
    },
    {
      id: 3,
      src: getAssetPath("/images/indoor/2024-07-06 14-46-41.JPG"),
      alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Interior Furniture" : "Мебель в интерьере"
    },
    {
      id: 4,
      src: getAssetPath("/images/indoor/cabinet.jpg"),
      alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Cabinet" : "Шкаф"
    },
    {
      id: 5,
      src: getAssetPath("/images/indoor/shelf.jpg"),
      alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Shelf" : "Полка"
    },
    {
      id: 6,
      src: getAssetPath("/images/indoor/2024-05-11 12-36-40.JPG"),
      alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Interior Furniture" : "Мебель в интерьере"
    },
    {
      id: 7,
      src: getAssetPath("/images/indoor/2024-08-10 08-22-03.JPG"),
      alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Interior Furniture" : "Мебель в интерьере"
    },
    {
      id: 8,
      src: getAssetPath("/images/indoor/2024-08-26 13-39-44.JPG"),
      alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Interior Furniture" : "Мебель в интерьере"
    },
    {
      id: 9,
      src: getAssetPath("/images/indoor/2024-09-09 15-35-50.JPG"),
      alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Interior Furniture" : "Мебель в интерьере"
    },
    {
      id: 10,
      src: getAssetPath("/images/indoor/photo_2025-07-21_21-38-26.jpg"),
      alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Interior Furniture" : "Мебель в интерьере"
    },
    {
      id: 12,
      src: getAssetPath("/images/indoor/photo_2025-07-21_21-38-31.jpg"),
      alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Interior Furniture" : "Мебель в интерьере"
    },
    {
      id: 13,
      src: getAssetPath("/images/indoor/photo_2025-07-21_21-38-36.jpg"),
      alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Interior Furniture" : "Мебель в интерьере"
    },
    {
      id: 14,
      src: getAssetPath("/images/indoor/photo_2025-07-21_21-38-52.jpg"),
      alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Interior Furniture" : "Мебель в интерьере"
    },
    {
      id: 15,
      src: getAssetPath("/images/indoor/photo_2025-07-21_21-38-54.jpg"),
      alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Interior Furniture" : "Мебель в интерьере"
    },
    {
      id: 16,
      src: getAssetPath("/images/indoor/photo_2025-07-21_21-39-11.jpg"),
      alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Interior Furniture" : "Мебель в интерьере"
    },
    {
      id: 17,
      src: getAssetPath("/images/indoor/photo_2025-07-21_21-39-12.jpg"),
      alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Interior Furniture" : "Мебель в интерьере"
    },
    {
      id: 19,
      src: getAssetPath("/images/indoor/photo_2025-07-21_21-39-16.jpg"),
      alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Interior Furniture" : "Мебель в интерьере"
    },
    {
      id: 20,
      src: getAssetPath("/images/indoor/photo_2025-07-21_21-39-53.jpg"),
      alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Interior Furniture" : "Мебель в интерьере"
    },
    {
      id: 21,
      src: getAssetPath("/images/indoor/photo_2025-07-21_21-39-56.jpg"),
      alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Interior Furniture" : "Мебель в интерьере"
    },
    {
      id: 22,
      src: getAssetPath("/images/indoor/photo_2025-07-25_17-01-14.jpg"),
      alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Interior Furniture" : "Мебель в интерьере"
    },
    {
      id: 23,
      src: getAssetPath("/images/indoor/photo_2025-07-25_17-01-20.jpg"),
      alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Interior Furniture" : "Мебель в интерьере"
    },
    {
      id: 24,
      src: getAssetPath("/images/indoor/photo_2025-07-25_17-01-25.jpg"),
      alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Interior Furniture" : "Мебель в интерьере"
    }
  ];
  store_get($$store_subs ??= {}, "$page", page).url.pathname;
  const each_array = ensure_array_like(images);
  $$payload.out.push(`<section class="page-header svelte-11kokgt"><div class="container"><h1 class="svelte-11kokgt">${escape_html(store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Interior Furniture" : "Мебель в интерьере")}</h1></div></section> <section class="section"><div class="container"><div class="direction-intro svelte-11kokgt"><p class="svelte-11kokgt">${escape_html(store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "We create beautiful and functional interior furniture that enhances the aesthetics and comfort of your living spaces. Our custom-made pieces are designed to perfectly fit your interior and reflect your personal style. From tables and bookcases to cabinets and beds, we offer a wide range of interior furniture solutions." : "Мы создаем красивую и функциональную мебель для интерьера, которая улучшает эстетику и комфорт вашего жилого пространства. Наши изделия на заказ разработаны так, чтобы идеально вписаться в ваш интерьер и отражать ваш личный стиль. От столов и книжных шкафов до тумбочек и кроватей, мы предлагаем широкий спектр решений для мебели в интерьере.")}</p> <p class="svelte-11kokgt">${escape_html(store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "All our interior furniture is crafted from high-quality wood, with meticulous attention to detail and finish. We combine traditional woodworking techniques with modern design principles to create pieces that are both timeless and contemporary." : "Вся наша мебель для интерьера изготовлена из высококачественной древесины, с тщательным вниманием к деталям и отделке. Мы сочетаем традиционные методы деревообработки с современными принципами дизайна, чтобы создавать предметы, которые являются одновременно вневременными и современными.")}</p></div> <div class="direction-features svelte-11kokgt"><div class="feature svelte-11kokgt"><div class="feature-icon svelte-11kokgt"><svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" fill="currentColor"></path></svg></div> <div class="feature-content svelte-11kokgt"><h3 class="svelte-11kokgt">${escape_html(store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Custom Design" : "Индивидуальный дизайн")}</h3> <p class="svelte-11kokgt">${escape_html(store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "We create furniture tailored to your specific needs and preferences." : "Мы создаем мебель, адаптированную к вашим конкретным потребностям и предпочтениям.")}</p></div></div> <div class="feature svelte-11kokgt"><div class="feature-icon svelte-11kokgt"><svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z" fill="currentColor"></path></svg></div> <div class="feature-content svelte-11kokgt"><h3 class="svelte-11kokgt">${escape_html(store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Quality Materials" : "Качественные материалы")}</h3> <p class="svelte-11kokgt">${escape_html(store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "We use only the finest wood and hardware for our furniture." : "Мы используем только лучшую древесину и фурнитуру для нашей мебели.")}</p></div></div> <div class="feature svelte-11kokgt"><div class="feature-icon svelte-11kokgt"><svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM9 17H7V10H9V17ZM13 17H11V7H13V17ZM17 17H15V13H17V17Z" fill="currentColor"></path></svg></div> <div class="feature-content svelte-11kokgt"><h3 class="svelte-11kokgt">${escape_html(store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Functionality" : "Функциональность")}</h3> <p class="svelte-11kokgt">${escape_html(store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Our furniture combines aesthetics with practical functionality." : "Наша мебель сочетает в себе эстетику с практической функциональностью.")}</p></div></div></div> <div class="gallery-grid svelte-11kokgt"><!--[-->`);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let image = each_array[$$index];
    $$payload.out.push(`<div class="gallery-item svelte-11kokgt"><img${attr("src", image.src)}${attr("alt", image.alt)} class="svelte-11kokgt"/> <div class="gallery-item-overlay svelte-11kokgt"><span class="view-icon svelte-11kokgt">+</span></div></div>`);
  }
  $$payload.out.push(`<!--]--></div></div></section> <section class="section contact-section svelte-11kokgt"><div class="container"><div class="contact-container svelte-11kokgt"><div class="contact-info svelte-11kokgt"><h2 class="svelte-11kokgt">${escape_html(store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Interested in our interior furniture?" : "Заинтересованы в нашей мебели для интерьера?")}</h2> <p class="svelte-11kokgt">${escape_html(store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Contact us to discuss your project. We offer custom interior furniture solutions tailored to your specific needs and preferences." : "Свяжитесь с нами, чтобы обсудить ваш проект. Мы предлагаем индивидуальные решения для мебели в интерьере, адаптированные к вашим конкретным потребностям и предпочтениям.")}</p></div> <div class="contact-form-container">`);
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
  InteriorFurniture($$payload);
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _page as default
};
