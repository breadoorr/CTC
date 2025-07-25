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
</script>

<section class="page-header">
  <div class="container">
    <h1>{$t('areasOfActivity')}</h1>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="directions-intro">
      <p>
        {$currentLang === 'en' 
          ? 'We love wood and know how to work with it. CTC is a young workshop based on years of experience. We have been working with wood for over 10 years and opened in Cyprus just over a year ago. During this time, we have completed dozens of orders for the creation and restoration of wooden furniture and outdoor structures. Our clients return because they value honesty, craftsmanship, and results.'
          : 'Мы любим дерево и умеем с ним работать. СТС — это молодая мастерская, основанная на многолетнем опыте. Мы работаем с деревом более 10 лет и открылись на Кипре чуть больше года назад. За это время выполнили десятки заказов по созданию и реставрации деревянной мебели и уличных конструкций. Наши клиенты возвращаются — потому что ценят честность, мастерство и результат.'}
      </p>
      <p>
        {$currentLang === 'en' 
          ? 'We create: furniture for interiors and gardens, BBQ areas and furniture for terraces, gazebos, loungers, benches and children\'s playhouses, and restore favorite furniture, returning its former beauty. We use wood species tested by the Cypriot sun and salt air: iroko, meranti, Canadian oak. The entire product - from concept to assembly - is created by hand, with attention to detail.'
          : 'Мы создаём: мебель для интерьеров и садов, барбекю-зоны и мебель для террас, беседки, лежаки, скамейки и детские домики, реставрируем любимую мебель, возвращая ей былую красоту. Используем породы, проверенные кипрским солнцем и солёным воздухом: ирокко, миранти, канадский дуб. Всё изделие — от концепции до сборки — создаётся вручную, с вниманием к деталям.'}
      </p>
    </div>

    <div class="directions-grid">
      <!-- Direction 1 -->
      <div class="direction-card">
        <div class="direction-image" style="background-image: url('{getAssetPath('/images/outdoor furniture/chair.jpg')}');"></div>
        <div class="direction-content">
          <h3>{$t('outdoorFurniture')}</h3>
          <p>{$t('outdoorFurnitureDesc')}</p>
          <a href={getLangRoute('/directions/street-furniture')} use:link class="btn-text">{$currentLang === 'en' ? 'Learn More' : 'Подробнее'}</a>
        </div>
      </div>

      <!-- Direction 2 -->
      <div class="direction-card">
        <div class="direction-image" style="background-image: url('{getAssetPath('/images/indoor/shelf.jpg')}');"></div>
        <div class="direction-content">
          <h3>{$t('interiorFurniture')}</h3>
          <p>{$t('interiorFurnitureDesc')}</p>
          <a href={getLangRoute('/directions/interior-furniture')} use:link class="btn-text">{$currentLang === 'en' ? 'Learn More' : 'Подробнее'}</a>
        </div>
      </div>

      <!-- Direction 3 -->
      <div class="direction-card">
        <div class="direction-image" style="background-image: url('{getAssetPath('/images/small forms/беседка.jpg')}');"></div>
        <div class="direction-content">
          <h3>{$t('architecturalStructures')}</h3>
          <p>{$t('architecturalStructuresDesc')}</p>
          <a href={getLangRoute('/directions/architectural-forms')} use:link class="btn-text">{$currentLang === 'en' ? 'Learn More' : 'Подробнее'}</a>
        </div>
      </div>

<!--      &lt;!&ndash; Direction 4 &ndash;&gt;-->
<!--      <div class="direction-card">-->
<!--        <div class="direction-image" style="background-image: url('/images/outdoor furniture/2024-06-21 16-33-30.JPG');"></div>-->
<!--        <div class="direction-content">-->
<!--          <h3>{$t('interiorDesign')}</h3>-->
<!--          <p>{$t('interiorDesignDesc')}</p>-->
<!--          <a href={getLangRoute('/directions/interior-design')} use:link class="btn-text">{$currentLang === 'en' ? 'Learn More' : 'Подробнее'}</a>-->
<!--        </div>-->
<!--      </div>-->

      <!-- Direction 5 -->
      <div class="direction-card">
        <div class="direction-image" style="background-image: url('{getAssetPath('/images/house/house(1).jpg')}');"></div>
        <div class="direction-content">
          <h3>{$t('privateHomes')}</h3>
          <p>{$t('privateHomesDesc')}</p>
          <a href={getLangRoute('/directions/private-houses')} use:link class="btn-text">{$currentLang === 'en' ? 'Learn More' : 'Подробнее'}</a>
        </div>
      </div>

      <!-- Direction 6 -->
      <div class="direction-card">
        <div class="direction-image" style="background-image: url('{getAssetPath('/images/restoration/after/photo_2025-07-01_07-07-40.jpg')}');"></div>
        <div class="direction-content">
          <h3>{$t('restoration')}</h3>
          <p>{$t('restorationDesc')}</p>
          <a href={getLangRoute('/directions/restoration')} use:link class="btn-text">{$currentLang === 'en' ? 'Learn More' : 'Подробнее'}</a>
        </div>
      </div>

      <!-- Direction 7: For Kids -->
      <div class="direction-card">
        <div class="direction-image" style="background-image: url('{getAssetPath('/images/for kids/2024-06-21 16-19-32.JPG')}');"></div>
        <div class="direction-content">
          <h3>{$t('forKidsService')}</h3>
          <p>{$t('forKidsDesc')}</p>
          <a href={getLangRoute('/directions/for-kids')} use:link class="btn-text">{$currentLang === 'en' ? 'Learn More' : 'Подробнее'}</a>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section contact-section">
  <div class="container">
    <div class="contact-container">
      <div class="contact-info">
        <h2>{$currentLang === 'en' ? 'Need a consultation?' : 'Нужна консультация?'}</h2>
        <p>{$currentLang === 'en' 
          ? 'If you want to learn more about our areas of activity or discuss your project, fill out the form and we will contact you.' 
          : 'Если вы хотите узнать больше о наших направлениях деятельности или обсудить ваш проект, заполните форму, и мы свяжемся с вами.'}</p>
      </div>
      <div class="contact-form-container">
        <ContactForm 
          formTitle={$currentLang === 'en' ? 'Get a consultation' : 'Получить консультацию'} 
          buttonText={$currentLang === 'en' ? 'Submit' : 'Отправить'} 
        />
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

  .directions-intro {
    max-width: 800px;
    margin: 0 auto 3rem;
    text-align: center;
  }

  .directions-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 2rem;
  }

  .direction-card {
    background-color: var(--white);
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }

  .direction-card:hover {
    transform: translateY(-5px);
  }

  .direction-image {
    height: 200px;
    background-size: cover;
    background-position: center;
  }

  .direction-content {
    padding: 1.5rem;
  }

  .btn-text {
    display: inline-block;
    margin-top: 1rem;
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
    .directions-grid {
      grid-template-columns: 1fr;
    }

    .contact-container {
      grid-template-columns: 1fr;
    }
  }
</style>
