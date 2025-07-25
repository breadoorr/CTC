import { writable, derived, get } from 'svelte/store';
import { push, loc } from 'svelte-spa-router';

// Available languages
export const languages = ['en', 'ru'];

// Initial language (default to English)
const initialLang = 'en';

// Create a writable store for the current language
export const currentLang = writable(initialLang);

// Get the preferred language from localStorage or use default
export function getPreferredLanguage() {
  if (typeof window !== 'undefined') {
    const savedLang = localStorage.getItem('language');
    if (savedLang && languages.includes(savedLang)) {
      return savedLang;
    }
  }
  return initialLang;
}

// Extract language from URL path
export function getLanguageFromPath(path) {
  const pathParts = path.split('/').filter(Boolean);
  const firstPart = pathParts[0];

  if (languages.includes(firstPart)) {
    return firstPart;
  }

  return null;
}

// Function to set the language and navigate to the corresponding route
export function setLanguage(lang) {
  if (languages.includes(lang)) {
    // Update the language store
    currentLang.set(lang);

    // Save to localStorage for persistence
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lang);
    }

    // Get the current path and navigate to the corresponding path in the new language
    const locValue = get(loc);
    const currentPath = locValue.location + (locValue.querystring ? '?' + locValue.querystring : '');
    const currentLangFromPath = getLanguageFromPath(currentPath);

    if (currentLangFromPath) {
      // If the current path already has a language prefix, replace it
      const newPath = currentPath.replace(`/${currentLangFromPath}`, `/${lang}`);
      push(newPath);
    } else {
      // If the current path doesn't have a language prefix, add it
      push(`/${lang}`);
    }
  } else {
    console.error(`Language ${lang} is not supported`);
  }
}

// Initialize language from URL or localStorage
export function initLanguage() {
  if (typeof window !== 'undefined') {
    // First check if the URL has a language prefix
    const locValue = get(loc);
    const currentPath = locValue.location + (locValue.querystring ? '?' + locValue.querystring : '');
    const langFromPath = getLanguageFromPath(currentPath);

    if (langFromPath) {
      // If the URL has a language prefix, use it
      currentLang.set(langFromPath);
      localStorage.setItem('language', langFromPath);
    } else {
      // Otherwise, use the language from localStorage or default
      const savedLang = localStorage.getItem('language');
      if (savedLang && languages.includes(savedLang)) {
        currentLang.set(savedLang);
      }
    }
  }
}

// Translation dictionaries
const translations = {
  en: {
    // Header
    areasOfActivity: 'Areas of Activity',
    outdoorFurniture: 'Outdoor Furniture',
    interiorFurniture: 'Interior Furniture',
    architecturalStructures: 'Small Architectural Structures',
    interiorDesign: 'Interior Design and Renovation Services',
    privateHomes: 'Private Residential Homes',
    restoration: 'Restoration and Maintenance of Wooden Products',
    gallery: 'Gallery',
    blog: 'Blog',
    aboutUs: 'About Us',
    companyTeam: 'Company team',
    contacts: 'Contacts',

    // Footer
    woodenFurnitureArt: 'Wooden furniture is art, and we are its masters',
    navigation: 'Navigation',
    ourServices: 'Our Services',
    contactUs: 'Contact Us',
    allRightsReserved: 'All rights reserved',

    // Home page
    bannerSubtitle: 'WOODEN FURNITURE IS ART, AND WE ARE ITS MASTERS!',
    bannerTitle: 'Wooden products for your home',

    // Slider
    customFurnitureTitle: 'Custom furniture for your home',
    customFurnitureDesc: 'We create unique furniture pieces tailored to your space and style. We use high-quality wood and offer a variety of design options.',
    interiorFurnitureTitle: 'Interior furniture solutions',
    interiorFurnitureDesc: 'Our interior furniture is designed with both aesthetics and functionality in mind. Each piece is crafted with attention to detail.',
    outdoorFurnitureTitle: 'Outdoor wooden furniture',
    outdoorFurnitureDesc: 'Weather-resistant and durable outdoor furniture that combines comfort with style for your garden, patio or terrace.',

    // Services
    servicesTitle: 'Our Services',
    outdoorFurnitureService: 'Outdoor Furniture',
    outdoorFurnitureDesc: 'Loungers, chairs, and children\'s playhouses designed to withstand the elements.',
    interiorFurnitureService: 'Interior Furniture',
    interiorFurnitureDesc: 'Tables, bookcases, cabinets, and beds crafted with precision and style.',
    architecturalStructuresService: 'Small Architectural Structures',
    architecturalStructuresDesc: 'Guest houses and gazebos built with quality materials and expert craftsmanship.',
    interiorDesignService: 'Interior Design',
    interiorDesignDesc: 'From minimalism to baroque, we create spaces that reflect your personal style.',
    forKidsService: 'For Kids',
    forKidsDesc: 'Playhouses, furniture designed specifically for children.',
    privateHomesService: 'Private Residential Homes',
    privateHomesDesc: 'Design and construction according to your individual plan and specifications.',
    restorationService: 'Restoration',
    restorationDesc: 'Giving new life to your wooden products with expert restoration and care.',

    // Gallery page
    galleryTitle: 'Gallery',
    galleryIntro: 'In our gallery, you can see photos of our completed works. You can explore examples of our projects and evaluate the quality of execution.',
    allWorks: 'All Works',
    streetFurniture: 'Outdoor Furniture',
    interiorFurnitureCategory: 'Interior Furniture',
    architecturalFormsCategory: 'Small Architectural Structures',
    interiorDesignCategory: 'Interior Design',
    privateHomesCategory: 'Private Residential Homes',
    restorationCategory: 'Restoration',
    orderProject: 'Order a similar project',
    orderProjectForm: 'Order a project',
    send: 'Submit',
    wantToOrder: 'Want to order a similar project?',
    fillFormText: 'If you liked our work and want to order something similar, fill out the form and we will contact you to discuss the details.',

    // Contact page
    contactPageIntro: 'We are always happy to hear from you. Feel free to contact us with any questions or inquiries.',
    phone: 'Phone',
    email: 'Email',
    address: 'Address',
    addressText: '4540 Paramytha, Cyprus',
    workingHours: 'Working Hours',
    workingHoursText: 'Monday - Friday: 9:00 AM - 6:00 PM',
    followUs: 'Follow Us',
    contactFormTitle: 'Send us a message',

    // Contact Form
    leaveRequest: 'Leave a request',
    yourName: 'Your name',
    yourPhone: 'Your phone',
    message: 'Message (optional)',
    sending: 'Sending...',
    submit: 'Submit',
    thankYou: 'Thank you for your request! We will contact you shortly.',
    pleaseEnterName: 'Please enter your name',
    pleaseEnterPhone: 'Please enter your phone number'
  },
  ru: {
    // Header
    areasOfActivity: 'Направления деятельности',
    outdoorFurniture: 'Уличная мебель',
    interiorFurniture: 'Мебель в интерьере',
    architecturalStructures: 'Малые архитектурные формы',
    interiorDesign: 'Дизайн интерьеров и ремонтные работы',
    privateHomes: 'Частные жилые дома',
    restoration: 'Реставрация и уход за изделиями из дерева',
    gallery: 'Галерея',
    blog: 'Блог',
    aboutUs: 'О компании',
    companyTeam: 'Команда компании',
    contacts: 'Контакты',

    // Footer
    woodenFurnitureArt: 'Деревянная мебель – это искусство, а мы его мастера',
    navigation: 'Навигация',
    ourServices: 'Наши услуги',
    contactUs: 'Связаться с нами',
    allRightsReserved: 'Все права защищены',

    // Home page
    bannerSubtitle: 'ДЕРЕВЯННАЯ МЕБЕЛЬ – ЭТО ИСКУССТВО, А МЫ ЕГО МАСТЕРА!',
    bannerTitle: 'Деревянные изделия для вашего дома',

    // Slider
    customFurnitureTitle: 'Мебель на заказ для вашего дома',
    customFurnitureDesc: 'Мы создаем уникальные предметы мебели, адаптированные к вашему пространству и стилю. Мы используем высококачественную древесину и предлагаем различные варианты дизайна.',
    interiorFurnitureTitle: 'Решения для мебели в интерьере',
    interiorFurnitureDesc: 'Наша мебель для интерьера разработана с учетом как эстетики, так и функциональности. Каждое изделие изготовлено с вниманием к деталям.',
    outdoorFurnitureTitle: 'Уличная деревянная мебель',
    outdoorFurnitureDesc: 'Устойчивая к погодным условиям и долговечная уличная мебель, сочетающая комфорт со стилем для вашего сада, патио или террасы.',

    // Services
    servicesTitle: 'Наши услуги',
    outdoorFurnitureService: 'Уличная мебель',
    outdoorFurnitureDesc: 'Шезлонги, кресла и домики для детей, созданные для противостояния стихиям.',
    interiorFurnitureService: 'Мебель в интерьере',
    interiorFurnitureDesc: 'Столы, книжные шкафы, тумбочки и кровати, изготовленные с точностью и стилем.',
    architecturalStructuresService: 'Малые архитектурные формы',
    architecturalStructuresDesc: 'Гостевые дома и беседки, построенные из качественных материалов с мастерством экспертов.',
    interiorDesignService: 'Дизайн интерьеров',
    interiorDesignDesc: 'От минимализма до барокко, мы создаем пространства, отражающие ваш личный стиль.',
    forKidsService: 'Для детей',
    forKidsDesc: 'Игровые домики, мебель специально разработанные для детей.',
    privateHomesService: 'Частные жилые дома',
    privateHomesDesc: 'Проектирование и строительство по вашему индивидуальному плану и спецификациям.',
    restorationService: 'Реставрация',
    restorationDesc: 'Дарим новую жизнь вашим деревянным изделиям с помощью экспертной реставрации и ухода.',

    // Gallery page
    galleryTitle: 'Галерея',
    galleryIntro: 'В нашей галерее представлены фотографии выполненных нами работ. Вы можете ознакомиться с примерами наших проектов и оценить качество исполнения.',
    allWorks: 'Все работы',
    streetFurniture: 'Уличная мебель',
    interiorFurnitureCategory: 'Мебель в интерьере',
    architecturalFormsCategory: 'Малые архитектурные формы',
    interiorDesignCategory: 'Дизайн интерьеров',
    privateHomesCategory: 'Частные жилые дома',
    restorationCategory: 'Реставрация',
    orderProject: 'Заказать подобный проект',
    orderProjectForm: 'Заказать проект',
    send: 'Отправить',
    wantToOrder: 'Хотите заказать подобный проект?',
    fillFormText: 'Если вам понравились наши работы и вы хотите заказать что-то подобное, заполните форму, и мы свяжемся с вами для обсуждения деталей.',

    // Contact page
    contactPageIntro: 'Мы всегда рады слышать от вас. Не стесняйтесь обращаться к нам с любыми вопросами или запросами.',
    phone: 'Телефон',
    email: 'Электронная почта',
    address: 'Адрес',
    addressText: '4540 Paramytha, Cyprus',
    workingHours: 'Часы работы',
    workingHoursText: 'Понедельник - Пятница: 9:00 - 18:00',
    followUs: 'Следите за нами',
    contactFormTitle: 'Отправьте нам сообщение',

    // Contact Form
    leaveRequest: 'Оставьте заявку',
    yourName: 'Ваше имя',
    yourPhone: 'Ваш телефон',
    message: 'Сообщение (необязательно)',
    sending: 'Отправка...',
    submit: 'Отправить',
    thankYou: 'Спасибо за вашу заявку! Мы свяжемся с вами в ближайшее время.',
    pleaseEnterName: 'Пожалуйста, введите ваше имя',
    pleaseEnterPhone: 'Пожалуйста, введите ваш телефон'
  }
};

// Create a derived store for the translations
export const t = derived(
  currentLang,
  $currentLang => key => translations[$currentLang][key] || key
);
