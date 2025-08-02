<script>
  import { page } from '$app/stores';
  import { goto, afterNavigate } from '$app/navigation';
  import { currentLang, switchLanguage, t, getLanguageFromPath } from '../stores/languageStore';
  import { onMount, onDestroy } from 'svelte';
  import { getAssetPath } from '../utils/assetPath';
  import { getLangRoute } from '../utils/routeUtils';

  let isMobileMenuOpen = false;
  let isDropdownOpen = {};
  let currentPath = '';

  // Update currentPath when the page changes
  $: currentPath = $page.url.pathname;

  // Close mobile menu when route changes
  afterNavigate(() => {
    handleRouteChange();
  });

  // Helper function to safely access document
  function isBrowser() {
    return typeof document !== 'undefined';
  }

  // Helper function to toggle body scroll
  function toggleBodyScroll(lock) {
    if (isBrowser()) {
      document.body.style.overflow = lock ? 'hidden' : '';
    }
  }

  function toggleMobileMenu() {
    isMobileMenuOpen = !isMobileMenuOpen;
    // If closing the menu, reset all dropdowns
    if (!isMobileMenuOpen) {
      isDropdownOpen = {};
    }

    // Toggle body scroll
    toggleBodyScroll(isMobileMenuOpen);
  }

  function toggleDropdown(key) {
    isDropdownOpen[key] = !isDropdownOpen[key];
  }

  // Close mobile menu when clicking outside
  function handleClickOutside(event) {
    if (!isBrowser()) return;
    
    const mobileMenu = document.querySelector('.mobile-menu');
    const burgerButton = document.querySelector('.burger-button');

    if (isMobileMenuOpen && mobileMenu && !mobileMenu.contains(event.target) && !burgerButton.contains(event.target)) {
      toggleMobileMenu();
    }
  }

  // Close mobile menu when escape key is pressed
  function handleKeydown(event) {
    if (event.key === 'Escape' && isMobileMenuOpen) {
      toggleMobileMenu();
    }
  }

  // Close mobile menu when route changes
  function handleRouteChange() {
    if (isMobileMenuOpen) {
      toggleMobileMenu();
    }
  }

  // Set up event listeners only in browser environment
  onMount(() => {
    if (isBrowser()) {
      document.addEventListener('click', handleClickOutside);
      document.addEventListener('keydown', handleKeydown);
    }
  });

  onDestroy(() => {
    if (isBrowser()) {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleKeydown);
    }
  });
</script>

<header>
  <div class="container">
    <div class="header-padding"></div>
    <nav>
      <div class="logo">
        <a href={getLangRoute('/')}>
          <img src={getAssetPath('/logo/Лого СТС без рамки 4.jpg')} alt="CTC" class="logo-img">
        </a>
      </div>
      <div class="nav-center">
        <ul class="nav-links">
          <li class="dropdown">
            <a href={getLangRoute('/directions')}>{$t('areasOfActivity')}</a>
            <div class="dropdown-content">
              <a href={getLangRoute('/directions/street-furniture')}>{$t('outdoorFurniture')}</a>
              <a href={getLangRoute('/directions/interior-furniture')}>{$t('interiorFurniture')}</a>
              <a href={getLangRoute('/directions/architectural-forms')}>{$t('architecturalStructures')}</a>
              <a href={getLangRoute('/directions/private-houses')}>{$t('privateHomes')}</a>
              <a href={getLangRoute('/directions/restoration')}>{$t('restoration')}</a>
              <a href={getLangRoute('/directions/for-kids')}>{$t('forKidsService')}</a>
            </div>
          </li>
          <li><a href={getLangRoute('/gallery')}>{$t('gallery')}</a></li>
          <li><a href={getLangRoute('/video')}>{$t('video')}</a></li>
<!--          <li><a href={getLangRoute('/blog')}>{$t('blog')}</a></li>-->
          <li class="dropdown">
            <a href={getLangRoute('/contact')}>{$t('contacts')}</a>
          </li>
        </ul>
      </div>
      <div class="lang-selector">
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

      <!-- Burger Menu Button -->
      <button 
        class="burger-button" 
        on:click={toggleMobileMenu}
        aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isMobileMenuOpen}
        aria-controls="mobile-menu"
      >
        <span class="burger-line" class:open={isMobileMenuOpen}></span>
        <span class="burger-line" class:open={isMobileMenuOpen}></span>
        <span class="burger-line" class:open={isMobileMenuOpen}></span>
      </button>
    </nav>
    <div class="header-padding"></div>
  </div>

  <!-- Mobile Menu Backdrop -->
  {#if isMobileMenuOpen}
    <div 
      class="mobile-backdrop"
      on:click={toggleMobileMenu}
      aria-hidden="true"
    ></div>
  {/if}

  <!-- Mobile Menu -->
  <div 
    id="mobile-menu"
    class="mobile-menu" 
    class:open={isMobileMenuOpen}
    aria-hidden={!isMobileMenuOpen}
  >
    <div class="mobile-menu-container">
      <div class="mobile-lang-selector">
        <button 
          class="mobile-lang-link" 
          class:active={$currentLang === 'ru'} 
          on:click={() => switchLanguage('ru')}
        >
          RU
        </button>
        <button 
          class="mobile-lang-link" 
          class:active={$currentLang === 'en'} 
          on:click={() => switchLanguage('en')}
        >
          EN
        </button>
      </div>

      <ul class="mobile-nav-links">
        <li>
          <div class="mobile-nav-item">
            <a href={getLangRoute('/directions')} on:click={toggleMobileMenu}>{$t('areasOfActivity')}</a>
            <button 
              class="dropdown-toggle" 
              on:click={() => toggleDropdown('directions')}
              aria-label={isDropdownOpen['directions'] ? 'Collapse menu' : 'Expand menu'}
              aria-expanded={isDropdownOpen['directions'] || false}
            >
              <span class="dropdown-arrow" class:open={isDropdownOpen['directions']}></span>
            </button>
          </div>
          {#if isDropdownOpen['directions']}
            <ul class="mobile-dropdown-content">
              <li><a href={getLangRoute('/directions/street-furniture')} on:click={toggleMobileMenu}>{$t('outdoorFurniture')}</a></li>
              <li><a href={getLangRoute('/directions/interior-furniture')} on:click={toggleMobileMenu}>{$t('interiorFurniture')}</a></li>
              <li><a href={getLangRoute('/directions/architectural-forms')} on:click={toggleMobileMenu}>{$t('architecturalStructures')}</a></li>
              <li><a href={getLangRoute('/directions/private-houses')} on:click={toggleMobileMenu}>{$t('privateHomes')}</a></li>
              <li><a href={getLangRoute('/directions/restoration')} on:click={toggleMobileMenu}>{$t('restoration')}</a></li>
              <li><a href={getLangRoute('/directions/for-kids')} on:click={toggleMobileMenu}>{$t('forKidsService')}</a></li>
            </ul>
          {/if}
        </li>
        <li><a href={getLangRoute('/gallery')} on:click={toggleMobileMenu}>{$t('gallery')}</a></li>
        <li><a href={getLangRoute('/video')} on:click={toggleMobileMenu}>{$t('video')}</a></li>
<!--        <li><a href={getLangRoute('/blog')} on:click={toggleMobileMenu}>{$t('blog')}</a></li>-->
        <li>
          <div class="mobile-nav-item">
            <a href={getLangRoute('/contact')} on:click={toggleMobileMenu}>{$t('contacts')}</a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</header>

<style>
  header {
    background-color: var(--white);
    position: relative;
  }

  .container {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .header-padding {
    height: 40px;
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }

  .logo {
    flex: 1;
    display: flex;
    align-items: center;
    margin-left: -1rem; /* Offset the container padding */
  }

  .logo-img {
    max-height: 80px;
  }

  .nav-center {
    flex: 2;
    display: flex;
    justify-content: center;
  }

  .nav-links {
    display: flex;
    list-style: none;
    justify-content: center;
  }

  .nav-links li {
    margin: 0 15px;
    position: relative;
  }

  .nav-links a {
    font-weight: 600;
    font-size: 1.3rem;
    color: var(--secondary-color);
    text-decoration: none;
  }

  .lang-selector {
    flex: 1;
    display: flex;
    justify-content: flex-end;
  }

  .lang-link {
    margin-left: 10px;
    font-weight: 600;
    color: var(--secondary-color);
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    font-size: 1rem;
  }

  .lang-link.active {
    text-decoration: underline;
  }

  .dropdown-content {
    min-width: 250px;
  }

  /* Burger Menu Styles */
  .burger-button {
    display: none;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 21px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 1100;
  }

  .burger-line {
    display: block;
    width: 100%;
    height: 3px;
    background-color: var(--secondary-color);
    border-radius: 3px;
    transition: all 0.3s ease;
  }

  .burger-line.open:nth-child(1) {
    transform: translateY(9px) rotate(45deg);
  }

  .burger-line.open:nth-child(2) {
    opacity: 0;
  }

  .burger-line.open:nth-child(3) {
    transform: translateY(-9px) rotate(-45deg);
  }

  /* Mobile Menu Styles */
  .mobile-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
    animation: fadeIn 0.3s ease;
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  .mobile-menu {
    position: fixed;
    top: 0;
    right: -100%;
    width: 80%;
    max-width: 400px;
    height: 100vh;
    background-color: var(--white);
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    transition: right 0.3s ease;
    overflow-y: auto;
  }

  .mobile-menu.open {
    right: 0;
  }

  .mobile-menu-container {
    padding: 100px 20px 40px;
  }

  .mobile-lang-selector {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
  }

  .mobile-lang-link {
    margin: 0 10px;
    font-weight: 600;
    color: var(--secondary-color);
    background: none;
    border: none;
    cursor: pointer;
    padding: 5px 10px;
    font-size: 1rem;
  }

  .mobile-lang-link.active {
    text-decoration: underline;
  }

  .mobile-nav-links {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .mobile-nav-links li {
    margin-bottom: 15px;
  }

  .mobile-nav-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  .mobile-nav-item a {
    font-weight: 600;
    color: var(--secondary-color);
    text-decoration: none;
    font-size: 1.1rem;
  }

  .dropdown-toggle {
    background: none;
    border: none;
    cursor: pointer;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .dropdown-arrow {
    display: block;
    width: 10px;
    height: 10px;
    border-right: 2px solid var(--secondary-color);
    border-bottom: 2px solid var(--secondary-color);
    transform: rotate(45deg);
    transition: transform 0.3s ease;
  }

  .dropdown-arrow.open {
    transform: rotate(-135deg);
  }

  .mobile-dropdown-content {
    list-style: none;
    padding: 0 0 0 20px;
    margin: 10px 0;
  }

  .mobile-dropdown-content li {
    margin-bottom: 10px;
  }

  .mobile-dropdown-content a {
    font-weight: 500;
    color: var(--secondary-color);
    text-decoration: none;
    font-size: 1rem;
  }

  /* Media Queries */
  @media (max-width: 768px) {
    .nav-center, .lang-selector {
      display: none;
    }

    .burger-button {
      display: flex;
    }

    .logo {
      flex: 0;
      margin-left: -20px; /* Offset the nav padding */
    }

    nav {
      justify-content: space-between;
      padding: 0 20px;
    }
  }
</style>
