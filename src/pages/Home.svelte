<script>
  import { createEventDispatcher, onMount } from 'svelte';
  import ContactForm from '../components/ContactForm.svelte';
  import { currentLang, t } from '../stores/languageStore';
  import { link, loc } from 'svelte-spa-router';
  import { getAssetPath } from '../utils/assetPath';

  const dispatch = createEventDispatcher();

  // Helper function to get language-specific route
  function getLangRoute(route) {
    return `/${$currentLang}${route}`;
  }

  let showContactModal = false;

  function openContactModal() {
    showContactModal = true;
  }

  function closeContactModal() {
    showContactModal = false;
  }

  // Slider functionality
  $: slides = [
    {
      image: getAssetPath('/images/indoor/2024-06-01 14-39-21.JPG'),
      title: $t('customFurnitureTitle'),
      description: $t('customFurnitureDesc')
    },
    {
      image: getAssetPath('/images/indoor/2024-05-12 23-19-10.JPG'),
      title: $t('interiorFurnitureTitle'),
      description: $t('interiorFurnitureDesc')
    },
    {
      image: getAssetPath('/images/small forms/963A9646.jpg'),
      title: $t('outdoorFurnitureTitle'),
      description: $t('outdoorFurnitureDesc')
    }
  ];

  let currentSlide = 0;
  let autoplayInterval;

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  }

  function handleKeydown(event) {
    if (event.key === 'ArrowRight') {
      nextSlide();
    } else if (event.key === 'ArrowLeft') {
      prevSlide();
    }
  }

  // Start autoplay
  function startAutoplay() {
    autoplayInterval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds
  }

  // Stop autoplay on user interaction
  function stopAutoplay() {
    if (autoplayInterval) {
      clearInterval(autoplayInterval);
    }
  }

  onMount(() => {
    // Add keyboard event listener
    window.addEventListener('keydown', handleKeydown);

    // Start autoplay
    startAutoplay();

    // Clean up on component unmount
    return () => {
      window.removeEventListener('keydown', handleKeydown);
      stopAutoplay();
    };
  });

  // Sample data for specialists
  // const specialists = [
  //   {
  //     name: 'Иван Петров',
  //     position: 'Главный дизайнер',
  //     description: 'Более 15 лет опыта в дизайне мебели из дерева. Специализируется на уникальных предметах интерьера.',
  //     image: '/images/2024-07-20 13-40-13.JPG'
  //   },
  //   {
  //     name: 'Мария Иванова',
  //     position: 'Руководитель проектов',
  //     description: 'Координирует все этапы производства, от эскиза до доставки. Гарантирует соблюдение сроков.',
  //     image: '/images/2024-07-20 13-40-20.JPG'
  //   },
  //   {
  //     name: 'Алексей Смирнов',
  //     position: 'Мастер-краснодеревщик',
  //     description: 'Эксперт по работе с редкими породами дерева. Создает изделия, которые служат десятилетиями.',
  //     image: '/images/2024-07-06 14-46-41.JPG'
  //   }
  // ];

  // Sample data for reviews
  // const reviews = [
  //   {
  //     name: 'Елена К.',
  //     text: 'Заказывали кухонный гарнитур из дуба. Результат превзошел все ожидания! Качество материалов и исполнения на высшем уровне.',
  //     rating: 5
  //   },
  //   {
  //     name: 'Дмитрий С.',
  //     text: 'Компания изготовила для нас беседку и садовую мебель. Все было доставлено и установлено точно в срок. Уже второй год пользуемся и никаких проблем.',
  //     rating: 5
  //   },
  //   {
  //     name: 'Анна М.',
  //     text: 'Обратились для реставрации старинного комода. Мастера сохранили его исторический вид, но при этом вернули функциональность. Очень довольны!',
  //     rating: 5
  //   }
  // ];
  //
  // // Sample data for blog posts
  // const blogPosts = [
  //   {
  //     title: 'Как выбрать правильную древесину для мебели на открытом воздухе',
  //     excerpt: 'В этой статье мы рассмотрим различные породы дерева и их устойчивость к внешним факторам...',
  //     image: '/images/2024-06-25 16-34-51.JPG',
  //     url: '/blog/choosing-wood-for-outdoor-furniture'
  //   },
  //   {
  //     title: 'Уход за деревянной мебелью: советы профессионалов',
  //     excerpt: 'Правильный уход за деревянной мебелью может значительно продлить срок ее службы...',
  //     image: '/images/2024-06-24 06-27-19_1719213072226.JPG',
  //     url: '/blog/wooden-furniture-care'
  //   }
  // ];
</script>

<!-- Block 1: Banner -->
<section class="banner">
  <div class="container">
    <div class="banner-content">
      <div class="banner-subtitle">{$t('bannerSubtitle')}</div>
      <h1 class="banner-title">{$t('bannerTitle')}</h1>
    </div>
  </div>
</section>

<!-- Block 2: Image Slider -->
<section class="slider-section">
  <div class="slider-container">
    {#each slides as slide, index}
      <div class="slider-item {currentSlide === index ? 'active' : ''}">
        <div class="slider-image" style="background-image: url('{slide.image}');">
          <div class="slider-gradient">
            <div class="slider-content">
              <h3 class="slider-title">{slide.title}</h3>
              <p class="slider-description">{slide.description}</p>
            </div>
          </div>
        </div>
      </div>
    {/each}

    <div class="slider-controls">
      <button 
        class="slider-arrow slider-prev" 
        on:click={() => { stopAutoplay(); prevSlide(); }}
        aria-label="Previous slide"
      >
        <svg viewBox="0 0 7.3 13" xmlns="http://www.w3.org/2000/svg">
          <polyline fill="none" stroke="#000000" stroke-width="1" points="0.5,0.5 6.5,6.5 0.5,12.5"/>
        </svg>
      </button>
      <button 
        class="slider-arrow slider-next" 
        on:click={() => { stopAutoplay(); nextSlide(); }}
        aria-label="Next slide"
      >
        <svg viewBox="0 0 7.3 13" xmlns="http://www.w3.org/2000/svg">
          <polyline fill="none" stroke="#000000" stroke-width="1" points="0.5,0.5 6.5,6.5 0.5,12.5"/>
        </svg>
      </button>
    </div>

    <div class="slider-indicators">
      {#each slides as _, index}
        <button 
          class="slider-indicator {currentSlide === index ? 'active' : ''}" 
          on:click={() => { stopAutoplay(); currentSlide = index; }}
          aria-label="Go to slide {index + 1}"
        ></button>
      {/each}
    </div>
  </div>
</section>

<!-- Block 3: Our Services -->
<section class="services-section">
  <div class="container">
    <div class="services-header">
      <h2 class="services-title">{$t('servicesTitle')}</h2>
    </div>
    <div class="services-grid">
      <a href={getLangRoute('/directions/street-furniture')} use:link class="service-card">
        <div class="service-icon">
          <img src={getAssetPath('/images/outdoor furniture/chair.jpg')} alt={$t('outdoorFurnitureService')} />
          <div class="service-content">
            <h3 class="service-title">{$t('outdoorFurnitureService')}</h3>
            <p class="service-description">{$t('outdoorFurnitureDesc')}</p>
          </div>
        </div>
      </a>

      <a href={getLangRoute('/directions/interior-furniture')} use:link class="service-card">
        <div class="service-icon">
          <img src={getAssetPath('/images/indoor/shelf.jpg')} alt={$t('interiorFurnitureService')} />
          <div class="service-content">
            <h3 class="service-title">{$t('interiorFurnitureService')}</h3>
            <p class="service-description">{$t('interiorFurnitureDesc')}</p>
          </div>
        </div>
      </a>

      <a href={getLangRoute('/directions/architectural-forms')} use:link class="service-card">
        <div class="service-icon">
          <img src={getAssetPath('/images/small%20forms/беседка.jpg')} alt={$t('architecturalStructuresService')} />
          <div class="service-content">
            <h3 class="service-title">{$t('architecturalStructuresService')}</h3>
            <p class="service-description">{$t('architecturalStructuresDesc')}</p>
          </div>
        </div>
      </a>

      <a href={getLangRoute('/directions/for-kids')} use:link class="service-card">
        <div class="service-icon">
          <img src={getAssetPath('/images/for%20kids/2024-06-21 16-19-32.JPG')} alt={$t('forKidsService')} />
          <div class="service-content">
            <h3 class="service-title">{$t('forKidsService')}</h3>
            <p class="service-description">{$t('forKidsDesc')}</p>
          </div>
        </div>
      </a>

      <a href={getLangRoute('/directions/private-houses')} use:link class="service-card">
        <div class="service-icon">
          <img src={getAssetPath('/images/house/house(1).jpg')} alt={$t('privateHomesService')} />
          <div class="service-content">
            <h3 class="service-title">{$t('privateHomesService')}</h3>
            <p class="service-description">{$t('privateHomesDesc')}</p>
          </div>
        </div>
      </a>

      <a href={getLangRoute('/directions/restoration')} use:link class="service-card">
        <div class="service-icon">
          <img src={getAssetPath('/images/restoration/after/photo_2025-07-01_07-07-40.jpg')} alt={$t('restorationService')} />
          <div class="service-content">
            <h3 class="service-title">{$t('restorationService')}</h3>
            <p class="service-description">{$t('restorationDesc')}</p>
          </div>
        </div>
      </a>
    </div>
  </div>
</section>

<!--&lt;!&ndash; Block 4: About Us &ndash;&gt;-->
<!--<section class="about-section">-->
<!--  <div class="container">-->
<!--    <div class="about-header">-->
<!--      <h2 class="about-title">About Us</h2>-->
<!--    </div>-->
<!--    <div class="about-content">-->
<!--      <div class="about-text">-->
<!--        <p>CTC is a young company, but the experience of the specialists who work in it is very solid.</p>-->
<!--        <ul class="about-features">-->
<!--          <li>We have been working with wood in different countries with various climatic conditions.</li>-->
<!--          <li>We know how to make a quality product that will not lose its appearance under the scorching sun, rain or snow.</li>-->
<!--          <li>We use wood species most suitable for use in the climatic conditions of Cyprus, they have high density and are resistant to sun, moisture, sea salt.</li>-->
<!--          <li>We will complete your order on time, deliver and install it at a time convenient for you. We deliver throughout the Republic of Cyprus.</li>-->
<!--        </ul>-->
<!--      </div>-->
<!--      <div class="about-image">-->
<!--        <img src="/images/about-image.jpg" alt="Our workshop" />-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!--</section>-->

<!--&lt;!&ndash; Contact Form Section &ndash;&gt;-->
<!--<section class="contact-section">-->
<!--  <div class="container">-->
<!--    <div class="contact-header">-->
<!--      <h2 class="contact-title">Get in Touch</h2>-->
<!--      <p class="contact-subtitle">Fill out the form below, and we'll contact you to discuss your project.</p>-->
<!--    </div>-->
<!--    <div class="contact-form-wrapper">-->
<!--      <ContactForm formTitle="Request a Consultation" buttonText="Submit" />-->
<!--    </div>-->
<!--  </div>-->
<!--</section>-->

<!--&lt;!&ndash; Block 5: Testimonials &ndash;&gt;-->
<!--<section class="testimonials-section">-->
<!--  <div class="container">-->
<!--    <div class="testimonials-header">-->
<!--      <h2 class="testimonials-title">What Our Clients Say</h2>-->
<!--    </div>-->
<!--    <div class="testimonials-slider">-->
<!--      <div class="testimonial-slide active">-->
<!--        <div class="testimonial-content">-->
<!--          <div class="testimonial-rating">-->
<!--            <span class="star filled">★</span>-->
<!--            <span class="star filled">★</span>-->
<!--            <span class="star filled">★</span>-->
<!--            <span class="star filled">★</span>-->
<!--            <span class="star filled">★</span>-->
<!--          </div>-->
<!--          <p class="testimonial-text">"We ordered an oak kitchen set. The result exceeded all expectations! The quality of materials and workmanship is top-notch."</p>-->
<!--          <p class="testimonial-author">— Elena K.</p>-->
<!--        </div>-->
<!--      </div>-->

<!--      <div class="testimonials-controls">-->
<!--        <div class="testimonials-dots">-->
<!--          <span class="dot active"></span>-->
<!--          <span class="dot"></span>-->
<!--          <span class="dot"></span>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!--</section>-->

<!--&lt;!&ndash; Block 6: Blog &ndash;&gt;-->
<!--<section class="blog-section">-->
<!--  <div class="container">-->
<!--    <div class="blog-header">-->
<!--      <h2 class="blog-title">Latest Articles</h2>-->
<!--    </div>-->
<!--    <div class="blog-grid">-->
<!--      <div class="blog-card">-->
<!--        <div class="blog-image" style="background-image: url('/images/blog-wood-outdoor.jpg');"></div>-->
<!--        <div class="blog-content">-->
<!--          <h3 class="blog-post-title">How to Choose the Right Wood for Outdoor Furniture</h3>-->
<!--          <p class="blog-excerpt">In this article, we'll look at different types of wood and their resistance to external factors...</p>-->
<!--          <a href="/blog/choosing-wood-for-outdoor-furniture" class="blog-link">Read More</a>-->
<!--        </div>-->
<!--      </div>-->

<!--      <div class="blog-card">-->
<!--        <div class="blog-image" style="background-image: url('/images/blog-furniture-care.jpg');"></div>-->
<!--        <div class="blog-content">-->
<!--          <h3 class="blog-post-title">Wooden Furniture Care: Professional Tips</h3>-->
<!--          <p class="blog-excerpt">Proper care of wooden furniture can significantly extend its lifespan...</p>-->
<!--          <a href="/blog/wooden-furniture-care" class="blog-link">Read More</a>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--    <div class="blog-footer">-->
<!--      <a href="/blog" class="btn">View All Articles</a>-->
<!--    </div>-->
<!--  </div>-->
<!--</section>-->

<!--&lt;!&ndash; Contact Modal &ndash;&gt;-->
<!--{#if showContactModal}-->
<!--  <div class="modal-overlay" on:click={closeContactModal}>-->
<!--    <div class="modal-content" on:click|stopPropagation>-->
<!--      <ContactForm -->
<!--        formTitle="Получить консультацию" -->
<!--        buttonText="Отправить" -->
<!--        isModal={true} -->
<!--        on:close={closeContactModal} -->
<!--      />-->
<!--    </div>-->
<!--  </div>-->
<!--{/if}-->

<style>
  .banner {
    position: relative;
    color: var(--text-color);
    text-align: center;
    padding: 90px 0 120px;
    background-color: var(--white);
    height: 50vh;
  }

  .banner-content {
    position: relative;
    z-index: 1;
    padding: 2rem;
    max-width: 800px;
    margin: 0 auto;
  }

  .banner-subtitle {
    font-size: 1rem;
    font-weight: 500;
    text-transform: uppercase;
    margin-bottom: 1rem;
    letter-spacing: 1px;
  }

  .banner-title {
    font-size: 5rem;
    font-weight: 500;
    margin-bottom: 2rem;
    line-height: 1.2;
  }

  .section {
    padding: 5rem 0;
  }

  .bg-light {
    background-color: var(--light-bg);
  }

  .section-title {
    text-align: center;
    margin-bottom: 3rem;
  }

  /* Slider Section */
  .slider-section {
    background-color: var(--primary-color);
    height: 90vh;
    position: relative;
  }

  .slider-container {
    height: 100%;
    position: relative;
  }

  .slider-item {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    transition: opacity 0.5s ease;
  }

  .slider-item.active {
    opacity: 1;
  }

  .slider-image {
    height: 100%;
    width: 100%;
    background-size: cover;
    background-position: center;
  }

  .slider-gradient {
    height: 100%;
    width: 100%;
    background-image: linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1));
    display: flex;
    align-items: flex-end;
  }

  .slider-content {
    color: var(--white);
    padding: 2rem;
    max-width: 800px;
    margin: 0 auto 3rem;
    text-align: center;
  }

  .slider-title {
    font-size: 1.75rem;
    margin-bottom: 1rem;
    color: var(--white);
  }

  .slider-description {
    font-size: 1.1rem;
  }

  .slider-controls {
    position: absolute;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    justify-content: space-between;
    padding: 0 2rem;
    z-index: 10;
  }

  .slider-arrow {
    width: 30px;
    height: 30px;
    background-color: var(--white);
    border: none;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .slider-arrow svg {
    width: 7px;
    height: 13px;
  }

  .slider-prev svg {
    transform: rotate(180deg);
  }

  /* Services Section */
  .services-section {
    padding: 5rem 0;
    background-color: var(--white);
  }

  .services-header {
    text-align: center;
    margin-bottom: 3rem;
  }

  .services-title {
    font-size: 2.5rem;
    font-weight: 500;
  }

  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 3rem;
    justify-items: center;
  }

  .service-card {
    text-align: center;
    padding: 1rem;
    transition: transform 0.3s ease;
    position: relative;
    cursor: pointer;
    width: 100%;
    max-width: 350px;
    text-decoration: none;
    color: inherit;
    display: block;
  }

  .service-card:hover {
    /*transform: translateY(-10px);*/
  }

  .service-icon {
    width: 100%;
    aspect-ratio: 1 / 1;
    margin: 0 auto;
    border-radius: 8px;
    overflow: hidden;
    position: relative;
  }

  .service-icon img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  .service-card:hover .service-icon img {
    transform: scale(1.05);
  }

  .service-content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.7);
    opacity: 0;
    transition: opacity 0.3s ease;
    padding: 2rem;
    color: var(--white);
    border-radius: 8px;
  }

  .service-card:hover .service-content {
    opacity: 1;
  }

  .service-title {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    font-weight: 600;
    color: var(--white);
  }

  .service-description {
    color: var(--white);
    line-height: 1.6;
  }

  /* About Section */
  .about-section {
    padding: 5rem 0;
    background-color: var(--light-bg);
  }

  .about-header {
    text-align: center;
    margin-bottom: 3rem;
  }

  .about-title {
    font-size: 2.5rem;
    font-weight: 500;
  }

  .about-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: center;
  }

  .about-text p {
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
  }

  .about-features {
    list-style: disc;
    padding-left: 1.5rem;
  }

  .about-features li {
    margin-bottom: 1rem;
    font-size: 1.1rem;
  }

  .about-image img {
    width: 100%;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  /* Contact Section */
  .contact-section {
    padding: 5rem 0;
    background-color: var(--white);
  }

  .contact-header {
    text-align: center;
    margin-bottom: 3rem;
  }

  .contact-title {
    font-size: 2.5rem;
    font-weight: 500;
    margin-bottom: 1rem;
  }

  .contact-subtitle {
    font-size: 1.1rem;
    max-width: 600px;
    margin: 0 auto;
  }

  .contact-form-wrapper {
    max-width: 600px;
    margin: 0 auto;
  }

  /* Testimonials Section */
  .testimonials-section {
    padding: 5rem 0;
    background-color: var(--light-bg);
  }

  .testimonials-header {
    text-align: center;
    margin-bottom: 3rem;
  }

  .testimonials-title {
    font-size: 2.5rem;
    font-weight: 500;
  }

  .testimonials-slider {
    position: relative;
    max-width: 800px;
    margin: 0 auto;
  }

  .testimonial-slide {
    opacity: 0;
    transition: opacity 0.5s ease;
    position: absolute;
    width: 100%;
  }

  .testimonial-slide.active {
    opacity: 1;
    position: relative;
  }

  .testimonial-content {
    background-color: var(--white);
    border-radius: 8px;
    padding: 2.5rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    text-align: center;
  }

  .testimonial-rating {
    margin-bottom: 1.5rem;
  }

  .star {
    color: #ccc;
    font-size: 1.2rem;
  }

  .star.filled {
    color: #ffc107;
  }

  .testimonial-text {
    font-style: italic;
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }

  .testimonial-author {
    font-weight: 600;
  }

  .testimonials-controls {
    margin-top: 2rem;
    display: flex;
    justify-content: center;
  }

  .testimonials-dots {
    display: flex;
    gap: 0.5rem;
  }

  .dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #ccc;
    cursor: pointer;
  }

  .dot.active {
    background-color: var(--secondary-color);
  }

  /* Slider indicators */
  .slider-indicators {
    position: absolute;
    bottom: 2rem;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 0.75rem;
    z-index: 10;
  }

  .slider-indicator {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.5);
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.3s ease;
  }

  .slider-indicator:hover {
    background-color: rgba(255, 255, 255, 0.8);
  }

  .slider-indicator.active {
    background-color: var(--white);
    transform: scale(1.2);
  }

  /* Blog Section */
  .blog-section {
    padding: 5rem 0;
    background-color: var(--white);
  }

  .blog-header {
    text-align: center;
    margin-bottom: 3rem;
  }

  .blog-title {
    font-size: 2.5rem;
    font-weight: 500;
  }

  .blog-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
    gap: 2.5rem;
    margin-bottom: 3rem;
  }

  .blog-card {
    background-color: var(--white);
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .blog-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  }

  .blog-image {
    height: 250px;
    background-size: cover;
    background-position: center;
  }

  .blog-content {
    padding: 2rem;
  }

  .blog-post-title {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    font-weight: 600;
  }

  .blog-excerpt {
    color: var(--text-color);
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }

  .blog-link {
    color: var(--secondary-color);
    font-weight: 600;
    text-decoration: none;
    position: relative;
    display: inline-block;
  }

  .blog-link::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: -2px;
    left: 0;
    background-color: var(--secondary-color);
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.3s ease;
  }

  .blog-link:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  .blog-footer {
    text-align: center;
  }

  /* Modal */
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2000;
  }

  .modal-content {
    width: 90%;
    max-width: 500px;
  }

  .text-center {
    text-align: center;
  }

  .mt-4 {
    margin-top: 2rem;
  }

  /* Responsive styles */
  @media (max-width: 768px) {

    .banner-title {
      font-size: 3rem;
    }

    .contact-container {
      grid-template-columns: 1fr;
    }

    .services-grid {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    .service-card {
      max-width: 100%;
      font-size: 0.7rem;
    }

    .directions-grid,
    .specialists-grid,
    .reviews-grid,
    .blog-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
