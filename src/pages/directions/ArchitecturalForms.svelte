<script>
  import { link, loc } from 'svelte-spa-router';
  import { currentLang, t } from '../../stores/languageStore';
  import ContactForm from '../../components/ContactForm.svelte';
  import { onMount } from 'svelte';

  let currentPath = '';
  let showContactModal = false;
  let selectedImage = null;
  let selectedImageIndex = 0;
  let modalKeyboardListener = null;

  // Subscribe to location changes to update currentPath
  loc.subscribe(value => {
    currentPath = value.location + (value.querystring ? '?' + value.querystring : '');
  });

  // Helper function to get language-specific route
  function getLangRoute(route) {
    return `/${$currentLang}${route}`;
  }

  function openContactModal() {
    showContactModal = true;
  }

  function closeContactModal() {
    showContactModal = false;
  }

  function openImageModal(image) {
    // Find the index of the image in the images array
    selectedImageIndex = images.findIndex(img => img.id === image.id);
    selectedImage = image;

    // Add keyboard event listener when modal is opened
    if (!modalKeyboardListener) {
      modalKeyboardListener = (e) => handleModalKeydown(e);
      window.addEventListener('keydown', modalKeyboardListener);
    }
  }

  function closeImageModal() {
    selectedImage = null;

    // Remove keyboard event listener when modal is closed
    if (modalKeyboardListener) {
      window.removeEventListener('keydown', modalKeyboardListener);
      modalKeyboardListener = null;
    }
  }

  function nextImage() {
    if (images.length <= 1) return;
    selectedImageIndex = (selectedImageIndex + 1) % images.length;
    selectedImage = images[selectedImageIndex];
  }

  function prevImage() {
    if (images.length <= 1) return;
    selectedImageIndex = (selectedImageIndex - 1 + images.length) % images.length;
    selectedImage = images[selectedImageIndex];
  }

  function handleModalKeydown(event) {
    if (!selectedImage) return;

    if (event.key === 'ArrowRight') {
      nextImage();
    } else if (event.key === 'ArrowLeft') {
      prevImage();
    } else if (event.key === 'Escape') {
      closeImageModal();
    }
  }

  onMount(() => {
    return () => {
      // Clean up event listener on component unmount
      if (modalKeyboardListener) {
        window.removeEventListener('keydown', modalKeyboardListener);
      }
    };
  });

  // Gallery images with translations for alt text
  const images = [
    {
      id: 1,
      src: '/images/small forms/Беседка1.jpg',
      alt: $currentLang === 'en' ? 'Gazebo' : 'Беседка',
      category: 'architectural-forms'
    },
    {
      id: 2,
      src: '/images/small forms/беседка.jpg',
      alt: $currentLang === 'en' ? 'Gazebo' : 'Беседка',
      category: 'architectural-forms'
    },
    {
      id: 3,
      src: '/images/small forms/photo_2025-07-21_21-42-37.jpg',
      alt: $currentLang === 'en' ? 'Small Architectural Structures' : 'Малые архитектурные формы',
      category: 'architectural-forms'
    },
    {
      id: 4,
      src: '/images/small forms/963A9631.jpg',
      alt: $currentLang === 'en' ? 'Outdoor Furniture' : 'Уличная мебель'
    },
    {
      id: 5,
      src: '/images/small forms/963A9632.jpg',
      alt: $currentLang === 'en' ? 'Outdoor Furniture' : 'Уличная мебель'
    },
    {
      id: 6,
      src: '/images/small forms/963A9633.jpg',
      alt: $currentLang === 'en' ? 'Outdoor Furniture' : 'Уличная мебель'
    },
    {
      id: 7,
      src: '/images/small forms/963A9634.jpg',
      alt: $currentLang === 'en' ? 'Outdoor Furniture' : 'Уличная мебель'
    },
    {
      id: 8,
      src: '/images/small forms/963A9642.jpg',
      alt: $currentLang === 'en' ? 'Outdoor Furniture' : 'Уличная мебель'
    },
    {
      id: 9,
      src: '/images/small forms/963A9643.jpg',
      alt: $currentLang === 'en' ? 'Outdoor Furniture' : 'Уличная мебель'
    },
    {
      id: 10,
      src: '/images/small forms/963A9644.jpg',
      alt: $currentLang === 'en' ? 'Outdoor Furniture' : 'Уличная мебель'
    },
    {
      id: 11,
      src: '/images/small forms/963A9645.jpg',
      alt: $currentLang === 'en' ? 'Outdoor Furniture' : 'Уличная мебель'
    },
    {
      id: 12,
      src: '/images/small forms/963A9646.jpg',
      alt: $currentLang === 'en' ? 'Outdoor Furniture' : 'Уличная мебель'
    },
  ];
</script>

<section class="page-header">
  <div class="container">
    <h1>{$currentLang === 'en' ? 'Small Architectural Structures' : 'Малые архитектурные формы'}</h1>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="direction-intro">
      <p>
        {$currentLang === 'en' 
          ? 'We design and build beautiful, functional small architectural structures that enhance your outdoor space. From gazebos and pergolas to guest houses and garden pavilions, our structures are built to last and designed to impress.'
          : 'Мы проектируем и строим красивые, функциональные малые архитектурные формы, которые улучшают ваше открытое пространство. От беседок и пергол до гостевых домиков и садовых павильонов, наши конструкции созданы на долгие годы и разработаны, чтобы впечатлять.'}
      </p>
    </div>

    <div class="direction-features">
      <div class="feature">
        <div class="feature-icon">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 3L1 9L5 11.18V17.18L12 21L19 17.18V11.18L21 10.09V17H23V9L12 3ZM18.82 9L12 12.72L5.18 9L12 5.28L18.82 9ZM17 15.99L12 18.72L7 15.99V12.27L12 15L17 12.27V15.99Z" fill="currentColor"/>
          </svg>
        </div>
        <div class="feature-content">
          <h3>{$currentLang === 'en' ? 'Custom Design' : 'Индивидуальный дизайн'}</h3>
          <p>{$currentLang === 'en' 
            ? 'We create structures tailored to your specific needs and preferences.'
            : 'Мы создаем конструкции, адаптированные к вашим конкретным потребностям и предпочтениям.'}</p>
        </div>
      </div>

      <div class="feature">
        <div class="feature-icon">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z" fill="currentColor"/>
          </svg>
        </div>
        <div class="feature-content">
          <h3>{$currentLang === 'en' ? 'Quality Materials' : 'Качественные материалы'}</h3>
          <p>{$currentLang === 'en'
            ? 'We use only the finest wood and hardware for our structures.'
            : 'Мы используем только лучшую древесину и фурнитуру для наших конструкций.'}</p>
        </div>
      </div>

      <div class="feature">
        <div class="feature-icon">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM9 17H7V10H9V17ZM13 17H11V7H13V17ZM17 17H15V13H17V17Z" fill="currentColor"/>
          </svg>
        </div>
        <div class="feature-content">
          <h3>{$currentLang === 'en' ? 'Functionality' : 'Функциональность'}</h3>
          <p>{$currentLang === 'en'
            ? 'Our structures combine aesthetics with practical functionality.'
            : 'Наши конструкции сочетают эстетику с практической функциональностью.'}</p>
        </div>
      </div>
    </div>

    <h2>{$currentLang === 'en' ? 'Our Projects' : 'Наши проекты'}</h2>
    <div class="gallery-grid">
      {#each images as image}
        <div class="gallery-item" on:click={() => openImageModal(image)}>
          <img src={image.src} alt={image.alt} />
          <div class="gallery-item-overlay">
            <span class="view-icon">+</span>
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

<!-- Image Modal -->
{#if selectedImage}
  <div class="modal-overlay" on:click={closeImageModal}>
    <div class="modal-content image-modal" on:click|stopPropagation>
      <button class="close-btn" on:click={closeImageModal}>&times;</button>

      <!-- Navigation arrows -->
      {#if images.length > 1}
        <button class="modal-arrow modal-prev" on:click={prevImage} aria-label="Previous image">
          <svg viewBox="0 0 7.3 13" xmlns="http://www.w3.org/2000/svg">
            <polyline fill="none" stroke="#ffffff" stroke-width="2" points="6.5,0.5 0.5,6.5 6.5,12.5"/>
          </svg>
        </button>
        <button class="modal-arrow modal-next" on:click={nextImage} aria-label="Next image">
          <svg viewBox="0 0 7.3 13" xmlns="http://www.w3.org/2000/svg">
            <polyline fill="none" stroke="#ffffff" stroke-width="2" points="0.5,0.5 6.5,6.5 0.5,12.5"/>
          </svg>
        </button>
      {/if}

      <img src={selectedImage.src} alt={selectedImage.alt} />
      <div class="image-modal-caption">
        <div class="modal-actions">
          {#if images.length > 1}
            <div class="modal-counter">{selectedImageIndex + 1} / {images.length}</div>
          {/if}
          <button class="btn" on:click={openContactModal}>
            {$currentLang === 'en' ? 'Request a Similar Project' : 'Заказать подобный проект'}
          </button>
        </div>
      </div>
    </div>
  </div>
{/if}

<!-- Contact Modal -->
{#if showContactModal}
  <div class="modal-overlay" on:click={closeContactModal}>
    <div class="modal-content" on:click|stopPropagation>
      <ContactForm
        formTitle={$currentLang === 'en' ? 'Request a Project' : 'Заказать проект'}
        buttonText={$currentLang === 'en' ? 'Submit' : 'Отправить'}
        isModal={true}
        on:close={closeContactModal}
      />
    </div>
  </div>
{/if}

<style>
  .page-header {
    margin-bottom: 3rem;
    position: relative;
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
    font-size: 3rem;
    font-weight: 600;
    letter-spacing: 1px;
  }

  .direction-intro {
    max-width: 800px;
    margin: 0 auto 3rem;
    text-align: center;
  }

  .direction-intro p {
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
    line-height: 1.8;
  }

  .direction-features {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-bottom: 4rem;
  }

  .feature {
    display: flex;
    align-items: flex-start;
    gap: 1.5rem;
    padding: 1.5rem;
    background-color: var(--light-bg);
    border-radius: 8px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .feature:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }

  .feature-icon {
    color: var(--primary-color);
    flex-shrink: 0;
  }

  .feature-content h3 {
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
  }

  .feature-content p {
    font-size: 1rem;
    line-height: 1.6;
  }

  .gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
  }

  .gallery-item {
    position: relative;
    height: 280px;
    overflow: hidden;
    border-radius: 8px;
    cursor: pointer;
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .gallery-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.15);
  }

  .gallery-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  .gallery-item-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .gallery-item:hover img {
    transform: scale(1.05);
  }

  .gallery-item:hover .gallery-item-overlay {
    opacity: 1;
    cursor: zoom-in;
  }

  .view-icon {
    color: var(--white);
    font-size: 2.5rem;
    font-weight: bold;
    width: 50px;
    height: 50px;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.3s ease;
  }

  .gallery-item:hover .view-icon {
    background-color: rgba(255, 255, 255, 0.3);
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

  /* Modal */
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2000;
  }

  .modal-content {
    width: 90%;
    max-width: 500px;
    position: relative;
  }

  .image-modal {
    max-width: 90%;
    background-color: var(--white);
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }

  .image-modal img {
    width: 100%;
    max-height: 80vh;
    object-fit: contain;
  }

  .image-modal-caption {
    padding: 1.5rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }

  .modal-actions {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    width: 100%;
    justify-content: space-between;
  }

  .modal-counter {
    font-size: 1rem;
    color: var(--secondary-color);
    font-weight: 500;
  }

  /* Modal navigation arrows */
  .modal-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 50px;
    height: 50px;
    background-color: rgba(0, 0, 0, 0.5);
    border: none;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2002;
    transition: background-color 0.3s ease, transform 0.3s ease;
  }

  .modal-arrow:hover {
    background-color: rgba(0, 0, 0, 0.8);
    transform: translateY(-50%) scale(1.1);
  }

  .modal-arrow svg {
    width: 12px;
    height: 20px;
  }

  .modal-prev {
    left: 20px;
  }

  .modal-next {
    right: 20px;
  }

  .close-btn {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    background: none;
    border: none;
    font-size: 2rem;
    color: var(--white);
    cursor: pointer;
    z-index: 2001;
    transition: transform 0.3s ease;
  }

  .close-btn:hover {
    transform: rotate(90deg);
  }

  .image-modal .close-btn {
    color: var(--white);
    background-color: rgba(0, 0, 0, 0.5);
    width: 45px;
    height: 45px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 768px) {
    .direction-features {
      grid-template-columns: 1fr;
    }

    .contact-container {
      grid-template-columns: 1fr;
    }

    .image-modal-caption {
      flex-direction: column;
      gap: 1rem;
    }

    .modal-actions {
      width: 100%;
      justify-content: space-between;
    }

    .modal-arrow {
      width: 40px;
      height: 40px;
    }
  }
</style>
