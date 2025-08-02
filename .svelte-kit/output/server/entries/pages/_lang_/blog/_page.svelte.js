import { z as push, E as store_get, N as ensure_array_like, I as attr_class, G as escape_html, P as stringify, O as attr_style, F as attr, J as unsubscribe_stores, B as pop } from "../../../../chunks/index.js";
import { p as page } from "../../../../chunks/stores.js";
import "../../../../chunks/languageStore.js";
import { C as ContactForm } from "../../../../chunks/ContactForm.js";
import { g as getAssetPath } from "../../../../chunks/assetPath.js";
import { g as getLangRoute } from "../../../../chunks/routeUtils.js";
function Blog($$payload, $$props) {
  push();
  var $$store_subs;
  let filteredPosts;
  const blogPosts = [
    {
      id: 1,
      title: "Как выбрать правильную древесину для мебели на открытом воздухе",
      excerpt: "В этой статье мы рассмотрим различные породы дерева и их устойчивость к внешним факторам, таким как солнце, дождь и перепады температур. Правильный выбор древесины - залог долговечности вашей уличной мебели.",
      image: getAssetPath("/images/2024-06-25 16-34-51.JPG"),
      date: "25 июня 2024",
      author: "Иван Петров",
      category: "Советы",
      url: "/blog/choosing-wood-for-outdoor-furniture"
    },
    {
      id: 2,
      title: "Уход за деревянной мебелью: советы профессионалов",
      excerpt: "Правильный уход за деревянной мебелью может значительно продлить срок ее службы. В этой статье мы делимся профессиональными советами по уходу за различными типами деревянной мебели.",
      image: getAssetPath("/images/2024-06-24 06-27-19_1719213072226.JPG"),
      date: "24 июня 2024",
      author: "Мария Иванова",
      category: "Уход",
      url: "/blog/wooden-furniture-care"
    },
    {
      id: 3,
      title: "Тренды в дизайне деревянной мебели 2024",
      excerpt: "Какие тренды в дизайне деревянной мебели будут актуальны в 2024 году? Мы изучили последние тенденции и готовы поделиться с вами самыми интересными идеями для вашего интерьера.",
      image: getAssetPath("/images/2024-07-06 14-46-41.JPG"),
      date: "6 июля 2024",
      author: "Алексей Смирнов",
      category: "Дизайн",
      url: "/blog/wooden-furniture-trends-2024"
    },
    {
      id: 4,
      title: "Экологичность деревянной мебели: мифы и реальность",
      excerpt: "Деревянная мебель считается экологичным выбором, но так ли это на самом деле? В этой статье мы разберемся, какие факторы влияют на экологичность деревянной мебели.",
      image: getAssetPath("/images/2024-05-13 12-08-37.JPG"),
      date: "13 мая 2024",
      author: "Иван Петров",
      category: "Экология",
      url: "/blog/eco-friendly-wooden-furniture"
    },
    {
      id: 5,
      title: "Как выбрать деревянную мебель для детской комнаты",
      excerpt: "Выбор мебели для детской комнаты - ответственная задача. В этой статье мы расскажем, на что обратить внимание при выборе деревянной мебели для детей.",
      image: getAssetPath("/images/2024-05-12 23-19-10.JPG"),
      date: "12 мая 2024",
      author: "Мария Иванова",
      category: "Советы",
      url: "/blog/wooden-furniture-for-kids-room"
    },
    {
      id: 6,
      title: "Реставрация старинной деревянной мебели: пошаговое руководство",
      excerpt: "Хотите вернуть жизнь старинной деревянной мебели? В этой статье мы предлагаем пошаговое руководство по реставрации, которое поможет вам сохранить историческую ценность предмета.",
      image: getAssetPath("/images/2024-04-11 11-18-49.JPG"),
      date: "11 апреля 2024",
      author: "Алексей Смирнов",
      category: "Реставрация",
      url: "/blog/antique-furniture-restoration-guide"
    }
  ];
  const categories = [
    { id: "all", name: "Все статьи" },
    { id: "Советы", name: "Советы" },
    { id: "Уход", name: "Уход" },
    { id: "Дизайн", name: "Дизайн" },
    { id: "Экология", name: "Экология" },
    { id: "Реставрация", name: "Реставрация" }
  ];
  let activeCategory = "all";
  store_get($$store_subs ??= {}, "$page", page).url.pathname;
  filteredPosts = blogPosts;
  const each_array = ensure_array_like(categories);
  const each_array_1 = ensure_array_like(filteredPosts);
  $$payload.out.push(`<section class="page-header svelte-5buvig"><div class="container"><h1 class="svelte-5buvig">Блог</h1></div></section> <section class="section"><div class="container"><div class="blog-intro svelte-5buvig"><p>В нашем блоге мы делимся полезной информацией о деревянной мебели, советами по уходу, 
        трендами в дизайне и многим другим. Здесь вы найдете статьи, которые помогут вам 
        сделать правильный выбор и сохранить вашу мебель в отличном состоянии на долгие годы.</p></div> <div class="blog-filter svelte-5buvig"><ul class="filter-categories svelte-5buvig"><!--[-->`);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let category = each_array[$$index];
    $$payload.out.push(`<li><button${attr_class(`filter-btn ${stringify(activeCategory === category.id ? "active" : "")}`, "svelte-5buvig")}>${escape_html(category.name)}</button></li>`);
  }
  $$payload.out.push(`<!--]--></ul></div> <div class="blog-grid svelte-5buvig"><!--[-->`);
  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
    let post = each_array_1[$$index_1];
    $$payload.out.push(`<div class="blog-card svelte-5buvig"><div class="blog-image svelte-5buvig"${attr_style(`background-image: url('${stringify(post.image)}');`)}></div> <div class="blog-content svelte-5buvig"><div class="blog-meta svelte-5buvig"><span class="blog-date">${escape_html(post.date)}</span> <span class="blog-category svelte-5buvig">${escape_html(post.category)}</span></div> <h3>${escape_html(post.title)}</h3> <p>${escape_html(post.excerpt)}</p> <div class="blog-footer svelte-5buvig"><span class="blog-author svelte-5buvig">Автор: ${escape_html(post.author)}</span> <a${attr("href", getLangRoute(post.url))} class="btn-text svelte-5buvig">Читать далее</a></div></div></div>`);
  }
  $$payload.out.push(`<!--]--></div></div></section> <section class="section contact-section svelte-5buvig"><div class="container"><div class="contact-container svelte-5buvig"><div class="contact-info svelte-5buvig"><h2 class="svelte-5buvig">Остались вопросы?</h2> <p>Если у вас есть вопросы о наших изделиях или услугах, заполните форму, и мы свяжемся с вами в ближайшее время.</p></div> <div class="contact-form-container">`);
  ContactForm($$payload, { formTitle: "Задать вопрос", buttonText: "Отправить" });
  $$payload.out.push(`<!----></div></div></div></section>`);
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  {
    if (store_get($$store_subs ??= {}, "$page", page).params.lang) ;
  }
  Blog($$payload);
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _page as default
};
