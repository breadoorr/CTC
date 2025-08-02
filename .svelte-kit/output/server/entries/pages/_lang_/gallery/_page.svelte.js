import { z as push, E as store_get, N as ensure_array_like, G as escape_html, F as attr, J as unsubscribe_stores, B as pop } from "../../../../chunks/index.js";
import { p as page } from "../../../../chunks/stores.js";
import { c as currentLang, t } from "../../../../chunks/languageStore.js";
/* empty css                                                           */
import { g as getAssetPath } from "../../../../chunks/assetPath.js";
function Gallery($$payload, $$props) {
  push();
  var $$store_subs;
  let rawGalleryImages, galleryImages, filteredImages;
  function processGalleryImagePaths(images) {
    return images.map((image) => ({ ...image, src: getAssetPath(image.src) }));
  }
  rawGalleryImages = [
    {
      id: 1,
      src: "/images/for kids/2024-06-21 16-19-32.JPG",
      alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "For Kids" : "Для детей",
      category: "for-kids"
    },
    {
      id: 2,
      src: "/images/for kids/2024-06-21 16-20-24.JPG",
      alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "For Kids" : "Для детей",
      category: "for-kids"
    },
    {
      id: 3,
      src: "/images/for kids/2024-06-21 16-20-28.JPG",
      alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "For Kids" : "Для детей",
      category: "for-kids"
    },
    {
      id: 4,
      src: "/images/indoor/2024-05-12 23-19-10.JPG",
      alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Interior Design" : "Дизайн интерьеров",
      category: "interior-design"
    },
    {
      id: 5,
      src: "/images/indoor/2024-06-01 14-39-21.JPG",
      alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Interior Design" : "Дизайн интерьеров",
      category: "interior-design"
    },
    {
      id: 6,
      src: "/images/indoor/2024-06-24 06-27-19_1719213072226.JPG",
      alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Interior Furniture" : "Мебель в интерьере",
      category: "interior-furniture"
    },
    {
      id: 7,
      src: "/images/indoor/2024-06-25 16-34-51.JPG",
      alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Interior Design" : "Дизайн интерьеров",
      category: "interior-design"
    },
    {
      id: 8,
      src: "/images/indoor/2024-07-06 14-43-32.JPG",
      alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Interior Furniture" : "Мебель в интерьере",
      category: "interior-furniture"
    },
    {
      id: 9,
      src: "/images/indoor/2024-07-06 14-46-41.JPG",
      alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Interior Furniture" : "Мебель в интерьере",
      category: "interior-furniture"
    },
    {
      id: 10,
      src: "/images/indoor/photo_2025-07-21_21-38-31.jpg",
      alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Interior Furniture" : "Мебель в интерьере",
      category: "interior-furniture"
    },
    {
      id: 11,
      src: "/images/indoor/photo_2025-07-21_21-38-36.jpg",
      alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Interior Furniture" : "Мебель в интерьере",
      category: "interior-furniture"
    },
    {
      id: 12,
      src: "/images/indoor/photo_2025-07-21_21-38-52.jpg",
      alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Interior Furniture" : "Мебель в интерьере",
      category: "interior-furniture"
    },
    {
      id: 13,
      src: "/images/indoor/photo_2025-07-21_21-38-54.jpg",
      alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Interior Furniture" : "Мебель в интерьере",
      category: "interior-furniture"
    },
    {
      id: 14,
      src: "/images/indoor/photo_2025-07-21_21-39-11.jpg",
      alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Interior Furniture" : "Мебель в интерьере",
      category: "interior-furniture"
    },
    {
      id: 15,
      src: "/images/indoor/photo_2025-07-21_21-39-12.jpg",
      alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Interior Furniture" : "Мебель в интерьере",
      category: "interior-furniture"
    },
    {
      id: 17,
      src: "/images/indoor/photo_2025-07-21_21-39-16.jpg",
      alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Interior Furniture" : "Мебель в интерьере",
      category: "interior-furniture"
    },
    {
      id: 18,
      src: "/images/indoor/photo_2025-07-21_21-39-53.jpg",
      alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Interior Furniture" : "Мебель в интерьере",
      category: "interior-furniture"
    },
    {
      id: 19,
      src: "/images/indoor/photo_2025-07-21_21-39-56.jpg",
      alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Interior Furniture" : "Мебель в интерьере",
      category: "interior-furniture"
    },
    {
      id: 20,
      src: "/images/outdoor furniture/2024-04-11 11-18-49.JPG",
      alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Outdoor Furniture" : "Уличная мебель",
      category: "street-furniture"
    },
    {
      id: 21,
      src: "/images/outdoor furniture/2024-04-11 11-18-53.JPG",
      alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Outdoor Furniture" : "Уличная мебель",
      category: "street-furniture"
    },
    {
      id: 23,
      src: "/images/outdoor furniture/2024-05-13 12-08-37.JPG",
      alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Small Architectural Structures" : "Малые архитектурные формы",
      category: "architectural-forms"
    },
    {
      id: 28,
      src: "/images/outdoor furniture/2024-06-21 16-36-31.JPG",
      alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Outdoor Furniture" : "Уличная мебель",
      category: "street-furniture"
    },
    {
      id: 30,
      src: "/images/outdoor furniture/2024-06-21 16-37-11.JPG",
      alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Outdoor Furniture" : "Уличная мебель",
      category: "street-furniture"
    },
    {
      id: 31,
      src: "/images/outdoor furniture/2024-06-21 16-37-11 (1).JPG",
      alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Outdoor Furniture" : "Уличная мебель",
      category: "street-furniture"
    },
    {
      id: 32,
      src: "/images/outdoor furniture/2024-06-24 06-27-19.JPG",
      alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Outdoor Furniture" : "Уличная мебель",
      category: "street-furniture"
    },
    {
      id: 33,
      src: "/images/outdoor furniture/2024-06-24 06-27-19_1719213059979.JPG",
      alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Outdoor Furniture" : "Уличная мебель",
      category: "street-furniture"
    },
    {
      id: 34,
      src: "/images/outdoor furniture/2024-06-24 06-27-19_1719213080407.JPG",
      alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Outdoor Furniture" : "Уличная мебель",
      category: "street-furniture"
    },
    {
      id: 35,
      src: "/images/outdoor furniture/2024-06-24 06-48-06.JPG",
      alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Outdoor Furniture" : "Уличная мебель",
      category: "street-furniture"
    },
    {
      id: 36,
      src: "/images/outdoor furniture/2024-07-20 13-39-55.JPG",
      alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Outdoor Furniture" : "Уличная мебель",
      category: "street-furniture"
    },
    {
      id: 40,
      src: "/images/outdoor furniture/chair.jpg",
      alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Outdoor Chair" : "Уличный стул",
      category: "street-furniture"
    },
    {
      id: 41,
      src: "/images/outdoor furniture/photo_2025-07-01_07-07-40.jpg",
      alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Outdoor Furniture" : "Уличная мебель",
      category: "street-furniture"
    },
    {
      id: 42,
      src: "/images/outdoor furniture/photo_2025-07-01_07-07-40 (2).jpg",
      alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Outdoor Furniture" : "Уличная мебель",
      category: "street-furniture"
    },
    {
      id: 43,
      src: "/images/outdoor furniture/photo_2025-07-01_07-07-40 (3).jpg",
      alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Outdoor Furniture" : "Уличная мебель",
      category: "street-furniture"
    },
    {
      id: 44,
      src: "/images/outdoor furniture/photo_2025-07-21_21-39-49.jpg",
      alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Outdoor Furniture" : "Уличная мебель",
      category: "street-furniture"
    },
    {
      id: 45,
      src: "/images/outdoor furniture/photo_2025-07-21_21-39-50.jpg",
      alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Outdoor Furniture" : "Уличная мебель",
      category: "street-furniture"
    },
    {
      id: 46,
      src: "/images/small forms/963A9631.jpg",
      alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Outdoor Furniture" : "Уличная мебель",
      category: "street-furniture"
    },
    {
      id: 48,
      src: "/images/small forms/963A9633.jpg",
      alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Outdoor Furniture" : "Уличная мебель",
      category: "street-furniture"
    },
    {
      id: 50,
      src: "/images/small forms/963A9642.jpg",
      alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Outdoor Furniture" : "Уличная мебель",
      category: "street-furniture"
    },
    {
      id: 51,
      src: "/images/small forms/963A9643.jpg",
      alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Outdoor Furniture" : "Уличная мебель",
      category: "street-furniture"
    },
    {
      id: 52,
      src: "/images/small forms/963A9644.jpg",
      alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Outdoor Furniture" : "Уличная мебель",
      category: "street-furniture"
    },
    {
      id: 54,
      src: "/images/small forms/963A9646.jpg",
      alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Outdoor Furniture" : "Уличная мебель",
      category: "street-furniture"
    },
    {
      id: 55,
      src: "/images/small forms/Беседка1.jpg",
      alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Gazebo" : "Беседка",
      category: "architectural-forms"
    },
    {
      id: 56,
      src: "/images/small forms/беседка.jpg",
      alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Gazebo" : "Беседка",
      category: "architectural-forms"
    },
    {
      id: 57,
      src: "/images/small forms/photo_2025-07-21_21-42-37.jpg",
      alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Small Architectural Structures" : "Малые архитектурные формы",
      category: "architectural-forms"
    },
    {
      id: 58,
      src: "/images/house/33bd0883de8e84637a5259827d798d53cedc01f1.jpeg",
      alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Private Residential Homes" : "Частные жилые дома",
      category: "private-houses"
    },
    {
      id: 59,
      src: "/images/house/a4f1748b8d0ba362d3ddb23f529e98b6.jpg",
      alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Private Residential Homes" : "Частные жилые дома",
      category: "private-houses"
    },
    {
      id: 60,
      src: "/images/house/house(1).jpg",
      alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Private Residential Homes" : "Частные жилые дома",
      category: "private-houses"
    },
    {
      id: 61,
      src: "/images/house/house(2).jpg",
      alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Private Residential Homes" : "Частные жилые дома",
      category: "private-houses"
    },
    {
      id: 62,
      src: "/images/house/house(3).jpg",
      alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Private Residential Homes" : "Частные жилые дома",
      category: "private-houses"
    },
    {
      id: 63,
      src: "/images/house/house(4).jpg",
      alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Private Residential Homes" : "Частные жилые дома",
      category: "private-houses"
    },
    {
      id: 64,
      src: "/images/restoration/after/photo_2025-07-01_07-07-40.jpg",
      alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Restoration After" : "Реставрация После",
      category: "restoration"
    },
    {
      id: 65,
      src: "/images/restoration/after/photo_2025-07-01_07-07-40 (2).jpg",
      alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Restoration After" : "Реставрация После",
      category: "restoration"
    },
    {
      id: 67,
      src: "/images/restoration/after/2024-05-18 13-49-31.JPG",
      alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Restoration After" : "Реставрация После",
      category: "restoration"
    },
    {
      id: 68,
      src: "/images/restoration/after/2024-05-18 13-50-34.JPG",
      alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Restoration After" : "Реставрация После",
      category: "restoration"
    },
    {
      id: 69,
      src: "/images/restoration/after/photo_2025-07-21_21-14-46.jpg",
      alt: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "Restoration After" : "Реставрация После",
      category: "restoration"
    }
  ];
  galleryImages = processGalleryImagePaths(rawGalleryImages);
  [
    {
      id: "all",
      name: store_get($$store_subs ??= {}, "$t", t)("allWorks")
    },
    {
      id: "for-kids",
      name: store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en" ? "For Kids" : "Для детей"
    },
    {
      id: "street-furniture",
      name: store_get($$store_subs ??= {}, "$t", t)("streetFurniture")
    },
    {
      id: "interior-furniture",
      name: store_get($$store_subs ??= {}, "$t", t)("interiorFurnitureCategory")
    },
    {
      id: "architectural-forms",
      name: store_get($$store_subs ??= {}, "$t", t)("architecturalFormsCategory")
    },
    {
      id: "interior-design",
      name: store_get($$store_subs ??= {}, "$t", t)("interiorDesignCategory")
    },
    {
      id: "private-houses",
      name: store_get($$store_subs ??= {}, "$t", t)("privateHomesCategory")
    },
    {
      id: "restoration",
      name: store_get($$store_subs ??= {}, "$t", t)("restorationCategory")
    }
  ];
  filteredImages = galleryImages;
  const each_array = ensure_array_like(filteredImages);
  $$payload.out.push(`<section class="page-header svelte-1psoa2m"><div class="container"><h1 class="svelte-1psoa2m">${escape_html(store_get($$store_subs ??= {}, "$t", t)("galleryTitle"))}</h1></div></section> <section class="section"><div class="container"><div class="gallery-grid svelte-1psoa2m"><!--[-->`);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let image = each_array[$$index];
    $$payload.out.push(`<div class="gallery-item svelte-1psoa2m"><img${attr("src", image.src)}${attr("alt", image.alt)} class="svelte-1psoa2m"/> <div class="gallery-item-overlay svelte-1psoa2m"><span class="view-icon svelte-1psoa2m">+</span></div></div>`);
  }
  $$payload.out.push(`<!--]--></div></div></section>        `);
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
  Gallery($$payload);
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _page as default
};
