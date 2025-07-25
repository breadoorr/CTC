<script>
  import { link, loc } from 'svelte-spa-router';
  import { currentLang, t } from '../stores/languageStore';
  import ContactForm from '../components/ContactForm.svelte';
  import { getAssetPath } from '../utils/assetPath';

  let currentPath = '';

  // Subscribe to location changes to update currentPath
  loc.subscribe(value => {
    currentPath = value.location + (value.querystring ? '?' + value.querystring : '');
  });

  // Helper function to get language-specific route
  function getLangRoute(route) {
    return `/${$currentLang}${route}`;
  }

  // Blog posts data
  const blogPosts = [
    {
      id: 1,
      title: 'Как выбрать правильную древесину для мебели на открытом воздухе',
      excerpt: 'В этой статье мы рассмотрим различные породы дерева и их устойчивость к внешним факторам, таким как солнце, дождь и перепады температур. Правильный выбор древесины - залог долговечности вашей уличной мебели.',
      image: getAssetPath('/images/2024-06-25 16-34-51.JPG'),
      date: '25 июня 2024',
      author: 'Иван Петров',
      category: 'Советы',
      url: '/blog/choosing-wood-for-outdoor-furniture'
    },
    {
      id: 2,
      title: 'Уход за деревянной мебелью: советы профессионалов',
      excerpt: 'Правильный уход за деревянной мебелью может значительно продлить срок ее службы. В этой статье мы делимся профессиональными советами по уходу за различными типами деревянной мебели.',
      image: getAssetPath('/images/2024-06-24 06-27-19_1719213072226.JPG'),
      date: '24 июня 2024',
      author: 'Мария Иванова',
      category: 'Уход',
      url: '/blog/wooden-furniture-care'
    },
    {
      id: 3,
      title: 'Тренды в дизайне деревянной мебели 2024',
      excerpt: 'Какие тренды в дизайне деревянной мебели будут актуальны в 2024 году? Мы изучили последние тенденции и готовы поделиться с вами самыми интересными идеями для вашего интерьера.',
      image: getAssetPath('/images/2024-07-06 14-46-41.JPG'),
      date: '6 июля 2024',
      author: 'Алексей Смирнов',
      category: 'Дизайн',
      url: '/blog/wooden-furniture-trends-2024'
    },
    {
      id: 4,
      title: 'Экологичность деревянной мебели: мифы и реальность',
      excerpt: 'Деревянная мебель считается экологичным выбором, но так ли это на самом деле? В этой статье мы разберемся, какие факторы влияют на экологичность деревянной мебели.',
      image: getAssetPath('/images/2024-05-13 12-08-37.JPG'),
      date: '13 мая 2024',
      author: 'Иван Петров',
      category: 'Экология',
      url: '/blog/eco-friendly-wooden-furniture'
    },
    {
      id: 5,
      title: 'Как выбрать деревянную мебель для детской комнаты',
      excerpt: 'Выбор мебели для детской комнаты - ответственная задача. В этой статье мы расскажем, на что обратить внимание при выборе деревянной мебели для детей.',
      image: getAssetPath('/images/2024-05-12 23-19-10.JPG'),
      date: '12 мая 2024',
      author: 'Мария Иванова',
      category: 'Советы',
      url: '/blog/wooden-furniture-for-kids-room'
    },
    {
      id: 6,
      title: 'Реставрация старинной деревянной мебели: пошаговое руководство',
      excerpt: 'Хотите вернуть жизнь старинной деревянной мебели? В этой статье мы предлагаем пошаговое руководство по реставрации, которое поможет вам сохранить историческую ценность предмета.',
      image: getAssetPath('/images/2024-04-11 11-18-49.JPG'),
      date: '11 апреля 2024',
      author: 'Алексей Смирнов',
      category: 'Реставрация',
      url: '/blog/antique-furniture-restoration-guide'
    }
  ];

  // Categories for filtering
  const categories = [
    { id: 'all', name: 'Все статьи' },
    { id: 'Советы', name: 'Советы' },
    { id: 'Уход', name: 'Уход' },
    { id: 'Дизайн', name: 'Дизайн' },
    { id: 'Экология', name: 'Экология' },
    { id: 'Реставрация', name: 'Реставрация' }
  ];

  let activeCategory = 'all';

  function filterBlog(categoryId) {
    activeCategory = categoryId;
  }

  $: filteredPosts = activeCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);
</script>

<section class="page-header">
  <div class="container">
    <h1>Блог</h1>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="blog-intro">
      <p>
        В нашем блоге мы делимся полезной информацией о деревянной мебели, советами по уходу, 
        трендами в дизайне и многим другим. Здесь вы найдете статьи, которые помогут вам 
        сделать правильный выбор и сохранить вашу мебель в отличном состоянии на долгие годы.
      </p>
    </div>

    <div class="blog-filter">
      <ul class="filter-categories">
        {#each categories as category}
          <li>
            <button 
              class="filter-btn {activeCategory === category.id ? 'active' : ''}" 
              on:click={() => filterBlog(category.id)}
            >
              {category.name}
            </button>
          </li>
        {/each}
      </ul>
    </div>

    <div class="blog-grid">
      {#each filteredPosts as post}
        <div class="blog-card">
          <div class="blog-image" style="background-image: url('{post.image}');"></div>
          <div class="blog-content">
            <div class="blog-meta">
              <span class="blog-date">{post.date}</span>
              <span class="blog-category">{post.category}</span>
            </div>
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
            <div class="blog-footer">
              <span class="blog-author">Автор: {post.author}</span>
              <a href={getLangRoute(post.url)} use:link class="btn-text">Читать далее</a>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<section class="section contact-section">
  <div class="container">
    <div class="contact-container">
      <div class="contact-info">
        <h2>Остались вопросы?</h2>
        <p>Если у вас есть вопросы о наших изделиях или услугах, заполните форму, и мы свяжемся с вами в ближайшее время.</p>
      </div>
      <div class="contact-form-container">
        <ContactForm formTitle="Задать вопрос" buttonText="Отправить" />
      </div>
    </div>
  </div>
</section>

<style>
  .page-header {
    background-color: var(--secondary-color);
    color: var(--white);
    padding: 8rem 0 4rem;
    margin-bottom: 2rem;
  }

  .page-header h1 {
    color: var(--white);
    margin: 0;
  }

  .blog-intro {
    max-width: 800px;
    margin: 0 auto 3rem;
    text-align: center;
  }

  .blog-filter {
    margin-bottom: 2rem;
  }

  .filter-categories {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    list-style: none;
    gap: 1rem;
  }

  .filter-btn {
    background: none;
    border: 1px solid var(--primary-color);
    color: var(--primary-color);
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .filter-btn:hover,
  .filter-btn.active {
    background-color: var(--primary-color);
    color: var(--white);
  }

  .blog-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 2rem;
  }

  .blog-card {
    background-color: var(--white);
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }

  .blog-card:hover {
    transform: translateY(-5px);
  }

  .blog-image {
    height: 200px;
    background-size: cover;
    background-position: center;
  }

  .blog-content {
    padding: 1.5rem;
  }

  .blog-meta {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    font-size: 0.9rem;
    color: var(--secondary-color);
  }

  .blog-category {
    background-color: var(--light-bg);
    padding: 0.2rem 0.5rem;
    border-radius: 4px;
  }

  .blog-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1.5rem;
    padding-top: 1rem;
    border-top: 1px solid var(--light-bg);
  }

  .blog-author {
    font-style: italic;
    font-size: 0.9rem;
  }

  .btn-text {
    display: inline-block;
    font-weight: 500;
    color: var(--primary-color);
  }

  .btn-text:hover {
    color: var(--secondary-color);
  }

  .contact-section {
    background-color: var(--primary-color);
    color: var(--white);
    margin-top: 4rem;
  }

  .contact-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: center;
  }

  .contact-info h2 {
    color: var(--white);
  }

  @media (max-width: 768px) {
    .filter-categories {
      flex-direction: column;
      align-items: center;
    }

    .blog-grid {
      grid-template-columns: 1fr;
    }

    .contact-container {
      grid-template-columns: 1fr;
    }
  }
</style>
