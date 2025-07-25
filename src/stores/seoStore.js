import { derived } from 'svelte/store';
import { currentLang, languages } from './languageStore';
import { loc } from 'svelte-spa-router';

// SEO data for each page and language
const seoData = {
  en: {
    home: {
      title: 'CTC - Wooden Furniture and Custom Woodwork in Cyprus',
      description: 'CTC specializes in high-quality wooden furniture, outdoor structures, and interior design in Cyprus. Custom woodwork crafted with precision and care.',
      keywords: 'wooden furniture, custom woodwork, Cyprus, outdoor furniture, interior design',
      ogTitle: 'CTC - Wooden Furniture Experts in Cyprus',
      ogDescription: 'Discover premium wooden furniture and custom woodwork solutions for your home and garden in Cyprus.',
      ogImage: '/logo/Лого СТС без рамки 4.jpg'
    },
    gallery: {
      title: 'Gallery - CTC Wooden Furniture Projects',
      description: 'Browse our gallery of completed wooden furniture projects, outdoor structures, and interior designs. Quality craftsmanship in every piece.',
      keywords: 'wooden furniture gallery, woodwork projects, furniture portfolio, Cyprus',
      ogTitle: 'Gallery of Wooden Furniture Projects - CTC',
      ogDescription: 'See our completed wooden furniture projects and custom woodwork. Quality craftsmanship in every piece.',
      ogImage: '/images/outdoor furniture/963A9631.jpg'
    },
    about: {
      title: 'About CTC - Wooden Furniture Craftsmen in Cyprus',
      description: 'Learn about CTC, our team of expert woodworkers, and our commitment to quality wooden furniture and structures in Cyprus.',
      keywords: 'about CTC, wooden furniture company, Cyprus woodworkers, furniture craftsmen',
      ogTitle: 'About CTC - Wooden Furniture Experts',
      ogDescription: 'Meet our team of expert woodworkers committed to creating high-quality wooden furniture and structures in Cyprus.',
      ogImage: '/logo/Лого СТС без рамки 4.jpg'
    },
    blog: {
      title: 'Blog - Wooden Furniture Tips and Insights | CTC',
      description: 'Read our blog for tips on wooden furniture care, design ideas, and insights into woodworking techniques and trends.',
      keywords: 'wooden furniture blog, woodworking tips, furniture care, design ideas',
      ogTitle: 'Wooden Furniture Blog - CTC',
      ogDescription: 'Tips on wooden furniture care, design ideas, and insights into woodworking techniques and trends.',
      ogImage: '/images/indoor/2024-06-01 14-39-21.JPG'
    },
    directions: {
      title: 'Our Services - CTC Wooden Furniture and Structures',
      description: 'Explore our range of services including custom wooden furniture, outdoor structures, interior design, and restoration.',
      keywords: 'wooden furniture services, custom woodwork, outdoor structures, interior design',
      ogTitle: 'Our Wooden Furniture Services - CTC',
      ogDescription: 'From custom furniture to outdoor structures and restoration - discover our complete range of wooden furniture services.',
      ogImage: '/images/indoor/2024-05-12 23-19-10.JPG'
    },
    contact: {
      title: 'Contact Us - CTC Wooden Furniture in Cyprus',
      description: 'Get in touch with CTC for custom wooden furniture, outdoor structures, and interior design services in Cyprus. Request a consultation or quote.',
      keywords: 'contact CTC, wooden furniture Cyprus, custom woodwork contact, furniture consultation',
      ogTitle: 'Contact CTC - Wooden Furniture Experts in Cyprus',
      ogDescription: 'Reach out to our team of expert woodworkers for custom wooden furniture, outdoor structures, and interior design services in Cyprus.',
      ogImage: '/logo/Лого СТС без рамки 4.jpg'
    },
    'directions-street-furniture': {
      title: 'Outdoor Furniture - CTC Wooden Furniture in Cyprus',
      description: 'Discover our range of high-quality outdoor wooden furniture designed to withstand the Cyprus climate. Loungers, chairs, and children\'s playhouses crafted with care.',
      keywords: 'outdoor furniture, wooden loungers, garden chairs, children\'s playhouses, Cyprus',
      ogTitle: 'Outdoor Wooden Furniture - CTC Cyprus',
      ogDescription: 'Weather-resistant and durable outdoor furniture that combines comfort with style for your garden, patio or terrace.',
      ogImage: '/images/outdoor furniture/963A9631.jpg'
    },
    'directions-interior-furniture': {
      title: 'Interior Furniture - CTC Wooden Furniture in Cyprus',
      description: 'Explore our collection of custom interior wooden furniture. Tables, bookcases, cabinets, and beds crafted with precision and style.',
      keywords: 'interior furniture, wooden tables, bookcases, cabinets, beds, Cyprus',
      ogTitle: 'Interior Wooden Furniture - CTC Cyprus',
      ogDescription: 'Custom interior furniture designed with both aesthetics and functionality in mind. Each piece is crafted with attention to detail.',
      ogImage: '/images/indoor/2024-06-24 06-27-19_1719213072226.JPG'
    },
    'directions-architectural-forms': {
      title: 'Small Architectural Structures - CTC Wooden Constructions in Cyprus',
      description: 'Custom wooden architectural structures including guest houses and gazebos. Built with quality materials and expert craftsmanship.',
      keywords: 'architectural structures, wooden gazebos, guest houses, wooden constructions, Cyprus',
      ogTitle: 'Wooden Architectural Structures - CTC Cyprus',
      ogDescription: 'Guest houses and gazebos built with quality materials and expert craftsmanship for your outdoor space.',
      ogImage: '/images/outdoor furniture/беседка.jpg'
    },
    'directions-interior-design': {
      title: 'Interior Design Services - CTC Design Solutions in Cyprus',
      description: 'Professional interior design services from minimalism to baroque. Create spaces that reflect your personal style with our expert designers.',
      keywords: 'interior design, renovation services, home design, wooden interiors, Cyprus',
      ogTitle: 'Interior Design Services - CTC Cyprus',
      ogDescription: 'From minimalism to baroque, we create spaces that reflect your personal style with our expert interior design services.',
      ogImage: '/images/indoor/2024-05-12 23-19-10.JPG'
    },
    'directions-private-houses': {
      title: 'Private Residential Homes - CTC Construction in Cyprus',
      description: 'Custom design and construction of private residential homes according to your individual plan and specifications.',
      keywords: 'private homes, residential construction, custom house design, wooden houses, Cyprus',
      ogTitle: 'Private Residential Homes - CTC Cyprus',
      ogDescription: 'Design and construction of private residential homes according to your individual plan and specifications.',
      ogImage: '/images/house/house(1).jpg'
    },
    'directions-restoration': {
      title: 'Restoration Services - CTC Wooden Furniture Restoration in Cyprus',
      description: 'Expert restoration and maintenance services for wooden products. Give new life to your cherished wooden items with our professional care.',
      keywords: 'wooden furniture restoration, wood maintenance, furniture repair, antique restoration, Cyprus',
      ogTitle: 'Wooden Furniture Restoration - CTC Cyprus',
      ogDescription: 'Giving new life to your wooden products with expert restoration and care. Professional maintenance services for all wooden items.',
      ogImage: '/images/restoration/after/photo_2025-07-01_07-07-40.jpg'
    }
  },
  ru: {
    home: {
      title: 'CTC - Деревянная мебель и изделия на заказ на Кипре',
      description: 'CTC специализируется на высококачественной деревянной мебели, уличных конструкциях и дизайне интерьера на Кипре. Изделия из дерева, изготовленные с точностью и заботой.',
      keywords: 'деревянная мебель, изделия на заказ, Кипр, уличная мебель, дизайн интерьера',
      ogTitle: 'CTC - Эксперты по деревянной мебели на Кипре',
      ogDescription: 'Откройте для себя премиальную деревянную мебель и индивидуальные решения для вашего дома и сада на Кипре.',
      ogImage: '/logo/Лого СТС без рамки 4.jpg'
    },
    gallery: {
      title: 'Галерея - Проекты деревянной мебели CTC',
      description: 'Просмотрите нашу галерею завершенных проектов деревянной мебели, уличных конструкций и дизайна интерьера. Качественное мастерство в каждом изделии.',
      keywords: 'галерея деревянной мебели, проекты изделий из дерева, портфолио мебели, Кипр',
      ogTitle: 'Галерея проектов деревянной мебели - CTC',
      ogDescription: 'Посмотрите наши завершенные проекты деревянной мебели и изделий на заказ. Качественное мастерство в каждом изделии.',
      ogImage: '/images/outdoor furniture/963A9631.jpg'
    },
    about: {
      title: 'О компании CTC - Мастера деревянной мебели на Кипре',
      description: 'Узнайте о компании CTC, нашей команде опытных мастеров и нашем стремлении к качественной деревянной мебели и конструкциям на Кипре.',
      keywords: 'о компании CTC, компания деревянной мебели, мастера на Кипре, мебельные мастера',
      ogTitle: 'О компании CTC - Эксперты по деревянной мебели',
      ogDescription: 'Познакомьтесь с нашей командой опытных мастеров, создающих высококачественную деревянную мебель и конструкции на Кипре.',
      ogImage: '/logo/Лого СТС без рамки 4.jpg'
    },
    blog: {
      title: 'Блог - Советы и идеи о деревянной мебели | CTC',
      description: 'Читайте наш блог с советами по уходу за деревянной мебелью, идеями дизайна и информацией о техниках и тенденциях деревообработки.',
      keywords: 'блог о деревянной мебели, советы по деревообработке, уход за мебелью, идеи дизайна',
      ogTitle: 'Блог о деревянной мебели - CTC',
      ogDescription: 'Советы по уходу за деревянной мебелью, идеи дизайна и информация о техниках и тенденциях деревообработки.',
      ogImage: '/images/indoor/2024-06-01 14-39-21.JPG'
    },
    directions: {
      title: 'Наши услуги - Деревянная мебель и конструкции CTC',
      description: 'Изучите наш спектр услуг, включая изготовление деревянной мебели на заказ, уличные конструкции, дизайн интерьера и реставрацию.',
      keywords: 'услуги по деревянной мебели, изделия на заказ, уличные конструкции, дизайн интерьера',
      ogTitle: 'Наши услуги по деревянной мебели - CTC',
      ogDescription: 'От мебели на заказ до уличных конструкций и реставрации - откройте для себя полный спектр наших услуг по деревянной мебели.',
      ogImage: '/images/indoor/2024-05-12 23-19-10.JPG'
    },
    contact: {
      title: 'Контакты - CTC Деревянная мебель на Кипре',
      description: 'Свяжитесь с CTC для заказа деревянной мебели, уличных конструкций и услуг по дизайну интерьера на Кипре. Запросите консультацию или расчет стоимости.',
      keywords: 'контакты CTC, деревянная мебель Кипр, заказать изделия из дерева, консультация по мебели',
      ogTitle: 'Контакты CTC - Эксперты по деревянной мебели на Кипре',
      ogDescription: 'Обратитесь к нашей команде опытных мастеров для заказа деревянной мебели, уличных конструкций и услуг по дизайну интерьера на Кипре.',
      ogImage: '/logo/Лого СТС без рамки 4.jpg'
    },
    'directions-street-furniture': {
      title: 'Уличная мебель - CTC Деревянная мебель на Кипре',
      description: 'Откройте для себя наш ассортимент высококачественной уличной деревянной мебели, созданной для кипрского климата. Шезлонги, кресла и детские домики, изготовленные с заботой.',
      keywords: 'уличная мебель, деревянные шезлонги, садовые кресла, детские домики, Кипр',
      ogTitle: 'Уличная деревянная мебель - CTC Кипр',
      ogDescription: 'Устойчивая к погодным условиям и долговечная уличная мебель, сочетающая комфорт со стилем для вашего сада, патио или террасы.',
      ogImage: '/images/outdoor furniture/963A9631.jpg'
    },
    'directions-interior-furniture': {
      title: 'Мебель в интерьере - CTC Деревянная мебель на Кипре',
      description: 'Изучите нашу коллекцию деревянной мебели для интерьера на заказ. Столы, книжные шкафы, тумбочки и кровати, изготовленные с точностью и стилем.',
      keywords: 'мебель для интерьера, деревянные столы, книжные шкафы, тумбочки, кровати, Кипр',
      ogTitle: 'Деревянная мебель для интерьера - CTC Кипр',
      ogDescription: 'Мебель для интерьера на заказ, разработанная с учетом как эстетики, так и функциональности. Каждое изделие изготовлено с вниманием к деталям.',
      ogImage: '/images/indoor/2024-06-24 06-27-19_1719213072226.JPG'
    },
    'directions-architectural-forms': {
      title: 'Малые архитектурные формы - CTC Деревянные конструкции на Кипре',
      description: 'Деревянные архитектурные конструкции на заказ, включая гостевые дома и беседки. Построены из качественных материалов с мастерством экспертов.',
      keywords: 'архитектурные формы, деревянные беседки, гостевые дома, деревянные конструкции, Кипр',
      ogTitle: 'Деревянные архитектурные формы - CTC Кипр',
      ogDescription: 'Гостевые дома и беседки, построенные из качественных материалов с мастерством экспертов для вашего открытого пространства.',
      ogImage: '/images/outdoor furniture/беседка.jpg'
    },
    'directions-interior-design': {
      title: 'Дизайн интерьеров - CTC Дизайнерские решения на Кипре',
      description: 'Профессиональные услуги по дизайну интерьера от минимализма до барокко. Создайте пространства, отражающие ваш личный стиль, с нашими опытными дизайнерами.',
      keywords: 'дизайн интерьера, ремонтные работы, дизайн дома, деревянные интерьеры, Кипр',
      ogTitle: 'Услуги по дизайну интерьера - CTC Кипр',
      ogDescription: 'От минимализма до барокко, мы создаем пространства, отражающие ваш личный стиль, с нашими профессиональными услугами по дизайну интерьера.',
      ogImage: '/images/indoor/2024-05-12 23-19-10.JPG'
    },
    'directions-private-houses': {
      title: 'Частные жилые дома - CTC Строительство на Кипре',
      description: 'Индивидуальное проектирование и строительство частных жилых домов по вашему индивидуальному плану и спецификациям.',
      keywords: 'частные дома, жилое строительство, индивидуальный дизайн дома, деревянные дома, Кипр',
      ogTitle: 'Частные жилые дома - CTC Кипр',
      ogDescription: 'Проектирование и строительство частных жилых домов по вашему индивидуальному плану и спецификациям.',
      ogImage: '/images/house/house(1).jpg'
    },
    'directions-restoration': {
      title: 'Реставрация - CTC Реставрация деревянной мебели на Кипре',
      description: 'Экспертные услуги по реставрации и уходу за изделиями из дерева. Дайте новую жизнь вашим ценным деревянным предметам с нашим профессиональным уходом.',
      keywords: 'реставрация деревянной мебели, уход за деревом, ремонт мебели, реставрация антиквариата, Кипр',
      ogTitle: 'Реставрация деревянной мебели - CTC Кипр',
      ogDescription: 'Дарим новую жизнь вашим деревянным изделиям с помощью экспертной реставрации и ухода. Профессиональные услуги по уходу за всеми деревянными предметами.',
      ogImage: '/images/restoration/after/photo_2025-07-01_07-07-40.jpg'
    }
  }
};

// Helper function to get the page name from the path
function getPageFromPath(path) {
  // Extract the page name from the path (after the language prefix)
  const parts = path.split('/').filter(Boolean);

  // If there's only the language part or nothing, it's the home page
  if (parts.length <= 1) {
    return 'home';
  }

  // Check if it's a direction page
  if (parts.length > 2 && parts[1] === 'directions') {
    return `directions-${parts[2]}`;
  }

  // Otherwise, return the page name (second part of the path)
  return parts[1];
}

// Create a derived store that combines the current language and location
export const seo = derived(
  [currentLang, loc],
  ([$currentLang, $locValue]) => {
    const $location = $locValue.location + ($locValue.querystring ? '?' + $locValue.querystring : '');
    const page = getPageFromPath($location);

    // Get the SEO data for the current language and page
    // Default to home page if the page doesn't exist in the SEO data
    const pageSeo = seoData[$currentLang]?.[page] || seoData[$currentLang]?.home;

    return {
      ...pageSeo,
      lang: $currentLang,
      canonicalUrl: `https://ctc.cy/${$currentLang}${$location === `/${$currentLang}` ? '' : $location.substring($currentLang.length + 1)}`,
      alternateUrls: languages.map(lang => ({
        lang,
        url: `https://ctc.cy/${lang}${$location === `/${$currentLang}` ? '' : $location.substring($currentLang.length + 1)}`
      }))
    };
  }
);
