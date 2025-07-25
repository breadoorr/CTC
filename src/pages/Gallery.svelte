<script>
  import { createEventDispatcher, onMount } from 'svelte';
  import ContactForm from '../components/ContactForm.svelte';
  import { currentLang, t } from '../stores/languageStore';

  const dispatch = createEventDispatcher();

  let showContactModal = false;
  let selectedImage = null;
  let selectedImageIndex = 0;
  let modalKeyboardListener = null;

  function openContactModal() {
    showContactModal = true;
  }

  function closeContactModal() {
    showContactModal = false;
  }

  function openImageModal(image) {
    // Find the index of the image in the filtered images array
    selectedImageIndex = filteredImages.findIndex(img => img.id === image.id);
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
    if (filteredImages.length <= 1) return;
    selectedImageIndex = (selectedImageIndex + 1) % filteredImages.length;
    selectedImage = filteredImages[selectedImageIndex];
  }

  function prevImage() {
    if (filteredImages.length <= 1) return;
    selectedImageIndex = (selectedImageIndex - 1 + filteredImages.length) % filteredImages.length;
    selectedImage = filteredImages[selectedImageIndex];
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
  $: galleryImages = [
    // For Kids Category
    {
      id: 1,
      src: '/images/for kids/2024-06-21 16-19-32.JPG',
      alt: $currentLang === 'en' ? 'For Kids' : 'Для детей',
      category: 'for-kids'
    },
    {
      id: 2,
      src: '/images/for kids/2024-06-21 16-20-24.JPG',
      alt: $currentLang === 'en' ? 'For Kids' : 'Для детей',
      category: 'for-kids'
    },
    {
      id: 3,
      src: '/images/for kids/2024-06-21 16-20-28.JPG',
      alt: $currentLang === 'en' ? 'For Kids' : 'Для детей',
      category: 'for-kids'
    },

    // Indoor Category
    {
      id: 4,
      src: '/images/indoor/2024-05-12 23-19-10.JPG',
      alt: $currentLang === 'en' ? 'Interior Design' : 'Дизайн интерьеров',
      category: 'interior-design'
    },
    {
      id: 5,
      src: '/images/indoor/2024-06-01 14-39-21.JPG',
      alt: $currentLang === 'en' ? 'Interior Design' : 'Дизайн интерьеров',
      category: 'interior-design'
    },
    {
      id: 6,
      src: '/images/indoor/2024-06-24 06-27-19_1719213072226.JPG',
      alt: $currentLang === 'en' ? 'Interior Furniture' : 'Мебель в интерьере',
      category: 'interior-furniture'
    },
    {
      id: 7,
      src: '/images/indoor/2024-06-25 16-34-51.JPG',
      alt: $currentLang === 'en' ? 'Interior Design' : 'Дизайн интерьеров',
      category: 'interior-design'
    },
    {
      id: 8,
      src: '/images/indoor/2024-07-06 14-43-32.JPG',
      alt: $currentLang === 'en' ? 'Interior Furniture' : 'Мебель в интерьере',
      category: 'interior-furniture'
    },
    {
      id: 9,
      src: '/images/indoor/2024-07-06 14-46-41.JPG',
      alt: $currentLang === 'en' ? 'Interior Furniture' : 'Мебель в интерьере',
      category: 'interior-furniture'
    },
    {
      id: 9.1,
      src: '/images/indoor/photo_2025-07-21_21-38-31.jpg',
      alt: $currentLang === 'en' ? 'Interior Furniture' : 'Мебель в интерьере',
      category: 'interior-furniture'
    },
    {
      id: 9.2,
      src: '/images/indoor/photo_2025-07-21_21-38-36.jpg',
      alt: $currentLang === 'en' ? 'Interior Furniture' : 'Мебель в интерьере',
      category: 'interior-furniture'
    },
    {
      id: 9.3,
      src: '/images/indoor/photo_2025-07-21_21-38-52.jpg',
      alt: $currentLang === 'en' ? 'Interior Furniture' : 'Мебель в интерьере',
      category: 'interior-furniture'
    },
    {
      id: 9.4,
      src: '/images/indoor/photo_2025-07-21_21-38-54.jpg',
      alt: $currentLang === 'en' ? 'Interior Furniture' : 'Мебель в интерьере',
      category: 'interior-furniture'
    },
    {
      id: 9.5,
      src: '/images/indoor/photo_2025-07-21_21-39-11.jpg',
      alt: $currentLang === 'en' ? 'Interior Furniture' : 'Мебель в интерьере',
      category: 'interior-furniture'
    },
    {
      id: 9.6,
      src: '/images/indoor/photo_2025-07-21_21-39-12.jpg',
      alt: $currentLang === 'en' ? 'Interior Furniture' : 'Мебель в интерьере',
      category: 'interior-furniture'
    },
    {
      id: 9.7,
      src: '/images/indoor/photo_2025-07-21_21-39-14.jpg',
      alt: $currentLang === 'en' ? 'Interior Furniture' : 'Мебель в интерьере',
      category: 'interior-furniture'
    },
    {
      id: 9.8,
      src: '/images/indoor/photo_2025-07-21_21-39-16.jpg',
      alt: $currentLang === 'en' ? 'Interior Furniture' : 'Мебель в интерьере',
      category: 'interior-furniture'
    },
    {
      id: 9.9,
      src: '/images/indoor/photo_2025-07-21_21-39-53.jpg',
      alt: $currentLang === 'en' ? 'Interior Furniture' : 'Мебель в интерьере',
      category: 'interior-furniture'
    },
    {
      id: 9.95,
      src: '/images/indoor/photo_2025-07-21_21-39-56.jpg',
      alt: $currentLang === 'en' ? 'Interior Furniture' : 'Мебель в интерьере',
      category: 'interior-furniture'
    },

    // Outdoor Furniture Category
    {
      id: 10,
      src: '/images/outdoor furniture/2024-04-11 11-18-49.JPG',
      alt: $currentLang === 'en' ? 'Outdoor Furniture' : 'Уличная мебель',
      category: 'street-furniture'
    },
    {
      id: 11,
      src: '/images/outdoor furniture/2024-04-11 11-18-53.JPG',
      alt: $currentLang === 'en' ? 'Outdoor Furniture' : 'Уличная мебель',
      category: 'street-furniture'
    },
    {
      id: 12,
      src: '/images/outdoor furniture/2024-04-11 11-19-20.JPG',
      alt: $currentLang === 'en' ? 'Outdoor Furniture' : 'Уличная мебель',
      category: 'street-furniture'
    },
    {
      id: 13,
      src: '/images/outdoor furniture/2024-05-13 12-08-37.JPG',
      alt: $currentLang === 'en' ? 'Small Architectural Structures' : 'Малые архитектурные формы',
      category: 'architectural-forms'
    },
    {
      id: 14,
      src: '/images/outdoor furniture/2024-05-13 12-08-37 (1).JPG',
      alt: $currentLang === 'en' ? 'Outdoor Furniture' : 'Уличная мебель',
      category: 'street-furniture'
    },
    {
      id: 15,
      src: '/images/outdoor furniture/2024-06-20 16-13-00.JPG',
      alt: $currentLang === 'en' ? 'Outdoor Furniture' : 'Уличная мебель',
      category: 'street-furniture'
    },
    {
      id: 16,
      src: '/images/outdoor furniture/2024-06-21 16-33-30.JPG',
      alt: $currentLang === 'en' ? 'Outdoor Furniture' : 'Уличная мебель',
      category: 'street-furniture'
    },
    {
      id: 17,
      src: '/images/outdoor furniture/2024-06-21 16-33-30 (1).JPG',
      alt: $currentLang === 'en' ? 'Outdoor Furniture' : 'Уличная мебель',
      category: 'street-furniture'
    },
    {
      id: 18,
      src: '/images/outdoor furniture/2024-06-21 16-36-31.JPG',
      alt: $currentLang === 'en' ? 'Outdoor Furniture' : 'Уличная мебель',
      category: 'street-furniture'
    },
    {
      id: 19,
      src: '/images/outdoor furniture/2024-06-21 16-36-31 (1).JPG',
      alt: $currentLang === 'en' ? 'Outdoor Furniture' : 'Уличная мебель',
      category: 'street-furniture'
    },
    {
      id: 20,
      src: '/images/outdoor furniture/2024-06-21 16-37-11.JPG',
      alt: $currentLang === 'en' ? 'Outdoor Furniture' : 'Уличная мебель',
      category: 'street-furniture'
    },
    {
      id: 21,
      src: '/images/outdoor furniture/2024-06-21 16-37-11 (1).JPG',
      alt: $currentLang === 'en' ? 'Outdoor Furniture' : 'Уличная мебель',
      category: 'street-furniture'
    },
    {
      id: 22,
      src: '/images/outdoor furniture/2024-06-24 06-27-19.JPG',
      alt: $currentLang === 'en' ? 'Outdoor Furniture' : 'Уличная мебель',
      category: 'street-furniture'
    },
    {
      id: 23,
      src: '/images/outdoor furniture/2024-06-24 06-27-19_1719213059979.JPG',
      alt: $currentLang === 'en' ? 'Outdoor Furniture' : 'Уличная мебель',
      category: 'street-furniture'
    },
    {
      id: 24,
      src: '/images/outdoor furniture/2024-06-24 06-27-19_1719213080407.JPG',
      alt: $currentLang === 'en' ? 'Outdoor Furniture' : 'Уличная мебель',
      category: 'street-furniture'
    },
    {
      id: 25,
      src: '/images/outdoor furniture/2024-06-24 06-48-06.JPG',
      alt: $currentLang === 'en' ? 'Outdoor Furniture' : 'Уличная мебель',
      category: 'street-furniture'
    },
    {
      id: 26,
      src: '/images/outdoor furniture/2024-07-20 13-39-55.JPG',
      alt: $currentLang === 'en' ? 'Outdoor Furniture' : 'Уличная мебель',
      category: 'street-furniture'
    },
    {
      id: 27,
      src: '/images/outdoor furniture/2024-07-20 13-40-13.JPG',
      alt: $currentLang === 'en' ? 'Outdoor Furniture' : 'Уличная мебель',
      category: 'street-furniture'
    },
    {
      id: 28,
      src: '/images/outdoor furniture/2024-07-20 13-40-20.JPG',
      alt: $currentLang === 'en' ? 'Outdoor Furniture' : 'Уличная мебель',
      category: 'street-furniture'
    },
    {
      id: 29,
      src: '/images/outdoor furniture/2024-07-20 13-40-20 (1).JPG',
      alt: $currentLang === 'en' ? 'Outdoor Furniture' : 'Уличная мебель',
      category: 'street-furniture'
    },
    {
      id: 30,
      src: '/images/outdoor furniture/chair.jpg',
      alt: $currentLang === 'en' ? 'Outdoor Chair' : 'Уличный стул',
      category: 'street-furniture'
    },
    {
      id: 31,
      src: '/images/outdoor furniture/photo_2025-07-01_07-07-40.jpg',
      alt: $currentLang === 'en' ? 'Outdoor Furniture' : 'Уличная мебель',
      category: 'street-furniture'
    },
    {
      id: 32,
      src: '/images/outdoor furniture/photo_2025-07-01_07-07-40 (2).jpg',
      alt: $currentLang === 'en' ? 'Outdoor Furniture' : 'Уличная мебель',
      category: 'street-furniture'
    },
    {
      id: 33,
      src: '/images/outdoor furniture/photo_2025-07-01_07-07-40 (3).jpg',
      alt: $currentLang === 'en' ? 'Outdoor Furniture' : 'Уличная мебель',
      category: 'street-furniture'
    },
    {
      id: 34,
      src: '/images/outdoor furniture/photo_2025-07-21_21-39-49.jpg',
      alt: $currentLang === 'en' ? 'Outdoor Furniture' : 'Уличная мебель',
      category: 'street-furniture'
    },
    {
      id: 35,
      src: '/images/outdoor furniture/photo_2025-07-21_21-39-50.jpg',
      alt: $currentLang === 'en' ? 'Outdoor Furniture' : 'Уличная мебель',
      category: 'street-furniture'
    },
    {
      id: 36,
      src: '/images/small forms/963A9631.jpg',
      alt: $currentLang === 'en' ? 'Outdoor Furniture' : 'Уличная мебель',
      category: 'street-furniture'
    },
    {
      id: 37,
      src: '/images/small forms/963A9632.jpg',
      alt: $currentLang === 'en' ? 'Outdoor Furniture' : 'Уличная мебель',
      category: 'street-furniture'
    },
    {
      id: 38,
      src: '/images/small forms/963A9633.jpg',
      alt: $currentLang === 'en' ? 'Outdoor Furniture' : 'Уличная мебель',
      category: 'street-furniture'
    },
    {
      id: 39,
      src: '/images/small forms/963A9634.jpg',
      alt: $currentLang === 'en' ? 'Outdoor Furniture' : 'Уличная мебель',
      category: 'street-furniture'
    },
    {
      id: 40,
      src: '/images/small forms/963A9642.jpg',
      alt: $currentLang === 'en' ? 'Outdoor Furniture' : 'Уличная мебель',
      category: 'street-furniture'
    },
    {
      id: 41,
      src: '/images/small forms/963A9643.jpg',
      alt: $currentLang === 'en' ? 'Outdoor Furniture' : 'Уличная мебель',
      category: 'street-furniture'
    },
    {
      id: 42,
      src: '/images/small forms/963A9644.jpg',
      alt: $currentLang === 'en' ? 'Outdoor Furniture' : 'Уличная мебель',
      category: 'street-furniture'
    },
    {
      id: 43,
      src: '/images/small forms/963A9645.jpg',
      alt: $currentLang === 'en' ? 'Outdoor Furniture' : 'Уличная мебель',
      category: 'street-furniture'
    },
    {
      id: 44,
      src: '/images/small forms/963A9646.jpg',
      alt: $currentLang === 'en' ? 'Outdoor Furniture' : 'Уличная мебель',
      category: 'street-furniture'
    },
    {
      id: 45,
      src: '/images/small forms/Беседка1.jpg',
      alt: $currentLang === 'en' ? 'Gazebo' : 'Беседка',
      category: 'architectural-forms'
    },
    {
      id: 46,
      src: '/images/small forms/беседка.jpg',
      alt: $currentLang === 'en' ? 'Gazebo' : 'Беседка',
      category: 'architectural-forms'
    },
    {
      id: 47,
      src: '/images/small forms/photo_2025-07-21_21-42-37.jpg',
      alt: $currentLang === 'en' ? 'Small Architectural Structures' : 'Малые архитектурные формы',
      category: 'architectural-forms'
    },

    // House Category
    {
      id: 48,
      src: '/images/house/33bd0883de8e84637a5259827d798d53cedc01f1.jpeg',
      alt: $currentLang === 'en' ? 'Private Residential Homes' : 'Частные жилые дома',
      category: 'private-houses'
    },
    {
      id: 49,
      src: '/images/house/a4f1748b8d0ba362d3ddb23f529e98b6.jpg',
      alt: $currentLang === 'en' ? 'Private Residential Homes' : 'Частные жилые дома',
      category: 'private-houses'
    },
    {
      id: 50,
      src: '/images/house/house(1).jpg',
      alt: $currentLang === 'en' ? 'Private Residential Homes' : 'Частные жилые дома',
      category: 'private-houses'
    },
    {
      id: 51,
      src: '/images/house/house(2).jpg',
      alt: $currentLang === 'en' ? 'Private Residential Homes' : 'Частные жилые дома',
      category: 'private-houses'
    },
    {
      id: 52,
      src: '/images/house/house(3).jpg',
      alt: $currentLang === 'en' ? 'Private Residential Homes' : 'Частные жилые дома',
      category: 'private-houses'
    },
    {
      id: 53,
      src: '/images/house/house(4).jpg',
      alt: $currentLang === 'en' ? 'Private Residential Homes' : 'Частные жилые дома',
      category: 'private-houses'
    },

    // Restoration Category - Before
    {
      id: 54,
      src: '/images/restoration/before/photo_2025-07-01_07-07-40.jpg',
      alt: $currentLang === 'en' ? 'Restoration Before' : 'Реставрация До',
      category: 'restoration'
    },
    {
      id: 55,
      src: '/images/restoration/before/2024-05-14 16-44-07.JPG',
      alt: $currentLang === 'en' ? 'Restoration Before' : 'Реставрация До',
      category: 'restoration'
    },
    {
      id: 56,
      src: '/images/restoration/before/2024-05-14 16-44-40.JPG',
      alt: $currentLang === 'en' ? 'Restoration Before' : 'Реставрация До',
      category: 'restoration'
    },
    {
      id: 57,
      src: '/images/restoration/before/2024-05-14 16-45-04.JPG',
      alt: $currentLang === 'en' ? 'Restoration Before' : 'Реставрация До',
      category: 'restoration'
    },
    {
      id: 58,
      src: '/images/restoration/before/2024-05-14 16-47-06.JPG',
      alt: $currentLang === 'en' ? 'Restoration Before' : 'Реставрация До',
      category: 'restoration'
    },
    {
      id: 59,
      src: '/images/restoration/before/photo_2025-07-21_21-14-46.jpg',
      alt: $currentLang === 'en' ? 'Restoration Before' : 'Реставрация До',
      category: 'restoration'
    },

    // Restoration Category - After
    {
      id: 60,
      src: '/images/restoration/after/photo_2025-07-01_07-07-40.jpg',
      alt: $currentLang === 'en' ? 'Restoration After' : 'Реставрация После',
      category: 'restoration'
    },
    {
      id: 61,
      src: '/images/restoration/after/photo_2025-07-01_07-07-40 (2).jpg',
      alt: $currentLang === 'en' ? 'Restoration After' : 'Реставрация После',
      category: 'restoration'
    },
    {
      id: 62,
      src: '/images/restoration/after/photo_2025-07-01_07-07-40 (3).jpg',
      alt: $currentLang === 'en' ? 'Restoration After' : 'Реставрация После',
      category: 'restoration'
    },
    {
      id: 63,
      src: '/images/restoration/after/2024-05-18 13-49-31.JPG',
      alt: $currentLang === 'en' ? 'Restoration After' : 'Реставрация После',
      category: 'restoration'
    },
    {
      id: 64,
      src: '/images/restoration/after/2024-05-18 13-50-34.JPG',
      alt: $currentLang === 'en' ? 'Restoration After' : 'Реставрация После',
      category: 'restoration'
    },
    {
      id: 65,
      src: '/images/restoration/after/photo_2025-07-21_21-14-46.jpg',
      alt: $currentLang === 'en' ? 'Restoration After' : 'Реставрация После',
      category: 'restoration'
    }
  ];

  // Filter categories
  $: categories = [
    { id: 'all', name: $t('allWorks') },
    { id: 'for-kids', name: $currentLang === 'en' ? 'For Kids' : 'Для детей' },
    { id: 'street-furniture', name: $t('streetFurniture') },
    { id: 'interior-furniture', name: $t('interiorFurnitureCategory') },
    { id: 'architectural-forms', name: $t('architecturalFormsCategory') },
    { id: 'interior-design', name: $t('interiorDesignCategory') },
    { id: 'private-houses', name: $t('privateHomesCategory') },
    { id: 'restoration', name: $t('restorationCategory') }
  ];

  let activeCategory = 'all';

  function filterGallery(categoryId) {
    activeCategory = categoryId;
  }

  $: filteredImages = activeCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);
</script>

<section class="page-header">
  <div class="container">
    <h1>{$t('galleryTitle')}</h1>
  </div>
</section>

<section class="section">
  <div class="container">
<!--    <div class="gallery-intro">-->
<!--      <p>-->
<!--        {$t('galleryIntro')}-->
<!--      </p>-->
<!--    </div>-->

<!--    <div class="gallery-filter">-->
<!--      <ul class="filter-categories">-->
<!--        {#each categories as category}-->
<!--          <li>-->
<!--            <button -->
<!--              class="filter-btn {activeCategory === category.id ? 'active' : ''}" -->
<!--              on:click={() => filterGallery(category.id)}-->
<!--            >-->
<!--              {category.name}-->
<!--            </button>-->
<!--          </li>-->
<!--        {/each}-->
<!--      </ul>-->
<!--    </div>-->

    <div class="gallery-grid">
      {#each filteredImages as image}
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

<!--<section class="section contact-section">-->
<!--  <div class="container">-->
<!--    <div class="contact-container">-->
<!--      <div class="contact-info">-->
<!--        <h2>{$t('wantToOrder')}</h2>-->
<!--        <p>{$t('fillFormText')}</p>-->
<!--      </div>-->
<!--      <div class="contact-form-container">-->
<!--        <ContactForm formTitle={$t('orderProjectForm')} buttonText={$t('send')} />-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!--</section>-->

<!-- Image Modal -->
{#if selectedImage}
  <div class="modal-overlay" on:click={closeImageModal}>
    <div class="modal-content image-modal" on:click|stopPropagation>
      <button class="close-btn" on:click={closeImageModal}>&times;</button>

      <!-- Navigation arrows -->
      {#if filteredImages.length > 1}
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
<!--      <div class="image-modal-caption">-->
<!--&lt;!&ndash;        <h3>{selectedImage.alt}</h3>&ndash;&gt;-->
<!--        <div class="modal-actions">-->
<!--          {#if filteredImages.length > 1}-->
<!--            <div class="modal-counter">{selectedImageIndex + 1} / {filteredImages.length}</div>-->
<!--          {/if}-->
<!--&lt;!&ndash;          <button class="btn" on:click={openContactModal}>{$t('orderProject')}</button>&ndash;&gt;-->
<!--        </div>-->
<!--      </div>-->
    </div>
  </div>
{/if}

<!-- Contact Modal -->
{#if showContactModal}
  <div class="modal-overlay" on:click={closeContactModal}>
    <div class="modal-content" on:click|stopPropagation>
      <ContactForm
        formTitle={$t('orderProjectForm')}
        buttonText={$t('send')}
        isModal={true}
        on:close={closeContactModal}
      />
    </div>
  </div>
{/if}

<style>
  .page-header {
    background-color: var(--secondary-color);
    color: var(--white);
    padding: 8rem 0 4rem;
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

  .gallery-intro {
    max-width: 800px;
    margin: 0 auto 4rem;
    text-align: center;
    position: relative;
    padding-bottom: 2rem;
  }

  .gallery-intro::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background-color: var(--primary-color);
  }

  .gallery-intro p {
    font-size: 1.2rem;
    line-height: 1.8;
    color: var(--secondary-color);
  }

  .gallery-filter {
    margin-bottom: 2rem;
  }

  .filter-categories {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    list-style: none;
    gap: 1rem;
    margin-bottom: 2.5rem;
  }

  .filter-btn {
    background: none;
    border: 1px solid var(--primary-color);
    color: var(--primary-color);
    padding: 0.75rem 1.5rem;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 500;
    letter-spacing: 0.5px;
  }

  .filter-btn:hover,
  .filter-btn.active {
    background-color: var(--primary-color);
    color: var(--white);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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
    cursor: zoom-in;

  }

  /*.view-icon {*/
  /*  color: var(--white);*/
  /*  font-size: 2.5rem;*/
  /*  font-weight: bold;*/
  /*  width: 50px;*/
  /*  height: 50px;*/
  /*  background-color: rgba(255, 255, 255, 0.2);*/
  /*  border-radius: 50%;*/
  /*  display: flex;*/
  /*  justify-content: center;*/
  /*  align-items: center;*/
  /*  transition: background-color 0.3s ease;*/
  /*}*/

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

  .image-modal-caption h3 {
    font-size: 1.5rem;
    margin: 0;
  }

  .modal-actions {
    display: flex;
    align-items: center;
    gap: 1.5rem;
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
    .filter-categories {
      flex-direction: column;
      align-items: center;
    }

    .gallery-grid {
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
