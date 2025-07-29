<script>
  import { currentLang, t } from '../stores/languageStore';
  import ContactForm from '../components/ContactForm.svelte';
  import { getAssetPath } from '../utils/assetPath';
</script>

<section class="page-header">
  <div class="container">
    <h1>{$t('video')}</h1>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="video-content">
      <div class="video-intro">
        <p>
          {$currentLang === 'en'
            ? 'Watch our craftsmanship in action. These videos showcase our woodworking process and the quality of our products.'
            : 'Посмотрите наше мастерство в действии. Эти видео демонстрируют наш процесс деревообработки и качество нашей продукции.'}
        </p>
      </div>

      <div class="videos-grid">
        <div class="video-container">
          <iframe
            src="https://www.youtube.com/embed/lWOGi36dKrU"
            width="100%"
            height="100%"
            style="border:0;"
            allowfullscreen
            loading="lazy"
            title={$t('videoTitle')}
          ></iframe>
        </div>

        <div class="video-container">
          <iframe
            src="https://www.youtube.com/embed/v7YqH3OGIN4"
            width="100%"
            height="100%"
            style="border:0;"
            allowfullscreen
            loading="lazy"
            title={$t('videoTitle')}
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section contact-section">
  <div class="container">
    <div class="contact-container">
      <div class="contact-info">
        <h2>{$currentLang === 'en' ? 'Interested in Our Services?' : 'Заинтересованы в наших услугах?'}</h2>
        <p>
          {$currentLang === 'en'
            ? 'Contact us to discuss your project. We offer free consultations and will help you bring your vision to life.'
            : 'Свяжитесь с нами, чтобы обсудить ваш проект. Мы предлагаем бесплатные консультации и поможем воплотить вашу идею в жизнь.'}
        </p>
      </div>
      <div class="contact-form-container">
        <ContactForm 
          formTitle={$currentLang === 'en' ? 'Contact Us' : 'Связаться с нами'} 
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
    margin-bottom: 3rem;
    position: relative;
    text-align: center;
  }

  .page-header::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background-color: var(--primary-color);
  }

  .page-header h1 {
    color: var(--white);
    margin: 0;
    font-size: 3rem;
    font-weight: 600;
    letter-spacing: 1px;
  }

  .video-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }

  .video-intro {
    max-width: 800px;
    text-align: center;
    margin-bottom: 2rem;
  }

  .video-intro p {
    font-size: 1.2rem;
    line-height: 1.8;
  }

  .videos-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    width: 100%;
    max-width: 900px;
  }

  .video-container {
    width: 100%;
    max-width: 400px;
    height: 700px;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    margin: 0 auto;
  }

  .contact-section {
    background-color: var(--primary-color);
    color: var(--white);
    margin-top: 5rem;
    padding: 5rem 0;
    position: relative;
  }

  .contact-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background-color: var(--secondary-color);
  }

  .contact-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
  }

  .contact-info h2 {
    color: var(--white);
    font-size: 2.2rem;
    margin-bottom: 1.5rem;
  }

  .contact-info p {
    font-size: 1.1rem;
    line-height: 1.7;
    opacity: 0.9;
  }

  @media (max-width: 768px) {
    .videos-grid {
      grid-template-columns: 1fr;
      max-width: 300px;
    }

    .video-container {
      width: 250px;
      height: 500px;
    }

    .contact-container {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 480px) {
    .video-container {
      height: 400px;
    }
  }
</style>
