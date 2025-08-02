import { z as push, E as store_get, N as ensure_array_like, G as escape_html, F as attr, I as attr_class, P as stringify, J as unsubscribe_stores, B as pop } from "../../../../../chunks/index.js";
import { p as page } from "../../../../../chunks/stores.js";
import { c as currentLang } from "../../../../../chunks/languageStore.js";
import { C as ContactForm } from "../../../../../chunks/ContactForm.js";
import { g as getAssetPath } from "../../../../../chunks/assetPath.js";
function Restoration($$payload, $$props) {
  push();
  var $$store_subs;
  let beforeAfterPairs, currentImages;
  beforeAfterPairs = [
    {
      id: 1,
      beforeImage: {
        src: getAssetPath("/images/restoration/before/photo_2025-07-26_15-41-45.jpg"),
        alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Before Restoration" : "До реставрации"
      },
      afterImage: {
        src: getAssetPath("/images/restoration/after/photo_2025-07-26_15-42-53.jpg"),
        alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "After Restoration" : "После реставрации"
      },
      title: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Furniture Restoration" : "Реставрация мебели"
    },
    {
      id: 2,
      beforeImage: {
        src: getAssetPath("/images/restoration/before/2024-06-12 18-35-46.JPG"),
        alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Before Restoration" : "До реставрации"
      },
      afterImage: {
        src: getAssetPath("/images/restoration/after/2024-05-18 13-49-31.JPG"),
        alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "After Restoration" : "После реставрации"
      },
      title: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Wooden Element Restoration" : "Реставрация деревянных элементов"
    },
    {
      id: 3,
      beforeImage: {
        src: getAssetPath("/images/restoration/before/2024-05-14 16-45-04.JPG"),
        alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Before Restoration" : "До реставрации"
      },
      afterImage: {
        src: getAssetPath("/images/restoration/after/photo_2025-07-26_15-42-57.jpg"),
        alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "After Restoration" : "После реставрации"
      },
      title: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Wooden Chair Restoration" : "Реставрация деревянного стула"
    },
    {
      id: 4,
      beforeImage: {
        src: getAssetPath("/images/restoration/before/2024-05-14 16-44-07.JPG"),
        alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Before Restoration" : "До реставрации"
      },
      afterImage: {
        src: getAssetPath("/images/restoration/after/photo_2025-07-26_15-42-51.jpg"),
        alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "After Restoration" : "После реставрации"
      },
      title: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Antique Furniture Restoration" : "Реставрация антикварной мебели"
    },
    {
      id: 5,
      beforeImage: {
        src: getAssetPath("/images/restoration/before/img.png"),
        alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Before Restoration" : "До реставрации"
      },
      afterImage: {
        src: getAssetPath("/images/restoration/after/photo_2025-07-01_07-07-40 (2).jpg"),
        alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "After Restoration" : "После реставрации"
      },
      title: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Wooden Table Restoration" : "Реставрация деревянного стола"
    },
    {
      id: 6,
      beforeImage: {
        src: getAssetPath("/images/restoration/before/photo_2025-07-21_21-14-47.jpg"),
        alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Before Restoration" : "До реставрации"
      },
      afterImage: {
        src: getAssetPath("/images/restoration/after/photo_2025-07-21_21-14-46.jpg"),
        alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "After Restoration" : "После реставрации"
      },
      title: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Wooden Cabinet Restoration" : "Реставрация деревянного шкафа"
    }
  ];
  beforeAfterPairs.flatMap((pair) => [pair.beforeImage, pair.afterImage]);
  currentImages = beforeAfterPairs.reduce(
    (acc, pair) => {
      acc[pair.id] = pair.afterImage;
      return acc;
    },
    {}
  );
  store_get($$store_subs ??= {}, "$page", page).url.pathname;
  const each_array = ensure_array_like(
    // Clean up event listener on component unmount
    beforeAfterPairs
  );
  $$payload.out.push(`<section class="page-header svelte-9x5b2c"><div class="container"><h1 class="svelte-9x5b2c">${escape_html(store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Restoration and Maintenance of Wooden Products" : "Реставрация и уход за изделиями из дерева")}</h1></div></section> <section class="section svelte-9x5b2c"><div class="container svelte-9x5b2c"><div class="direction-intro svelte-9x5b2c"><p class="svelte-9x5b2c">${escape_html(store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "We specialize in the restoration and maintenance of wooden products, giving new life to your cherished wooden items. Our expert craftsmen use traditional techniques and modern technology to restore your wooden furniture, floors, and decorative elements to their former glory." : "Мы специализируемся на реставрации и уходе за изделиями из дерева, даря новую жизнь вашим ценным деревянным предметам. Наши опытные мастера используют традиционные техники и современные технологии, чтобы восстановить вашу деревянную мебель, полы и декоративные элементы до их прежнего великолепия.")}</p></div> <div class="direction-features svelte-9x5b2c"><div class="feature svelte-9x5b2c"><div class="feature-icon svelte-9x5b2c"><svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 3L1 9L5 11.18V17.18L12 21L19 17.18V11.18L21 10.09V17H23V9L12 3ZM18.82 9L12 12.72L5.18 9L12 5.28L18.82 9ZM17 15.99L12 18.72L7 15.99V12.27L12 15L17 12.27V15.99Z" fill="currentColor"></path></svg></div> <div class="feature-content svelte-9x5b2c"><h3 class="svelte-9x5b2c">${escape_html(store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Expert Restoration" : "Экспертная реставрация")}</h3> <p class="svelte-9x5b2c">${escape_html(store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "We restore wooden furniture, floors, and decorative elements with precision and care." : "Мы реставрируем деревянную мебель, полы и декоративные элементы с точностью и заботой.")}</p></div></div> <div class="feature svelte-9x5b2c"><div class="feature-icon svelte-9x5b2c"><svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z" fill="currentColor"></path></svg></div> <div class="feature-content svelte-9x5b2c"><h3 class="svelte-9x5b2c">${escape_html(store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Quality Materials" : "Качественные материалы")}</h3> <p class="svelte-9x5b2c">${escape_html(store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "We use only the finest materials and finishes for our restoration projects." : "Мы используем только лучшие материалы и отделки для наших проектов реставрации.")}</p></div></div> <div class="feature svelte-9x5b2c"><div class="feature-icon svelte-9x5b2c"><svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM9 17H7V10H9V17ZM13 17H11V7H13V17ZM17 17H15V13H17V17Z" fill="currentColor"></path></svg></div> <div class="feature-content svelte-9x5b2c"><h3 class="svelte-9x5b2c">${escape_html(store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Maintenance Services" : "Услуги по уходу")}</h3> <p class="svelte-9x5b2c">${escape_html(store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "We provide ongoing maintenance services to keep your wooden products looking their best." : "Мы предоставляем услуги по регулярному уходу, чтобы ваши деревянные изделия всегда выглядели наилучшим образом.")}</p></div></div></div> <h2 class="comparison-header svelte-9x5b2c">${escape_html(store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Before and After Comparison" : "Сравнение До и После")}</h2> <p class="comparison-intro svelte-9x5b2c" data-mobile-text-en="On mobile, use the BEFORE and AFTER buttons to switch between views." data-mobile-text-ru="На мобильных устройствах используйте кнопки ДО и ПОСЛЕ для переключения между видами.">${escape_html(store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? 'Hover over the "After" image to see the "Before" state of our restoration projects.' : 'Наведите курсор на изображение "После", чтобы увидеть состояние "До" наших реставрационных проектов.')}</p> <div class="before-after-container svelte-9x5b2c"><!--[-->`);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let pair = each_array[$$index];
    $$payload.out.push(`<div class="before-after-pair svelte-9x5b2c"><div class="hover-comparison svelte-9x5b2c"><div class="comparison-image after-image desktop-only svelte-9x5b2c"><img${attr("src", pair.afterImage.src)}${attr("alt", pair.afterImage.alt)} class="svelte-9x5b2c"/> <div class="image-label after-label svelte-9x5b2c">${escape_html(store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "AFTER" : "ПОСЛЕ")}</div></div> <div class="comparison-image before-image desktop-only svelte-9x5b2c"><img${attr("src", pair.beforeImage.src)}${attr("alt", pair.beforeImage.alt)} class="svelte-9x5b2c"/> <div class="image-label before-label svelte-9x5b2c">${escape_html(store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "BEFORE" : "ДО")}</div></div> <div class="comparison-image mobile-only svelte-9x5b2c"><img${attr("src", currentImages[pair.id].src)}${attr("alt", currentImages[pair.id].alt)} class="svelte-9x5b2c"/> <div${attr_class(`image-label ${stringify(currentImages[pair.id] === pair.beforeImage ? "before-label" : "after-label")}`, "svelte-9x5b2c")}>${escape_html(store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? currentImages[pair.id] === pair.beforeImage ? "BEFORE" : "AFTER" : currentImages[pair.id] === pair.beforeImage ? "ДО" : "ПОСЛЕ")}</div></div> <div class="mobile-toggle-buttons svelte-9x5b2c"><button${attr_class("toggle-btn before-btn svelte-9x5b2c", void 0, { "active": currentImages[pair.id] === pair.beforeImage })}>${escape_html(store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "BEFORE" : "ДО")}</button> <button${attr_class("toggle-btn after-btn svelte-9x5b2c", void 0, { "active": currentImages[pair.id] === pair.afterImage })}>${escape_html(store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "AFTER" : "ПОСЛЕ")}</button></div></div></div>`);
  }
  $$payload.out.push(`<!--]--></div></div></section> <section class="section contact-section svelte-9x5b2c"><div class="container"><div class="contact-container svelte-9x5b2c"><div class="contact-info svelte-9x5b2c"><h2 class="svelte-9x5b2c">${escape_html(store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Give New Life to Your Wooden Products" : "Дайте новую жизнь вашим деревянным изделиям")}</h2> <p class="svelte-9x5b2c">${escape_html(store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Contact us to discuss your restoration project. We offer free consultations and will help you bring your wooden products back to life." : "Свяжитесь с нами, чтобы обсудить ваш проект реставрации. Мы предлагаем бесплатные консультации и поможем вернуть жизнь вашим деревянным изделиям.")}</p></div> <div class="contact-form-container">`);
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
  Restoration($$payload);
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _page as default
};
