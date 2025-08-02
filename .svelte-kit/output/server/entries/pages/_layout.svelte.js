import { D as current_component, z as push, E as store_get, F as attr, G as escape_html, I as attr_class, J as unsubscribe_stores, B as pop, K as slot } from "../../chunks/index.js";
import { p as page } from "../../chunks/stores.js";
import "@sveltejs/kit/internal";
import { i as derived } from "../../chunks/exports.js";
import "../../chunks/state.svelte.js";
import { t, c as currentLang, l as languages } from "../../chunks/languageStore.js";
import { g as getAssetPath } from "../../chunks/assetPath.js";
import { g as getLangRoute } from "../../chunks/routeUtils.js";
import "clsx";
function onDestroy(fn) {
  var context = (
    /** @type {Component} */
    current_component
  );
  (context.d ??= []).push(fn);
}
function Header($$payload, $$props) {
  push();
  var $$store_subs;
  let isMobileMenuOpen = false;
  let isDropdownOpen = {};
  function isBrowser() {
    return typeof document !== "undefined";
  }
  function handleClickOutside(event) {
    if (!isBrowser()) return;
    document.querySelector(".mobile-menu");
    document.querySelector(".burger-button");
  }
  function handleKeydown(event) {
    if (event.key === "Escape" && isMobileMenuOpen) ;
  }
  onDestroy(() => {
    if (isBrowser()) {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleKeydown);
    }
  });
  store_get($$store_subs ??= {}, "$page", page).url.pathname;
  $$payload.out.push(`<header class="svelte-1w92401"><div class="container svelte-1w92401"><div class="header-padding svelte-1w92401"></div> <nav class="svelte-1w92401"><div class="logo svelte-1w92401"><a${attr("href", getLangRoute("/"))}><img${attr("src", getAssetPath("/logo/Лого СТС без рамки 4.jpg"))} alt="CTC" class="logo-img svelte-1w92401"/></a></div> <div class="nav-center svelte-1w92401"><ul class="nav-links svelte-1w92401"><li class="dropdown svelte-1w92401"><a${attr("href", getLangRoute("/directions"))} class="svelte-1w92401">${escape_html(store_get($$store_subs ??= {}, "$t", t)("areasOfActivity"))}</a> <div class="dropdown-content svelte-1w92401"><a${attr("href", getLangRoute("/directions/street-furniture"))} class="svelte-1w92401">${escape_html(store_get($$store_subs ??= {}, "$t", t)("outdoorFurniture"))}</a> <a${attr("href", getLangRoute("/directions/interior-furniture"))} class="svelte-1w92401">${escape_html(store_get($$store_subs ??= {}, "$t", t)("interiorFurniture"))}</a> <a${attr("href", getLangRoute("/directions/architectural-forms"))} class="svelte-1w92401">${escape_html(store_get($$store_subs ??= {}, "$t", t)("architecturalStructures"))}</a> <a${attr("href", getLangRoute("/directions/private-houses"))} class="svelte-1w92401">${escape_html(store_get($$store_subs ??= {}, "$t", t)("privateHomes"))}</a> <a${attr("href", getLangRoute("/directions/restoration"))} class="svelte-1w92401">${escape_html(store_get($$store_subs ??= {}, "$t", t)("restoration"))}</a> <a${attr("href", getLangRoute("/directions/for-kids"))} class="svelte-1w92401">${escape_html(store_get($$store_subs ??= {}, "$t", t)("forKidsService"))}</a></div></li> <li class="svelte-1w92401"><a${attr("href", getLangRoute("/gallery"))} class="svelte-1w92401">${escape_html(store_get($$store_subs ??= {}, "$t", t)("gallery"))}</a></li> <li class="svelte-1w92401"><a${attr("href", getLangRoute("/video"))} class="svelte-1w92401">${escape_html(store_get($$store_subs ??= {}, "$t", t)("video"))}</a></li> <li class="dropdown svelte-1w92401"><a${attr("href", getLangRoute("/contact"))} class="svelte-1w92401">${escape_html(store_get($$store_subs ??= {}, "$t", t)("contacts"))}</a></li></ul></div> <div class="lang-selector svelte-1w92401"><button${attr_class("lang-link svelte-1w92401", void 0, {
    "active": store_get($$store_subs ??= {}, "$currentLang", currentLang) === "ru"
  })}>RU</button> <button${attr_class("lang-link svelte-1w92401", void 0, {
    "active": store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en"
  })}>EN</button></div> <button class="burger-button svelte-1w92401"${attr("aria-label", "Open menu")}${attr("aria-expanded", isMobileMenuOpen)} aria-controls="mobile-menu"><span${attr_class("burger-line svelte-1w92401", void 0, { "open": isMobileMenuOpen })}></span> <span${attr_class("burger-line svelte-1w92401", void 0, { "open": isMobileMenuOpen })}></span> <span${attr_class("burger-line svelte-1w92401", void 0, { "open": isMobileMenuOpen })}></span></button></nav> <div class="header-padding svelte-1w92401"></div></div> `);
  {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--> <div id="mobile-menu"${attr_class("mobile-menu svelte-1w92401", void 0, { "open": isMobileMenuOpen })}${attr("aria-hidden", !isMobileMenuOpen)}><div class="mobile-menu-container svelte-1w92401"><div class="mobile-lang-selector svelte-1w92401"><button${attr_class("mobile-lang-link svelte-1w92401", void 0, {
    "active": store_get($$store_subs ??= {}, "$currentLang", currentLang) === "ru"
  })}>RU</button> <button${attr_class("mobile-lang-link svelte-1w92401", void 0, {
    "active": store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en"
  })}>EN</button></div> <ul class="mobile-nav-links svelte-1w92401"><li class="svelte-1w92401"><div class="mobile-nav-item svelte-1w92401"><a${attr("href", getLangRoute("/directions"))} class="svelte-1w92401">${escape_html(store_get($$store_subs ??= {}, "$t", t)("areasOfActivity"))}</a> <button class="dropdown-toggle svelte-1w92401"${attr("aria-label", isDropdownOpen["directions"] ? "Collapse menu" : "Expand menu")}${attr("aria-expanded", isDropdownOpen["directions"] || false)}><span${attr_class("dropdown-arrow svelte-1w92401", void 0, { "open": isDropdownOpen["directions"] })}></span></button></div> `);
  if (isDropdownOpen["directions"]) {
    $$payload.out.push("<!--[-->");
    $$payload.out.push(`<ul class="mobile-dropdown-content svelte-1w92401"><li class="svelte-1w92401"><a${attr("href", getLangRoute("/directions/street-furniture"))} class="svelte-1w92401">${escape_html(store_get($$store_subs ??= {}, "$t", t)("outdoorFurniture"))}</a></li> <li class="svelte-1w92401"><a${attr("href", getLangRoute("/directions/interior-furniture"))} class="svelte-1w92401">${escape_html(store_get($$store_subs ??= {}, "$t", t)("interiorFurniture"))}</a></li> <li class="svelte-1w92401"><a${attr("href", getLangRoute("/directions/architectural-forms"))} class="svelte-1w92401">${escape_html(store_get($$store_subs ??= {}, "$t", t)("architecturalStructures"))}</a></li> <li class="svelte-1w92401"><a${attr("href", getLangRoute("/directions/private-houses"))} class="svelte-1w92401">${escape_html(store_get($$store_subs ??= {}, "$t", t)("privateHomes"))}</a></li> <li class="svelte-1w92401"><a${attr("href", getLangRoute("/directions/restoration"))} class="svelte-1w92401">${escape_html(store_get($$store_subs ??= {}, "$t", t)("restoration"))}</a></li> <li class="svelte-1w92401"><a${attr("href", getLangRoute("/directions/for-kids"))} class="svelte-1w92401">${escape_html(store_get($$store_subs ??= {}, "$t", t)("forKidsService"))}</a></li></ul>`);
  } else {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--></li> <li class="svelte-1w92401"><a${attr("href", getLangRoute("/gallery"))}>${escape_html(store_get($$store_subs ??= {}, "$t", t)("gallery"))}</a></li> <li class="svelte-1w92401"><a${attr("href", getLangRoute("/video"))}>${escape_html(store_get($$store_subs ??= {}, "$t", t)("video"))}</a></li> <li class="svelte-1w92401"><div class="mobile-nav-item svelte-1w92401"><a${attr("href", getLangRoute("/contact"))} class="svelte-1w92401">${escape_html(store_get($$store_subs ??= {}, "$t", t)("contacts"))}</a></div></li></ul></div></div></header>`);
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function Footer($$payload, $$props) {
  push();
  var $$store_subs;
  store_get($$store_subs ??= {}, "$page", page).url.pathname;
  $$payload.out.push(`<footer class="svelte-110bxsd"><div class="container"><div class="footer-content svelte-110bxsd"><div class="footer-logo svelte-110bxsd"><a${attr("href", getLangRoute("/"))}><img${attr("src", getAssetPath("/logo/black%20logo.svg"))} alt="CTC" class="footer-logo-img svelte-110bxsd"/></a> <p class="svelte-110bxsd">${escape_html(store_get($$store_subs ??= {}, "$t", t)("woodenFurnitureArt"))}</p> <div class="footer-social svelte-110bxsd"><a href="https://www.facebook.com/profile.php?id=61578416415807" target="_blank" rel="noopener noreferrer" class="social-link svelte-110bxsd" aria-label="Visit our Facebook page"><svg width="30" height="30" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M50 100c27.6142 0 50-22.3858 50-50S77.6142 0 50 0 0 22.3858 0 50s22.3858 50 50 50Zm3.431-73.9854c-2.5161.0701-5.171.6758-7.0464 2.4577-1.5488 1.4326-2.329 3.5177-2.5044 5.602-.0534 1.4908-.0458 2.9855-.0382 4.4796.0058 1.1205.0115 2.2407-.0085 3.3587-.6888.005-1.3797.0036-2.0709.0021-.9218-.0019-1.8441-.0038-2.7626.0096 0 .8921.0013 1.7855.0026 2.6797.0026 1.791.0052 3.5853-.0026 5.3799.9185.0134 1.8409.0115 2.7627.0096.6912-.0015 1.382-.0029 2.0708.0021.0155 3.5565.0127 7.1128.0098 10.669-.0036 4.4452-.0072 8.8903.0252 13.3354 1.8903-.0134 3.7765-.0115 5.6633-.0095 1.4152.0014 2.8306.0028 4.2484-.0022.0117-4.0009.0088-7.9986.0058-11.9963-.0029-3.9979-.0058-7.9957.0059-11.9964.9533-.005 1.9067-.0036 2.86-.0021 1.2713.0019 2.5425.0038 3.8137-.0096.396-2.679.7335-5.3814.9198-8.0947-1.2576-.0058-2.5155-.0058-3.7734-.0058-1.2578 0-2.5157 0-3.7734-.0059 0-.4689-.0007-.9378-.0014-1.4066-.0022-1.4063-.0044-2.8123.0131-4.2188.198-1.0834 1.3158-1.9104 2.3992-1.8403h5.1476c.0117-2.8069.0117-5.602 0-8.4089-.6636 0-1.3273-.0007-1.9911-.0014-1.9915-.0022-3.9832-.0044-5.975.0131Z" fill="#ffffff"></path></svg></a> <a href="https://www.instagram.com/www_ctc.cy" target="_blank" rel="noopener noreferrer" class="social-link svelte-110bxsd" aria-label="Visit our Instagram page"><svg width="30" height="30" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100ZM25 39.3918C25 31.4558 31.4566 25 39.3918 25H60.6082C68.5442 25 75 31.4566 75 39.3918V60.8028C75 68.738 68.5442 75.1946 60.6082 75.1946H39.3918C31.4558 75.1946 25 68.738 25 60.8028V39.3918ZM36.9883 50.0054C36.9883 42.8847 42.8438 37.0922 50.0397 37.0922C57.2356 37.0922 63.0911 42.8847 63.0911 50.0054C63.0911 57.1252 57.2356 62.9177 50.0397 62.9177C42.843 62.9177 36.9883 57.1252 36.9883 50.0054ZM41.7422 50.0054C41.7422 54.5033 45.4641 58.1638 50.0397 58.1638C54.6153 58.1638 58.3372 54.5041 58.3372 50.0054C58.3372 45.5066 54.6145 41.8469 50.0397 41.8469C45.4641 41.8469 41.7422 45.5066 41.7422 50.0054ZM63.3248 39.6355C65.0208 39.6355 66.3956 38.2606 66.3956 36.5646C66.3956 34.8687 65.0208 33.4938 63.3248 33.4938C61.6288 33.4938 60.2539 34.8687 60.2539 36.5646C60.2539 38.2606 61.6288 39.6355 63.3248 39.6355Z" fill="#ffffff"></path></svg></a></div></div> <div class="footer-links"><h3 class="svelte-110bxsd">${escape_html(store_get($$store_subs ??= {}, "$t", t)("navigation"))}</h3> <ul class="svelte-110bxsd"><li class="svelte-110bxsd"><a${attr("href", getLangRoute("/directions"))} class="svelte-110bxsd">${escape_html(store_get($$store_subs ??= {}, "$t", t)("areasOfActivity"))}</a></li> <li class="svelte-110bxsd"><a${attr("href", getLangRoute("/gallery"))} class="svelte-110bxsd">${escape_html(store_get($$store_subs ??= {}, "$t", t)("gallery"))}</a></li> <li class="svelte-110bxsd"><a${attr("href", getLangRoute("/video"))} class="svelte-110bxsd">${escape_html(store_get($$store_subs ??= {}, "$t", t)("video"))}</a></li> <li class="svelte-110bxsd"><a${attr("href", getLangRoute("/contact"))} class="svelte-110bxsd">${escape_html(store_get($$store_subs ??= {}, "$t", t)("contacts"))}</a></li></ul></div> <div class="footer-directions"><h3 class="svelte-110bxsd">${escape_html(store_get($$store_subs ??= {}, "$t", t)("ourServices"))}</h3> <ul class="svelte-110bxsd"><li class="svelte-110bxsd"><a${attr("href", getLangRoute("/directions/street-furniture"))} class="svelte-110bxsd">${escape_html(store_get($$store_subs ??= {}, "$t", t)("outdoorFurniture"))}</a></li> <li class="svelte-110bxsd"><a${attr("href", getLangRoute("/directions/interior-furniture"))} class="svelte-110bxsd">${escape_html(store_get($$store_subs ??= {}, "$t", t)("interiorFurniture"))}</a></li> <li class="svelte-110bxsd"><a${attr("href", getLangRoute("/directions/architectural-forms"))} class="svelte-110bxsd">${escape_html(store_get($$store_subs ??= {}, "$t", t)("architecturalStructures"))}</a></li> <li class="svelte-110bxsd"><a${attr("href", getLangRoute("/directions/private-houses"))} class="svelte-110bxsd">${escape_html(store_get($$store_subs ??= {}, "$t", t)("privateHomes"))}</a></li> <li class="svelte-110bxsd"><a${attr("href", getLangRoute("/directions/restoration"))} class="svelte-110bxsd">${escape_html(store_get($$store_subs ??= {}, "$t", t)("restoration"))}</a></li> <li class="svelte-110bxsd"><a${attr("href", getLangRoute("/directions/for-kids"))} class="svelte-110bxsd">${escape_html(store_get($$store_subs ??= {}, "$t", t)("forKidsService"))}</a></li></ul></div> <div class="footer-contact"><h3 class="svelte-110bxsd">${escape_html(store_get($$store_subs ??= {}, "$t", t)("contactUs"))}</h3> <ul class="svelte-110bxsd"><li class="svelte-110bxsd"><a href="tel:+35799037765" class="svelte-110bxsd">+357 99 037 765</a></li> <li class="svelte-110bxsd"><a href="mailto:info@ctc.cy" class="svelte-110bxsd">info@ctc.cy</a></li> <li class="svelte-110bxsd">Limassol, Cyprus</li></ul></div></div> <div class="footer-bottom svelte-110bxsd"><p>© ${escape_html((/* @__PURE__ */ new Date()).getFullYear())} CTC. ${escape_html(store_get($$store_subs ??= {}, "$t", t)("allRightsReserved"))}</p> <div class="footer-lang svelte-110bxsd"><button${attr_class("lang-link svelte-110bxsd", void 0, {
    "active": store_get($$store_subs ??= {}, "$currentLang", currentLang) === "ru"
  })}>RU</button> <button${attr_class("lang-link svelte-110bxsd", void 0, {
    "active": store_get($$store_subs ??= {}, "$currentLang", currentLang) === "en"
  })}>EN</button></div></div></div></footer>`);
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function processImagePaths(data) {
  const processed = { ...data };
  Object.keys(processed).forEach((lang) => {
    Object.keys(processed[lang]).forEach((page2) => {
      if (processed[lang][page2].ogImage && typeof processed[lang][page2].ogImage === "string") {
        processed[lang][page2].ogImage = getAssetPath(processed[lang][page2].ogImage);
      }
    });
  });
  return processed;
}
const seoDataRaw = {
  en: {
    home: {
      title: "CTC - Wooden Furniture and Custom Woodwork in Cyprus",
      description: "CTC specializes in high-quality wooden furniture, outdoor structures, and interior design in Cyprus. Custom woodwork crafted with precision and care.",
      keywords: "wooden furniture, custom woodwork, Cyprus, outdoor furniture, interior design",
      ogTitle: "CTC - Wooden Furniture Experts in Cyprus",
      ogDescription: "Discover premium wooden furniture and custom woodwork solutions for your home and garden in Cyprus.",
      ogImage: "/logo/Лого СТС без рамки 4.jpg"
    },
    gallery: {
      title: "Gallery - CTC Wooden Furniture Projects",
      description: "Browse our gallery of completed wooden furniture projects, outdoor structures, and interior designs. Quality craftsmanship in every piece.",
      keywords: "wooden furniture gallery, woodwork projects, furniture portfolio, Cyprus",
      ogTitle: "Gallery of Wooden Furniture Projects - CTC",
      ogDescription: "See our completed wooden furniture projects and custom woodwork. Quality craftsmanship in every piece.",
      ogImage: "/images/outdoor furniture/963A9631.jpg"
    },
    about: {
      title: "About CTC - Wooden Furniture Craftsmen in Cyprus",
      description: "Learn about CTC, our team of expert woodworkers, and our commitment to quality wooden furniture and structures in Cyprus.",
      keywords: "about CTC, wooden furniture company, Cyprus woodworkers, furniture craftsmen",
      ogTitle: "About CTC - Wooden Furniture Experts",
      ogDescription: "Meet our team of expert woodworkers committed to creating high-quality wooden furniture and structures in Cyprus.",
      ogImage: "/logo/Лого СТС без рамки 4.jpg"
    },
    blog: {
      title: "Blog - Wooden Furniture Tips and Insights | CTC",
      description: "Read our blog for tips on wooden furniture care, design ideas, and insights into woodworking techniques and trends.",
      keywords: "wooden furniture blog, woodworking tips, furniture care, design ideas",
      ogTitle: "Wooden Furniture Blog - CTC",
      ogDescription: "Tips on wooden furniture care, design ideas, and insights into woodworking techniques and trends.",
      ogImage: "/images/indoor/2024-06-01 14-39-21.JPG"
    },
    directions: {
      title: "Our Services - CTC Wooden Furniture and Structures",
      description: "Explore our range of services including custom wooden furniture, outdoor structures, interior design, and restoration.",
      keywords: "wooden furniture services, custom woodwork, outdoor structures, interior design",
      ogTitle: "Our Wooden Furniture Services - CTC",
      ogDescription: "From custom furniture to outdoor structures and restoration - discover our complete range of wooden furniture services.",
      ogImage: "/images/indoor/2024-05-12 23-19-10.JPG"
    },
    contact: {
      title: "Contact Us - CTC Wooden Furniture in Cyprus",
      description: "Get in touch with CTC for custom wooden furniture, outdoor structures, and interior design services in Cyprus. Request a consultation or quote.",
      keywords: "contact CTC, wooden furniture Cyprus, custom woodwork contact, furniture consultation",
      ogTitle: "Contact CTC - Wooden Furniture Experts in Cyprus",
      ogDescription: "Reach out to our team of expert woodworkers for custom wooden furniture, outdoor structures, and interior design services in Cyprus.",
      ogImage: "/logo/Лого СТС без рамки 4.jpg"
    },
    "directions-street-furniture": {
      title: "Outdoor Furniture - CTC Wooden Furniture in Cyprus",
      description: "Discover our range of high-quality outdoor wooden furniture designed to withstand the Cyprus climate. Loungers, chairs, and children's playhouses crafted with care.",
      keywords: "outdoor furniture, wooden loungers, garden chairs, children's playhouses, Cyprus",
      ogTitle: "Outdoor Wooden Furniture - CTC Cyprus",
      ogDescription: "Weather-resistant and durable outdoor furniture that combines comfort with style for your garden, patio or terrace.",
      ogImage: "/images/outdoor furniture/963A9631.jpg"
    },
    "directions-interior-furniture": {
      title: "Interior Furniture - CTC Wooden Furniture in Cyprus",
      description: "Explore our collection of custom interior wooden furniture. Tables, bookcases, cabinets, and beds crafted with precision and style.",
      keywords: "interior furniture, wooden tables, bookcases, cabinets, beds, Cyprus",
      ogTitle: "Interior Wooden Furniture - CTC Cyprus",
      ogDescription: "Custom interior furniture designed with both aesthetics and functionality in mind. Each piece is crafted with attention to detail.",
      ogImage: "/images/indoor/2024-06-24 06-27-19_1719213072226.JPG"
    },
    "directions-architectural-forms": {
      title: "Small Architectural Structures - CTC Wooden Constructions in Cyprus",
      description: "Custom wooden architectural structures including guest houses and gazebos. Built with quality materials and expert craftsmanship.",
      keywords: "architectural structures, wooden gazebos, guest houses, wooden constructions, Cyprus",
      ogTitle: "Wooden Architectural Structures - CTC Cyprus",
      ogDescription: "Guest houses and gazebos built with quality materials and expert craftsmanship for your outdoor space.",
      ogImage: "/images/outdoor furniture/беседка.jpg"
    },
    "directions-interior-design": {
      title: "Interior Design Services - CTC Design Solutions in Cyprus",
      description: "Professional interior design services from minimalism to baroque. Create spaces that reflect your personal style with our expert designers.",
      keywords: "interior design, renovation services, home design, wooden interiors, Cyprus",
      ogTitle: "Interior Design Services - CTC Cyprus",
      ogDescription: "From minimalism to baroque, we create spaces that reflect your personal style with our expert interior design services.",
      ogImage: "/images/indoor/2024-05-12 23-19-10.JPG"
    },
    "directions-private-houses": {
      title: "Private Residential Homes - CTC Construction in Cyprus",
      description: "Custom design and construction of private residential homes according to your individual plan and specifications.",
      keywords: "private homes, residential construction, custom house design, wooden houses, Cyprus",
      ogTitle: "Private Residential Homes - CTC Cyprus",
      ogDescription: "Design and construction of private residential homes according to your individual plan and specifications.",
      ogImage: "/images/house/house(1).jpg"
    },
    "directions-restoration": {
      title: "Restoration Services - CTC Wooden Furniture Restoration in Cyprus",
      description: "Expert restoration and maintenance services for wooden products. Give new life to your cherished wooden items with our professional care.",
      keywords: "wooden furniture restoration, wood maintenance, furniture repair, antique restoration, Cyprus",
      ogTitle: "Wooden Furniture Restoration - CTC Cyprus",
      ogDescription: "Giving new life to your wooden products with expert restoration and care. Professional maintenance services for all wooden items.",
      ogImage: "/images/restoration/after/photo_2025-07-01_07-07-40.jpg"
    }
  },
  ru: {
    home: {
      title: "CTC - Деревянная мебель и изделия на заказ на Кипре",
      description: "CTC специализируется на высококачественной деревянной мебели, уличных конструкциях и дизайне интерьера на Кипре. Изделия из дерева, изготовленные с точностью и заботой.",
      keywords: "деревянная мебель, изделия на заказ, Кипр, уличная мебель, дизайн интерьера",
      ogTitle: "CTC - Эксперты по деревянной мебели на Кипре",
      ogDescription: "Откройте для себя премиальную деревянную мебель и индивидуальные решения для вашего дома и сада на Кипре.",
      ogImage: "/logo/Лого СТС без рамки 4.jpg"
    },
    gallery: {
      title: "Галерея - Проекты деревянной мебели CTC",
      description: "Просмотрите нашу галерею завершенных проектов деревянной мебели, уличных конструкций и дизайна интерьера. Качественное мастерство в каждом изделии.",
      keywords: "галерея деревянной мебели, проекты изделий из дерева, портфолио мебели, Кипр",
      ogTitle: "Галерея проектов деревянной мебели - CTC",
      ogDescription: "Посмотрите наши завершенные проекты деревянной мебели и изделий на заказ. Качественное мастерство в каждом изделии.",
      ogImage: "/images/outdoor furniture/963A9631.jpg"
    },
    about: {
      title: "О компании CTC - Мастера деревянной мебели на Кипре",
      description: "Узнайте о компании CTC, нашей команде опытных мастеров и нашем стремлении к качественной деревянной мебели и конструкциям на Кипре.",
      keywords: "о компании CTC, компания деревянной мебели, мастера на Кипре, мебельные мастера",
      ogTitle: "О компании CTC - Эксперты по деревянной мебели",
      ogDescription: "Познакомьтесь с нашей командой опытных мастеров, создающих высококачественную деревянную мебель и конструкции на Кипре.",
      ogImage: "/logo/Лого СТС без рамки 4.jpg"
    },
    blog: {
      title: "Блог - Советы и идеи о деревянной мебели | CTC",
      description: "Читайте наш блог с советами по уходу за деревянной мебелью, идеями дизайна и информацией о техниках и тенденциях деревообработки.",
      keywords: "блог о деревянной мебели, советы по деревообработке, уход за мебелью, идеи дизайна",
      ogTitle: "Блог о деревянной мебели - CTC",
      ogDescription: "Советы по уходу за деревянной мебелью, идеи дизайна и информация о техниках и тенденциях деревообработки.",
      ogImage: "/images/indoor/2024-06-01 14-39-21.JPG"
    },
    directions: {
      title: "Наши услуги - Деревянная мебель и конструкции CTC",
      description: "Изучите наш спектр услуг, включая изготовление деревянной мебели на заказ, уличные конструкции, дизайн интерьера и реставрацию.",
      keywords: "услуги по деревянной мебели, изделия на заказ, уличные конструкции, дизайн интерьера",
      ogTitle: "Наши услуги по деревянной мебели - CTC",
      ogDescription: "От мебели на заказ до уличных конструкций и реставрации - откройте для себя полный спектр наших услуг по деревянной мебели.",
      ogImage: "/images/indoor/2024-05-12 23-19-10.JPG"
    },
    contact: {
      title: "Контакты - CTC Деревянная мебель на Кипре",
      description: "Свяжитесь с CTC для заказа деревянной мебели, уличных конструкций и услуг по дизайну интерьера на Кипре. Запросите консультацию или расчет стоимости.",
      keywords: "контакты CTC, деревянная мебель Кипр, заказать изделия из дерева, консультация по мебели",
      ogTitle: "Контакты CTC - Эксперты по деревянной мебели на Кипре",
      ogDescription: "Обратитесь к нашей команде опытных мастеров для заказа деревянной мебели, уличных конструкций и услуг по дизайну интерьера на Кипре.",
      ogImage: "/logo/Лого СТС без рамки 4.jpg"
    },
    "directions-street-furniture": {
      title: "Уличная мебель - CTC Деревянная мебель на Кипре",
      description: "Откройте для себя наш ассортимент высококачественной уличной деревянной мебели, созданной для кипрского климата. Шезлонги, кресла и детские домики, изготовленные с заботой.",
      keywords: "уличная мебель, деревянные шезлонги, садовые кресла, детские домики, Кипр",
      ogTitle: "Уличная деревянная мебель - CTC Кипр",
      ogDescription: "Устойчивая к погодным условиям и долговечная уличная мебель, сочетающая комфорт со стилем для вашего сада, патио или террасы.",
      ogImage: "/images/outdoor furniture/963A9631.jpg"
    },
    "directions-interior-furniture": {
      title: "Мебель в интерьере - CTC Деревянная мебель на Кипре",
      description: "Изучите нашу коллекцию деревянной мебели для интерьера на заказ. Столы, книжные шкафы, тумбочки и кровати, изготовленные с точностью и стилем.",
      keywords: "мебель для интерьера, деревянные столы, книжные шкафы, тумбочки, кровати, Кипр",
      ogTitle: "Деревянная мебель для интерьера - CTC Кипр",
      ogDescription: "Мебель для интерьера на заказ, разработанная с учетом как эстетики, так и функциональности. Каждое изделие изготовлено с вниманием к деталям.",
      ogImage: "/images/indoor/2024-06-24 06-27-19_1719213072226.JPG"
    },
    "directions-architectural-forms": {
      title: "Малые архитектурные формы - CTC Деревянные конструкции на Кипре",
      description: "Деревянные архитектурные конструкции на заказ, включая гостевые дома и беседки. Построены из качественных материалов с мастерством экспертов.",
      keywords: "архитектурные формы, деревянные беседки, гостевые дома, деревянные конструкции, Кипр",
      ogTitle: "Деревянные архитектурные формы - CTC Кипр",
      ogDescription: "Гостевые дома и беседки, построенные из качественных материалов с мастерством экспертов для вашего открытого пространства.",
      ogImage: "/images/outdoor furniture/беседка.jpg"
    },
    "directions-interior-design": {
      title: "Дизайн интерьеров - CTC Дизайнерские решения на Кипре",
      description: "Профессиональные услуги по дизайну интерьера от минимализма до барокко. Создайте пространства, отражающие ваш личный стиль, с нашими опытными дизайнерами.",
      keywords: "дизайн интерьера, ремонтные работы, дизайн дома, деревянные интерьеры, Кипр",
      ogTitle: "Услуги по дизайну интерьера - CTC Кипр",
      ogDescription: "От минимализма до барокко, мы создаем пространства, отражающие ваш личный стиль, с нашими профессиональными услугами по дизайну интерьера.",
      ogImage: "/images/indoor/2024-05-12 23-19-10.JPG"
    },
    "directions-private-houses": {
      title: "Частные жилые дома - CTC Строительство на Кипре",
      description: "Индивидуальное проектирование и строительство частных жилых домов по вашему индивидуальному плану и спецификациям.",
      keywords: "частные дома, жилое строительство, индивидуальный дизайн дома, деревянные дома, Кипр",
      ogTitle: "Частные жилые дома - CTC Кипр",
      ogDescription: "Проектирование и строительство частных жилых домов по вашему индивидуальному плану и спецификациям.",
      ogImage: "/images/house/house(1).jpg"
    },
    "directions-restoration": {
      title: "Реставрация - CTC Реставрация деревянной мебели на Кипре",
      description: "Экспертные услуги по реставрации и уходу за изделиями из дерева. Дайте новую жизнь вашим ценным деревянным предметам с нашим профессиональным уходом.",
      keywords: "реставрация деревянной мебели, уход за деревом, ремонт мебели, реставрация антиквариата, Кипр",
      ogTitle: "Реставрация деревянной мебели - CTC Кипр",
      ogDescription: "Дарим новую жизнь вашим деревянным изделиям с помощью экспертной реставрации и ухода. Профессиональные услуги по уходу за всеми деревянными предметами.",
      ogImage: "/images/restoration/after/photo_2025-07-01_07-07-40.jpg"
    }
  }
};
const seoData = processImagePaths(seoDataRaw);
function getPageFromPath(path) {
  const parts = path.split("/").filter(Boolean);
  if (parts.length <= 1) {
    return "home";
  }
  if (parts.length > 2 && parts[1] === "directions") {
    return `directions-${parts[2]}`;
  }
  return parts[1];
}
const seo = derived(
  [currentLang, page],
  ([$currentLang, $page]) => {
    const $location = $page.url.pathname;
    const pageName = getPageFromPath($location);
    const pageSeo = seoData[$currentLang]?.[pageName] || seoData[$currentLang]?.home;
    const pathWithoutLang = $location === `/${$currentLang}` ? "" : $location.startsWith(`/${$currentLang}/`) ? $location.substring($currentLang.length + 1) : $location;
    return {
      ...pageSeo,
      lang: $currentLang,
      canonicalUrl: `https://ctc.cy/${$currentLang}${pathWithoutLang}`,
      alternateUrls: languages.map((lang) => ({
        lang,
        url: `https://ctc.cy/${lang}${pathWithoutLang}`
      }))
    };
  }
);
function SEO($$payload, $$props) {
  push();
  let unsubscribe;
  unsubscribe = seo.subscribe((data) => {
  });
  onDestroy(() => {
    if (unsubscribe) {
      unsubscribe();
    }
  });
  pop();
}
function _layout($$payload, $$props) {
  push();
  SEO();
  $$payload.out.push(`<!----> <div class="app svelte-164raf7">`);
  Header($$payload);
  $$payload.out.push(`<!----> <main class="svelte-164raf7"><!---->`);
  slot($$payload, $$props, "default", {});
  $$payload.out.push(`<!----></main> `);
  Footer($$payload);
  $$payload.out.push(`<!----></div>`);
  pop();
}
export {
  _layout as default
};
