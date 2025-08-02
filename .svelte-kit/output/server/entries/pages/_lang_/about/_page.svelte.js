import { z as push, F as attr, B as pop, E as store_get, J as unsubscribe_stores } from "../../../../chunks/index.js";
import { p as page } from "../../../../chunks/stores.js";
import { C as ContactForm } from "../../../../chunks/ContactForm.js";
import { g as getAssetPath } from "../../../../chunks/assetPath.js";
import "../../../../chunks/languageStore.js";
function About($$payload, $$props) {
  push();
  $$payload.out.push(`<section class="page-header"><div class="container"><h1>О компании</h1></div></section> <section class="section"><div class="container"><div class="about-content svelte-10nmfqe"><div class="about-image svelte-10nmfqe"><img${attr("src", getAssetPath("/images/outdoor%20furniture/2024-05-13%2012-08-37.JPG"))} alt="Наша компания" class="svelte-10nmfqe"/></div> <div class="about-text svelte-10nmfqe"><h2 class="svelte-10nmfqe">СТС - эксперты в деревянной мебели</h2> <p>СТС - молодая компания, но опыт специалистов, которые в ней работают, весьма солидный. 
          Мы объединили профессионалов с многолетним опытом работы с деревом, чтобы создавать 
          уникальные изделия, которые будут радовать наших клиентов долгие годы.</p> <h3 class="svelte-10nmfqe">Наша миссия</h3> <p>Создавать качественную, экологичную и долговечную мебель из дерева, которая станет 
          украшением вашего дома или офиса. Мы стремимся сохранить традиции деревообработки, 
          сочетая их с современными технологиями и дизайном.</p> <h3 class="svelte-10nmfqe">Наши ценности</h3> <ul class="svelte-10nmfqe"><li class="svelte-10nmfqe"><strong>Качество</strong> - мы используем только лучшие материалы и уделяем внимание каждой детали</li> <li class="svelte-10nmfqe"><strong>Надежность</strong> - мы всегда выполняем свои обязательства перед клиентами</li> <li class="svelte-10nmfqe"><strong>Экологичность</strong> - мы заботимся о природе и используем экологически чистые материалы</li> <li class="svelte-10nmfqe"><strong>Индивидуальный подход</strong> - мы учитываем все пожелания клиента и предлагаем оптимальные решения</li></ul></div></div></div></section> <section class="section bg-light"><div class="container"><h2 class="section-title">Наш опыт</h2> <div class="experience-grid svelte-10nmfqe"><div class="experience-item"><div class="experience-icon svelte-10nmfqe"><span class="number svelte-10nmfqe">15+</span></div> <h3>Лет опыта</h3> <p>Наши специалисты имеют более 15 лет опыта работы с деревом</p></div> <div class="experience-item"><div class="experience-icon svelte-10nmfqe"><span class="number svelte-10nmfqe">500+</span></div> <h3>Выполненных проектов</h3> <p>Более 500 успешно реализованных проектов различной сложности</p></div> <div class="experience-item"><div class="experience-icon svelte-10nmfqe"><span class="number svelte-10nmfqe">10+</span></div> <h3>Стран</h3> <p>Опыт работы в более чем 10 странах с различными климатическими условиями</p></div> <div class="experience-item"><div class="experience-icon svelte-10nmfqe"><span class="number svelte-10nmfqe">98%</span></div> <h3>Довольных клиентов</h3> <p>98% наших клиентов рекомендуют нас своим друзьям и знакомым</p></div></div></div></section> <section class="section contact-section svelte-10nmfqe"><div class="container"><div class="contact-container svelte-10nmfqe"><div class="contact-info svelte-10nmfqe"><h2 class="svelte-10nmfqe">Свяжитесь с нами</h2> <p>Если у вас есть вопросы или вы хотите обсудить ваш проект, заполните форму, и мы свяжемся с вами в ближайшее время.</p></div> <div class="contact-form-container">`);
  ContactForm($$payload, { formTitle: "Связаться с нами", buttonText: "Отправить" });
  $$payload.out.push(`<!----></div></div></div></section>`);
  pop();
}
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  {
    if (store_get($$store_subs ??= {}, "$page", page).params.lang) ;
  }
  About($$payload);
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _page as default
};
