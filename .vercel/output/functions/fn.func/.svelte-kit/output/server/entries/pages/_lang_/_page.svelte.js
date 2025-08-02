import { z as push, E as store_get, N as ensure_array_like, G as escape_html, I as attr_class, O as attr_style, P as stringify, F as attr, J as unsubscribe_stores, B as pop } from "../../../chunks/index.js";
import { p as page } from "../../../chunks/stores.js";
import { t } from "../../../chunks/languageStore.js";
/* empty css                                                        */
import { g as getAssetPath } from "../../../chunks/assetPath.js";
import { g as getLangRoute } from "../../../chunks/routeUtils.js";
function Home($$payload, $$props) {
  push();
  var $$store_subs;
  let slides;
  let currentSlide = 0;
  slides = [
    {
      image: getAssetPath("/images/indoor/2024-06-01 14-39-21.JPG"),
      title: store_get($$store_subs ??= {}, "$t", t)("customFurnitureTitle"),
      description: store_get($$store_subs ??= {}, "$t", t)("customFurnitureDesc")
    },
    {
      image: getAssetPath("/images/indoor/2024-05-12 23-19-10.JPG"),
      title: store_get($$store_subs ??= {}, "$t", t)("interiorFurnitureTitle"),
      description: store_get($$store_subs ??= {}, "$t", t)("interiorFurnitureDesc")
    },
    {
      image: getAssetPath("/images/small forms/963A9646.jpg"),
      title: store_get($$store_subs ??= {}, "$t", t)("outdoorFurnitureTitle"),
      description: store_get($$store_subs ??= {}, "$t", t)("outdoorFurnitureDesc")
    }
  ];
  const each_array = ensure_array_like(slides);
  const each_array_1 = ensure_array_like(slides);
  $$payload.out.push(`<section class="banner svelte-eb15xv"><div class="container"><div class="banner-content svelte-eb15xv"><div class="banner-subtitle svelte-eb15xv">${escape_html(store_get($$store_subs ??= {}, "$t", t)("bannerSubtitle"))}</div> <h1 class="banner-title svelte-eb15xv">${escape_html(store_get($$store_subs ??= {}, "$t", t)("bannerTitle"))}</h1></div></div></section> <section class="slider-section svelte-eb15xv"><div class="slider-container svelte-eb15xv"><!--[-->`);
  for (let index = 0, $$length = each_array.length; index < $$length; index++) {
    let slide = each_array[index];
    $$payload.out.push(`<div${attr_class(`slider-item ${stringify(currentSlide === index ? "active" : "")}`, "svelte-eb15xv")}><div class="slider-image svelte-eb15xv"${attr_style(`background-image: url('${stringify(slide.image)}');`)}><div class="slider-gradient svelte-eb15xv"><div class="slider-content svelte-eb15xv"><h3 class="slider-title svelte-eb15xv">${escape_html(slide.title)}</h3> <p class="slider-description svelte-eb15xv">${escape_html(slide.description)}</p></div></div></div></div>`);
  }
  $$payload.out.push(`<!--]--> <div class="slider-controls svelte-eb15xv"><button class="slider-arrow slider-prev svelte-eb15xv" aria-label="Previous slide"><svg viewBox="0 0 7.3 13" xmlns="http://www.w3.org/2000/svg" class="svelte-eb15xv"><polyline fill="none" stroke="#000000" stroke-width="1" points="0.5,0.5 6.5,6.5 0.5,12.5"></polyline></svg></button> <button class="slider-arrow slider-next svelte-eb15xv" aria-label="Next slide"><svg viewBox="0 0 7.3 13" xmlns="http://www.w3.org/2000/svg" class="svelte-eb15xv"><polyline fill="none" stroke="#000000" stroke-width="1" points="0.5,0.5 6.5,6.5 0.5,12.5"></polyline></svg></button></div> <div class="slider-indicators svelte-eb15xv"><!--[-->`);
  for (let index = 0, $$length = each_array_1.length; index < $$length; index++) {
    each_array_1[index];
    $$payload.out.push(`<button${attr_class(`slider-indicator ${stringify(currentSlide === index ? "active" : "")}`, "svelte-eb15xv")}${attr("aria-label", `Go to slide ${stringify(index + 1)}`)}></button>`);
  }
  $$payload.out.push(`<!--]--></div></div></section> <section class="services-section svelte-eb15xv"><div class="container"><div class="services-header svelte-eb15xv"><h2 class="services-title svelte-eb15xv">${escape_html(store_get($$store_subs ??= {}, "$t", t)("servicesTitle"))}</h2></div> <div class="services-grid svelte-eb15xv"><a${attr("href", getLangRoute("/directions/street-furniture"))} class="service-card svelte-eb15xv"><div class="service-icon svelte-eb15xv"><img${attr("src", getAssetPath("/images/outdoor furniture/chair.jpg"))}${attr("alt", store_get($$store_subs ??= {}, "$t", t)("outdoorFurnitureService"))} class="svelte-eb15xv"/> <div class="service-content svelte-eb15xv"><h3 class="service-title svelte-eb15xv">${escape_html(store_get($$store_subs ??= {}, "$t", t)("outdoorFurnitureService"))}</h3> <p class="service-description svelte-eb15xv">${escape_html(store_get($$store_subs ??= {}, "$t", t)("outdoorFurnitureDesc"))}</p></div></div></a> <a${attr("href", getLangRoute("/directions/interior-furniture"))} class="service-card svelte-eb15xv"><div class="service-icon svelte-eb15xv"><img${attr("src", getAssetPath("/images/indoor/shelf.jpg"))}${attr("alt", store_get($$store_subs ??= {}, "$t", t)("interiorFurnitureService"))} class="svelte-eb15xv"/> <div class="service-content svelte-eb15xv"><h3 class="service-title svelte-eb15xv">${escape_html(store_get($$store_subs ??= {}, "$t", t)("interiorFurnitureService"))}</h3> <p class="service-description svelte-eb15xv">${escape_html(store_get($$store_subs ??= {}, "$t", t)("interiorFurnitureDesc"))}</p></div></div></a> <a${attr("href", getLangRoute("/directions/architectural-forms"))} class="service-card svelte-eb15xv"><div class="service-icon svelte-eb15xv"><img${attr("src", getAssetPath("/images/small%20forms/беседка.jpg"))}${attr("alt", store_get($$store_subs ??= {}, "$t", t)("architecturalStructuresService"))} class="svelte-eb15xv"/> <div class="service-content svelte-eb15xv"><h3 class="service-title svelte-eb15xv">${escape_html(store_get($$store_subs ??= {}, "$t", t)("architecturalStructuresService"))}</h3> <p class="service-description svelte-eb15xv">${escape_html(store_get($$store_subs ??= {}, "$t", t)("architecturalStructuresDesc"))}</p></div></div></a> <a${attr("href", getLangRoute("/directions/for-kids"))} class="service-card svelte-eb15xv"><div class="service-icon svelte-eb15xv"><img${attr("src", getAssetPath("/images/for%20kids/2024-06-21 16-19-32.JPG"))}${attr("alt", store_get($$store_subs ??= {}, "$t", t)("forKidsService"))} class="svelte-eb15xv"/> <div class="service-content svelte-eb15xv"><h3 class="service-title svelte-eb15xv">${escape_html(store_get($$store_subs ??= {}, "$t", t)("forKidsService"))}</h3> <p class="service-description svelte-eb15xv">${escape_html(store_get($$store_subs ??= {}, "$t", t)("forKidsDesc"))}</p></div></div></a> <a${attr("href", getLangRoute("/directions/private-houses"))} class="service-card svelte-eb15xv"><div class="service-icon svelte-eb15xv"><img${attr("src", getAssetPath("/images/house/house(1).jpg"))}${attr("alt", store_get($$store_subs ??= {}, "$t", t)("privateHomesService"))} class="svelte-eb15xv"/> <div class="service-content svelte-eb15xv"><h3 class="service-title svelte-eb15xv">${escape_html(store_get($$store_subs ??= {}, "$t", t)("privateHomesService"))}</h3> <p class="service-description svelte-eb15xv">${escape_html(store_get($$store_subs ??= {}, "$t", t)("privateHomesDesc"))}</p></div></div></a> <a${attr("href", getLangRoute("/directions/restoration"))} class="service-card svelte-eb15xv"><div class="service-icon svelte-eb15xv"><img${attr("src", getAssetPath("/images/restoration/after/photo_2025-07-01_07-07-40.jpg"))}${attr("alt", store_get($$store_subs ??= {}, "$t", t)("restorationService"))} class="svelte-eb15xv"/> <div class="service-content svelte-eb15xv"><h3 class="service-title svelte-eb15xv">${escape_html(store_get($$store_subs ??= {}, "$t", t)("restorationService"))}</h3> <p class="service-description svelte-eb15xv">${escape_html(store_get($$store_subs ??= {}, "$t", t)("restorationDesc"))}</p></div></div></a></div></div></section>`);
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  {
    if (store_get($$store_subs ??= {}, "$page", page).params.lang) ;
  }
  Home($$payload);
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _page as default
};
