import { z as push, F as attr, B as pop, E as store_get, J as unsubscribe_stores } from "../../../../chunks/index.js";
import { p as page } from "../../../../chunks/stores.js";
import { C as ContactForm } from "../../../../chunks/ContactForm.js";
import { g as getAssetPath } from "../../../../chunks/assetPath.js";
import "../../../../chunks/languageStore.js";
function Services($$payload, $$props) {
  push();
  $$payload.out.push(`<section class="page-header"><div class="container"><h1>Сервис</h1></div></section> <section class="section"><div class="container"><div class="services-intro svelte-wxfoiy"><p>Компания СТС предлагает полный спектр услуг по работе с деревом - от проектирования и изготовления 
        до доставки, монтажа и последующего обслуживания. Мы гарантируем высокое качество на каждом этапе работы.</p></div> <div class="services-grid svelte-wxfoiy"><div class="service-card svelte-wxfoiy"><div class="service-icon svelte-wxfoiy"><img${attr("src", getAssetPath("/images/indoor/2024-05-12%2023-19-10.JPG"))} alt="Консультация" class="svelte-wxfoiy"/></div> <div class="service-content svelte-wxfoiy"><h3>Консультация</h3> <p>Наши специалисты помогут вам выбрать оптимальные материалы и дизайн для вашего проекта, учитывая все ваши пожелания и особенности помещения или участка.</p></div></div> <div class="service-card svelte-wxfoiy"><div class="service-icon svelte-wxfoiy"><img${attr("src", getAssetPath("/images/outdoor%20furniture/2024-04-11%2011-18-49.JPG"))} alt="Проектирование" class="svelte-wxfoiy"/></div> <div class="service-content svelte-wxfoiy"><h3>Проектирование</h3> <p>Мы разработаем детальный проект вашего изделия или конструкции, учитывая все технические требования и эстетические предпочтения.</p></div></div> <div class="service-card svelte-wxfoiy"><div class="service-icon svelte-wxfoiy"><img${attr("src", getAssetPath("/images/indoor/2024-06-01%2014-39-21.JPG"))} alt="Изготовление" class="svelte-wxfoiy"/></div> <div class="service-content svelte-wxfoiy"><h3>Изготовление</h3> <p>Производство изделий осуществляется на современном оборудовании с использованием качественных материалов и соблюдением всех технологических процессов.</p></div></div> <div class="service-card svelte-wxfoiy"><div class="service-icon svelte-wxfoiy"><img${attr("src", getAssetPath("/images/outdoor%20furniture/2024-06-24%2006-27-19_1719213080407.JPG"))} alt="Доставка и монтаж" class="svelte-wxfoiy"/></div> <div class="service-content svelte-wxfoiy"><h3>Доставка и монтаж</h3> <p>Мы доставим и установим вашу мебель или конструкцию в удобное для вас время. Работаем по всей Республике Кипр.</p></div></div> <div class="service-card svelte-wxfoiy"><div class="service-icon svelte-wxfoiy"><img${attr("src", getAssetPath("/images/indoor/2024-07-06%2014-43-32.JPG"))} alt="Обслуживание" class="svelte-wxfoiy"/></div> <div class="service-content svelte-wxfoiy"><h3>Обслуживание</h3> <p>Предлагаем услуги по уходу, ремонту и реставрации деревянных изделий, чтобы они сохраняли свой первоначальный вид на протяжении долгих лет.</p></div></div></div></div></section> <section class="section bg-light svelte-wxfoiy"><div class="container"><h2 class="section-title svelte-wxfoiy">Наши преимущества</h2> <div class="advantages-grid svelte-wxfoiy"><div class="advantage-item svelte-wxfoiy"><div class="advantage-icon svelte-wxfoiy">✓</div> <h3>Качество</h3> <p>Используем только высококачественные материалы и современные технологии</p></div> <div class="advantage-item svelte-wxfoiy"><div class="advantage-icon svelte-wxfoiy">✓</div> <h3>Сроки</h3> <p>Выполняем работы точно в установленные сроки</p></div> <div class="advantage-item svelte-wxfoiy"><div class="advantage-icon svelte-wxfoiy">✓</div> <h3>Гарантия</h3> <p>Предоставляем гарантию на все наши изделия и работы</p></div> <div class="advantage-item svelte-wxfoiy"><div class="advantage-icon svelte-wxfoiy">✓</div> <h3>Индивидуальный подход</h3> <p>Учитываем все пожелания клиента и особенности проекта</p></div></div></div></section> <section class="section contact-section svelte-wxfoiy"><div class="container"><div class="contact-container svelte-wxfoiy"><div class="contact-info svelte-wxfoiy"><h2 class="svelte-wxfoiy">Заказать услугу</h2> <p>Если вы хотите заказать услугу или получить консультацию, заполните форму, и мы свяжемся с вами в ближайшее время.</p></div> <div class="contact-form-container">`);
  ContactForm($$payload, { formTitle: "Заказать услугу", buttonText: "Отправить" });
  $$payload.out.push(`<!----></div></div></div></section>`);
  pop();
}
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  {
    if (store_get($$store_subs ??= {}, "$page", page).params.lang) ;
  }
  Services($$payload);
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _page as default
};
