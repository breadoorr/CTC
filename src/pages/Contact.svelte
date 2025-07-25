<script>
  import { link, loc } from 'svelte-spa-router';
  import { currentLang, t } from '../stores/languageStore';
  import ContactForm from '../components/ContactForm.svelte';

  let currentPath = '';

  // Subscribe to location changes to update currentPath
  loc.subscribe(value => {
    currentPath = value.location + (value.querystring ? '?' + value.querystring : '');
  });

  // Helper function to get language-specific route
  function getLangRoute(route) {
    return `/${$currentLang}${route}`;
  }

  // No need for initialization with iframe approach
</script>

<section class="page-header">
  <div class="container">
    <h1>{$t('contacts')}</h1>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="contact-content">
      <div class="contact-info">
        <h2>{$t('contactUs')}</h2>
        <p>{$t('contactPageIntro')}</p>

        <div class="contact-details">
          <div class="contact-item">
            <div class="contact-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 10.999H22C22 5.869 18.127 2 12.99 2V4C17.052 4 20 6.943 20 10.999Z" fill="currentColor"/>
                <path d="M13 8C15.103 8 16 8.897 16 11H18C18 7.803 16.197 6 13 6V8Z" fill="currentColor"/>
                <path d="M13.422 16.079L16.593 19.25C16.783 19.44 17.108 19.44 17.297 19.25L18.704 17.843C18.894 17.654 18.894 17.327 18.704 17.138L15.532 13.966L13.422 16.079Z" fill="currentColor"/>
                <path d="M13.5 16L12.5 15C9.7 12.2 7 9.5 7 7C7 4.8 8.8 3 11 3C12.2 3 13.4 3.5 14 4.3C14.6 3.5 15.8 3 17 3C19.2 3 21 4.8 21 7C21 9.5 18.3 12.2 15.5 15L14.5 16H13.5Z" fill="currentColor"/>
              </svg>
            </div>
            <div class="contact-text">
              <h3>{$t('phone')}</h3>
              <p><a href="tel:+35799037765">+357 99 037 765</a></p>
            </div>
          </div>

          <div class="contact-item">
            <a href="mailto:info@ctc.cy"><div class="contact-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="currentColor"/>
              </svg>
            </div></a>
            <div class="contact-text">
              <h3>{$t('email')}</h3>
              <p><a href="mailto:info@ctc.cy">info@ctc.cy</a></p>
            </div>
          </div>

          <div class="contact-item">
            <a target="_blank" href="https://www.google.com/maps/place/34°45'17.6%22N+32°57'16.9%22E/@34.754889,32.952119,16z/data=!4m4!3m3!8m2!3d34.7548889!4d32.9546944?hl=en&entry=ttu&g_ep=EgoyMDI1MDcyMC4wIKXMDSoASAFQAw%3D%3D"><div class="contact-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="currentColor"/>
              </svg>
            </div></a>
            <div class="contact-text">
              <h3>{$t('address')}</h3>
              <p><a target="_blank" href="https://www.google.com/maps/place/34°45'17.6%22N+32°57'16.9%22E/@34.754889,32.952119,16z/data=!4m4!3m3!8m2!3d34.7548889!4d32.9546944?hl=en&entry=ttu&g_ep=EgoyMDI1MDcyMC4wIKXMDSoASAFQAw%3D%3D">{$t('addressText')}</a></p>
            </div>
          </div>

          <div class="contact-item">
            <div class="contact-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM12.5 7H11V13L16.25 16.15L17 14.92L12.5 12.25V7Z" fill="currentColor"/>
              </svg>
            </div>
            <div class="contact-text">
              <h3>{$t('workingHours')}</h3>
              <p>{$t('workingHoursText')}</p>
            </div>
          </div>
        </div>

        <div class="social-links">
          <h3>{$t('followUs')}</h3>
          <div class="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" class="social-icon">
              <svg width="24" height="24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M50 100c27.6142 0 50-22.3858 50-50S77.6142 0 50 0 0 22.3858 0 50s22.3858 50 50 50Zm3.431-73.9854c-2.5161.0701-5.171.6758-7.0464 2.4577-1.5488 1.4326-2.329 3.5177-2.5044 5.602-.0534 1.4908-.0458 2.9855-.0382 4.4796.0058 1.1205.0115 2.2407-.0085 3.3587-.6888.005-1.3797.0036-2.0709.0021-.9218-.0019-1.8441-.0038-2.7626.0096 0 .8921.0013 1.7855.0026 2.6797.0026 1.791.0052 3.5853-.0026 5.3799.9185.0134 1.8409.0115 2.7627.0096.6912-.0015 1.382-.0029 2.0708.0021.0155 3.5565.0127 7.1128.0098 10.669-.0036 4.4452-.0072 8.8903.0252 13.3354 1.8903-.0134 3.7765-.0115 5.6633-.0095 1.4152.0014 2.8306.0028 4.2484-.0022.0117-4.0009.0088-7.9986.0058-11.9963-.0029-3.9979-.0058-7.9957.0059-11.9964.9533-.005 1.9067-.0036 2.86-.0021 1.2713.0019 2.5425.0038 3.8137-.0096.396-2.679.7335-5.3814.9198-8.0947-1.2576-.0058-2.5155-.0058-3.7734-.0058-1.2578 0-2.5157 0-3.7734-.0059 0-.4689-.0007-.9378-.0014-1.4066-.0022-1.4063-.0044-2.8123.0131-4.2188.198-1.0834 1.3158-1.9104 2.3992-1.8403h5.1476c.0117-2.8069.0117-5.602 0-8.4089-.6636 0-1.3273-.0007-1.9911-.0014-1.9915-.0022-3.9832-.0044-5.975.0131Z" fill="currentColor"/>
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="social-icon">
              <svg width="24" height="24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100ZM25 39.3918C25 31.4558 31.4566 25 39.3918 25H60.6082C68.5442 25 75 31.4566 75 39.3918V60.8028C75 68.738 68.5442 75.1946 60.6082 75.1946H39.3918C31.4558 75.1946 25 68.738 25 60.8028V39.3918ZM36.9883 50.0054C36.9883 42.8847 42.8438 37.0922 50.0397 37.0922C57.2356 37.0922 63.0911 42.8847 63.0911 50.0054C63.0911 57.1252 57.2356 62.9177 50.0397 62.9177C42.843 62.9177 36.9883 57.1252 36.9883 50.0054ZM41.7422 50.0054C41.7422 54.5033 45.4641 58.1638 50.0397 58.1638C54.6153 58.1638 58.3372 54.5041 58.3372 50.0054C58.3372 45.5066 54.6145 41.8469 50.0397 41.8469C45.4641 41.8469 41.7422 45.5066 41.7422 50.0054ZM63.3248 39.6355C65.0208 39.6355 66.3956 38.2606 66.3956 36.5646C66.3956 34.8687 65.0208 33.4938 63.3248 33.4938C61.6288 33.4938 60.2539 34.8687 60.2539 36.5646C60.2539 38.2606 61.6288 39.6355 63.3248 39.6355Z" fill="currentColor"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div class="contact-form-container">
        <ContactForm formTitle={$t('contactFormTitle')} buttonText={$t('send')} />
      </div>
    </div>
  </div>
</section>

<section class="map-section">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3278.027944826023!2d32.95211947574696!3d34.75488887290058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzTCsDQ1JzE3LjYiTiAzMsKwNTcnMTYuOSJF!5e0!3m2!1sen!2s!4v1753293001186!5m2!1sen!2s"
    width="100%"
    height="100%"
    style="border:0;"
    allowfullscreen=""
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"
    class="map-container"
    title="Google Maps - CTC Location">
  </iframe>
</section>

<style>
  .page-header {
    background-color: var(--secondary-color);
    color: var(--white);
    padding: 8rem 0 4rem;
    margin-bottom: 2rem;
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

  .section {
    padding: 5rem 0;
  }

  .contact-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: start;
  }

  .contact-info h2 {
    margin-bottom: 1.5rem;
    font-size: 2rem;
  }

  .contact-info p {
    margin-bottom: 2rem;
    font-size: 1.1rem;
    line-height: 1.6;
  }

  .contact-details {
    margin-bottom: 3rem;
  }

  .contact-item {
    display: flex;
    align-items: flex-start;
    margin-bottom: 2rem;
  }

  .contact-icon {
    width: 50px;
    height: 50px;
    background-color: var(--primary-color);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 1rem;
    color: var(--white);
    flex-shrink: 0;
  }

  .contact-text h3 {
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
  }

  .contact-text p {
    margin-bottom: 0;
    font-size: 1rem;
  }

  .social-links h3 {
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }

  .social-icons {
    display: flex;
    gap: 1rem;
  }

  .social-icon {
    width: 40px;
    height: 40px;
    background-color: var(--primary-color);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--white);
    transition: background-color 0.3s ease;
  }

  .social-icon:hover {
    background-color: var(--secondary-color);
  }

  .contact-form-container {
    max-width: 100%;
  }

  .map-section {
    height: 500px;
    margin-top: 3rem;
  }

  .map-container {
    width: 100%;
    height: 100%;
    background-color: #f0f0f0;
  }

  @media (max-width: 768px) {
    .contact-content {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    .page-header {
      padding: 6rem 0 3rem;
    }

    .page-header h1 {
      font-size: 2.5rem;
    }

    .map-section {
      height: 300px;
    }
  }
</style>
