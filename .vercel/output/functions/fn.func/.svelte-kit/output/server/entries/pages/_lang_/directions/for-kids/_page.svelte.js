import { z as push, E as store_get, N as ensure_array_like, G as escape_html, F as attr, J as unsubscribe_stores, B as pop } from "../../../../../chunks/index.js";
import { p as page } from "../../../../../chunks/stores.js";
import { C as ContactForm } from "../../../../../chunks/ContactForm.js";
import { c as currentLang } from "../../../../../chunks/languageStore.js";
import { g as getAssetPath } from "../../../../../chunks/assetPath.js";
function ForKids($$payload, $$props) {
  push();
  var $$store_subs;
  const images = [
    {
      id: 1,
      src: getAssetPath("/images/for kids/2024-06-21 16-19-32.JPG"),
      alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Furniture for Kids" : "Мебель для детей"
    },
    {
      id: 2,
      src: getAssetPath("/images/for kids/2024-06-21 16-20-24.JPG"),
      alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Furniture for Kids" : "Мебель для детей"
    },
    {
      id: 3,
      src: getAssetPath("/images/for kids/2024-06-21 16-20-28.JPG"),
      alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Furniture for Kids" : "Мебель для детей"
    },
    {
      id: 4,
      src: getAssetPath("/images/indoor/photo_2024-01-26_17-56-21.jpg"),
      alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Furniture for Kids" : "Мебель для детей"
    },
    {
      id: 6,
      src: getAssetPath("/images/for kids/photo_2025-07-26_15-23-05.jpg"),
      alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Furniture for Kids" : "Мебель для детей"
    }
  ];
  store_get($$store_subs ??= {}, "$page", page).url.pathname;
  const each_array = ensure_array_like(images);
  $$payload.out.push(`<section class="page-header svelte-11kokgt"><div class="container"><h1 class="svelte-11kokgt">${escape_html(store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Furniture for Kids" : "Мебель для детей")}</h1></div></section> <section class="section"><div class="container"><div class="direction-intro svelte-11kokgt"><p class="svelte-11kokgt">${escape_html(store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "We create beautiful, safe, and functional furniture specifically designed for children. Our pieces are crafted to spark imagination, support development, and bring joy to your little ones. From playhouses and beds to desks and storage solutions, we offer a wide range of children's furniture options." : "Мы создаем красивую, безопасную и функциональную мебель, специально разработанную для детей. Наши изделия созданы, чтобы разжигать воображение, поддерживать развитие и приносить радость вашим малышам. От игровых домиков и кроватей до столов и систем хранения, мы предлагаем широкий спектр вариантов детской мебели.")}</p> <p class="svelte-11kokgt">${escape_html(store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "All our children's furniture is crafted from high-quality, eco-friendly wood with rounded edges and non-toxic finishes. We prioritize safety while never compromising on design, creating pieces that both children and parents will love." : "Вся наша детская мебель изготовлена из высококачественной экологически чистой древесины с закругленными краями и нетоксичной отделкой. Мы уделяем первостепенное внимание безопасности, никогда не идя на компромисс в дизайне, создавая предметы, которые понравятся и детям, и родителям.")}</p></div> <div class="direction-features svelte-11kokgt"><div class="feature svelte-11kokgt"><div class="feature-icon svelte-11kokgt"><svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" fill="currentColor"></path></svg></div> <div class="feature-content svelte-11kokgt"><h3 class="svelte-11kokgt">${escape_html(store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Safety First" : "Безопасность прежде всего")}</h3> <p class="svelte-11kokgt">${escape_html(store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "We design with rounded edges, non-toxic materials, and sturdy construction." : "Мы проектируем с закругленными краями, нетоксичными материалами и прочной конструкцией.")}</p></div></div> <div class="feature svelte-11kokgt"><div class="feature-icon svelte-11kokgt"><svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z" fill="currentColor"></path></svg></div> <div class="feature-content svelte-11kokgt"><h3 class="svelte-11kokgt">${escape_html(store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Playful Design" : "Игривый дизайн")}</h3> <p class="svelte-11kokgt">${escape_html(store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Colorful, imaginative designs that inspire creativity and joy." : "Красочные, оригинальные дизайны, которые вдохновляют на творчество и радость.")}</p></div></div> <div class="feature svelte-11kokgt"><div class="feature-icon svelte-11kokgt"><svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM9 17H7V10H9V17ZM13 17H11V7H13V17ZM17 17H15V13H17V17Z" fill="currentColor"></path></svg></div> <div class="feature-content svelte-11kokgt"><h3 class="svelte-11kokgt">${escape_html(store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Growth-Friendly" : "Растет вместе с ребенком")}</h3> <p class="svelte-11kokgt">${escape_html(store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Furniture that adapts to your child's changing needs as they grow." : "Мебель, которая адаптируется к меняющимся потребностям вашего ребенка по мере его роста.")}</p></div></div></div> <div class="gallery-grid svelte-11kokgt"><!--[-->`);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let image = each_array[$$index];
    $$payload.out.push(`<div class="gallery-item svelte-11kokgt"><img${attr("src", image.src)}${attr("alt", image.alt)} class="svelte-11kokgt"/> <div class="gallery-item-overlay svelte-11kokgt"><span class="view-icon svelte-11kokgt">+</span></div></div>`);
  }
  $$payload.out.push(`<!--]--></div></div></section> <section class="section contact-section svelte-11kokgt"><div class="container"><div class="contact-container svelte-11kokgt"><div class="contact-info svelte-11kokgt"><h2 class="svelte-11kokgt">${escape_html(store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Interested in our furniture for kids?" : "Заинтересованы в нашей мебели для детей?")}</h2> <p class="svelte-11kokgt">${escape_html(store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Contact us to discuss your project. We offer custom children's furniture solutions tailored to your specific needs and preferences." : "Свяжитесь с нами, чтобы обсудить ваш проект. Мы предлагаем индивидуальные решения для детской мебели, адаптированные к вашим конкретным потребностям и предпочтениям.")}</p></div> <div class="contact-form-container">`);
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
  ForKids($$payload);
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _page as default
};
