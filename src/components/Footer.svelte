<script>
  import { link, loc } from 'svelte-spa-router';
  import { currentLang, setLanguage, t, getLanguageFromPath } from '../stores/languageStore';
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

  function switchLanguage(lang) {
    setLanguage(lang);
  }
</script>

<footer>
  <div class="container">
    <div class="footer-content">
      <div class="footer-logo">
        <a href={getLangRoute('/')} use:link>
          <img src={getAssetPath('/logo/black%20logo.svg')} alt="CTC" class="footer-logo-img">
        </a>
        <p>{$t('woodenFurnitureArt')}</p>
        <div class="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" class="social-link">
            <svg width="30" height="30" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M50 100c27.6142 0 50-22.3858 50-50S77.6142 0 50 0 0 22.3858 0 50s22.3858 50 50 50Zm3.431-73.9854c-2.5161.0701-5.171.6758-7.0464 2.4577-1.5488 1.4326-2.329 3.5177-2.5044 5.602-.0534 1.4908-.0458 2.9855-.0382 4.4796.0058 1.1205.0115 2.2407-.0085 3.3587-.6888.005-1.3797.0036-2.0709.0021-.9218-.0019-1.8441-.0038-2.7626.0096 0 .8921.0013 1.7855.0026 2.6797.0026 1.791.0052 3.5853-.0026 5.3799.9185.0134 1.8409.0115 2.7627.0096.6912-.0015 1.382-.0029 2.0708.0021.0155 3.5565.0127 7.1128.0098 10.669-.0036 4.4452-.0072 8.8903.0252 13.3354 1.8903-.0134 3.7765-.0115 5.6633-.0095 1.4152.0014 2.8306.0028 4.2484-.0022.0117-4.0009.0088-7.9986.0058-11.9963-.0029-3.9979-.0058-7.9957.0059-11.9964.9533-.005 1.9067-.0036 2.86-.0021 1.2713.0019 2.5425.0038 3.8137-.0096.396-2.679.7335-5.3814.9198-8.0947-1.2576-.0058-2.5155-.0058-3.7734-.0058-1.2578 0-2.5157 0-3.7734-.0059 0-.4689-.0007-.9378-.0014-1.4066-.0022-1.4063-.0044-2.8123.0131-4.2188.198-1.0834 1.3158-1.9104 2.3992-1.8403h5.1476c.0117-2.8069.0117-5.602 0-8.4089-.6636 0-1.3273-.0007-1.9911-.0014-1.9915-.0022-3.9832-.0044-5.975.0131Z" fill="#ffffff"/>
            </svg>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="social-link">
            <svg width="30" height="30" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100ZM25 39.3918C25 31.4558 31.4566 25 39.3918 25H60.6082C68.5442 25 75 31.4566 75 39.3918V60.8028C75 68.738 68.5442 75.1946 60.6082 75.1946H39.3918C31.4558 75.1946 25 68.738 25 60.8028V39.3918ZM36.9883 50.0054C36.9883 42.8847 42.8438 37.0922 50.0397 37.0922C57.2356 37.0922 63.0911 42.8847 63.0911 50.0054C63.0911 57.1252 57.2356 62.9177 50.0397 62.9177C42.843 62.9177 36.9883 57.1252 36.9883 50.0054ZM41.7422 50.0054C41.7422 54.5033 45.4641 58.1638 50.0397 58.1638C54.6153 58.1638 58.3372 54.5041 58.3372 50.0054C58.3372 45.5066 54.6145 41.8469 50.0397 41.8469C45.4641 41.8469 41.7422 45.5066 41.7422 50.0054ZM63.3248 39.6355C65.0208 39.6355 66.3956 38.2606 66.3956 36.5646C66.3956 34.8687 65.0208 33.4938 63.3248 33.4938C61.6288 33.4938 60.2539 34.8687 60.2539 36.5646C60.2539 38.2606 61.6288 39.6355 63.3248 39.6355Z" fill="#ffffff"/>
            </svg>
          </a>
        </div>
      </div>

      <div class="footer-links">
        <h3>{$t('navigation')}</h3>
        <ul>
          <li><a href={getLangRoute('/directions')} use:link>{$t('areasOfActivity')}</a></li>
          <li><a href={getLangRoute('/gallery')} use:link>{$t('gallery')}</a></li>
          <li><a href={getLangRoute('/')} use:link>{$t('blog')}</a></li>
          <li><a href={getLangRoute('/contact')} use:link>{$t('contacts')}</a></li>
        </ul>
      </div>

      <div class="footer-directions">
        <h3>{$t('ourServices')}</h3>
        <ul>
          <li><a href={getLangRoute('/directions/street-furniture')} use:link>{$t('outdoorFurniture')}</a></li>
          <li><a href={getLangRoute('/directions/interior-furniture')} use:link>{$t('interiorFurniture')}</a></li>
          <li><a href={getLangRoute('/directions/architectural-forms')} use:link>{$t('architecturalStructures')}</a></li>
          <li><a href={getLangRoute('/directions/private-houses')} use:link>{$t('privateHomes')}</a></li>
          <li><a href={getLangRoute('/directions/restoration')} use:link>{$t('restoration')}</a></li>
          <li><a href={getLangRoute('/directions/for-kids')} use:link>{$t('forKidsService')}</a></li>
        </ul>
      </div>

      <div class="footer-contact">
        <h3>{$t('contactUs')}</h3>
        <ul>
          <li><a href="tel:+35799037765">+357 99 037 765</a></li>
          <li><a href="mailto:info@ctc.cy">info@ctc.cy</a></li>
          <li>Limassol, Cyprus</li>
        </ul>
      </div>
    </div>

    <div class="footer-bottom">
      <p>&copy; {new Date().getFullYear()} CTC. {$t('allRightsReserved')}</p>
      <div class="footer-lang">
        <button 
          class="lang-link" 
          class:active={$currentLang === 'ru'} 
          on:click={() => switchLanguage('ru')}
        >
          RU
        </button>
        <button 
          class="lang-link" 
          class:active={$currentLang === 'en'} 
          on:click={() => switchLanguage('en')}
        >
          EN
        </button>
      </div>
    </div>
  </div>
</footer>

<style>
  footer {
    margin-top: 0;
    background-color: var(--primary-color);
    color: var(--white);
    padding: 4rem 0 2rem;
  }

  .footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 3rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  .footer-logo-img {
    max-height: 60px;
    margin-bottom: 1rem;
  }

  .footer-logo p {
    margin: 1rem 0;
    opacity: 0.8;
    font-size: 0.9rem;
  }

  .footer-social {
    display: flex;
    gap: 1rem;
    margin-top: 1.5rem;
  }

  .social-link {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: opacity 0.3s ease;
  }

  .social-link:hover {
    opacity: 0.8;
  }

  h3 {
    color: var(--white);
    margin-bottom: 1.5rem;
    font-size: 1.2rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  ul {
    list-style: none;
  }

  ul li {
    margin-bottom: 0.75rem;
  }

  ul li a {
    color: var(--white);
    opacity: 0.8;
    transition: opacity 0.3s ease;
    font-size: 0.9rem;
  }

  ul li a:hover {
    opacity: 1;
    color: var(--white);
  }

  .footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 2rem;
    opacity: 0.7;
  }

  .footer-lang {
    display: flex;
    gap: 0.5rem;
  }

  .lang-link {
    color: var(--white);
    opacity: 0.8;
    transition: opacity 0.3s ease;
    padding: 0 0.5rem;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 0.9rem;
  }

  .lang-link:hover, .lang-link.active {
    opacity: 1;
  }

  @media (max-width: 768px) {
    .footer-content {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    .footer-bottom {
      flex-direction: column;
      gap: 1rem;
    }
  }
</style>
