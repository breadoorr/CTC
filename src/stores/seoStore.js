import { derived } from 'svelte/store';
import { currentLang, languages } from './languageStore';
import { page } from '$app/stores';
import { getAssetPath } from '../utils/assetPath';

// Helper function to process image paths in the SEO data
function processImagePaths(data) {
  const processed = { ...data };

  // Process each language
  Object.keys(processed).forEach(lang => {
    // Process each page
    Object.keys(processed[lang]).forEach(page => {
      // Process ogImage if it exists and is a string
      if (processed[lang][page].ogImage && typeof processed[lang][page].ogImage === 'string') {
        processed[lang][page].ogImage = getAssetPath(processed[lang][page].ogImage);
      }
    });
  });

  return processed;
}

// SEO data for each page and language
const seoDataRaw = {
  en: {
    home: {
      title: 'Custom Wooden Furniture in Cyprus | CTC',
      description: 'Custom wooden furniture in Cyprus for homes, villas, gardens, and businesses. Handmade tables, cabinets, gazebos, outdoor and interior furniture with delivery and installation.',
      keywords: 'wooden furniture, custom woodwork, Cyprus, outdoor furniture, interior design',
      ogTitle: 'CTC - Wooden Furniture Experts in Cyprus',
      ogDescription: 'Discover premium wooden furniture and custom woodwork solutions for your home and garden in Cyprus.',
      ogImage: '/logo/Лого СТС без рамки 4.jpg'
    },
    gallery: {
      title: 'Custom Wooden Furniture Projects in Cyprus | CTC Gallery',
      description: 'Explore our portfolio of custom wooden furniture, gazebos, outdoor structures, and interior design projects completed across Cyprus.',
      keywords: 'wooden furniture gallery, woodwork projects, furniture portfolio, Cyprus',
      ogTitle: 'Gallery of Wooden Furniture Projects - CTC',
      ogDescription: 'See our completed wooden furniture projects and custom woodwork. Quality craftsmanship in every piece.',
      ogImage: '/images/outdoor furniture/963A9631.jpg'
    },
    about: {
      title: 'About CTC | Custom Wooden Furniture Makers in Cyprus',
      description: 'Learn more about CTC, our woodworking team, and our experience creating custom wooden furniture and outdoor structures in Cyprus.',
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
      title: 'Custom Wooden Furniture and Woodwork Services in Cyprus | CTC',
      description: 'Custom wooden furniture, gazebos, outdoor structures, restoration, and interior woodwork services in Cyprus.',
      keywords: 'wooden furniture services, custom woodwork, outdoor structures, interior design',
      ogTitle: 'Our Wooden Furniture Services - CTC',
      ogDescription: 'From custom furniture to outdoor structures and restoration - discover our complete range of wooden furniture services.',
      ogImage: '/images/indoor/2024-05-12 23-19-10.JPG'
    },
    contact: {
      title: 'Contact CTC | Custom Wooden Furniture in Cyprus',
      description: 'Contact CTC for custom wooden furniture, outdoor woodwork, gazebos, and restoration services in Cyprus. Request a consultation or quote.',
      keywords: 'contact CTC, wooden furniture Cyprus, custom woodwork contact, furniture consultation',
      ogTitle: 'Contact CTC - Wooden Furniture Experts in Cyprus',
      ogDescription: 'Reach out to our team of expert woodworkers for custom wooden furniture, outdoor structures, and interior design services in Cyprus.',
      ogImage: '/logo/Лого СТС без рамки 4.jpg'
    },
    'directions-street-furniture': {
      title: 'Outdoor Wooden Furniture in Cyprus | CTC',
      description: 'Custom outdoor wooden furniture for gardens, patios, villas, and terraces in Cyprus. Handmade loungers, chairs, tables, and kids playhouses.',
      keywords: 'outdoor furniture, wooden loungers, garden chairs, children\'s playhouses, Cyprus',
      ogTitle: 'Outdoor Wooden Furniture - CTC Cyprus',
      ogDescription: 'Weather-resistant and durable outdoor furniture that combines comfort with style for your garden, patio or terrace.',
      ogImage: '/images/outdoor furniture/963A9631.jpg'
    },
    'directions-interior-furniture': {
      title: 'Custom Interior Wooden Furniture in Cyprus | CTC',
      description: 'Handmade interior wooden furniture in Cyprus: tables, cabinets, beds, shelves, and custom wood solutions for homes and businesses.',
      keywords: 'interior furniture, wooden tables, bookcases, cabinets, beds, Cyprus',
      ogTitle: 'Interior Wooden Furniture - CTC Cyprus',
      ogDescription: 'Custom interior furniture designed with both aesthetics and functionality in mind. Each piece is crafted with attention to detail.',
      ogImage: '/images/indoor/2024-06-24 06-27-19_1719213072226.JPG'
    },
    'directions-architectural-forms': {
      title: 'Wooden Gazebos and Outdoor Structures in Cyprus | CTC',
      description: 'Custom wooden gazebos, pergolas, guest houses, and outdoor structures designed and built in Cyprus.',
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
      title: 'Interior and Exterior Decor - CTC Construction in Cyprus',
      description: 'Custom design and construction of private residential homes according to your individual plan and specifications.',
      keywords: 'private homes, residential construction, custom house design, wooden houses, Cyprus',
      ogTitle: 'Private Residential Homes - CTC Cyprus',
      ogDescription: 'Design and construction of private residential homes according to your individual plan and specifications.',
      ogImage: '/images/house/house(1).jpg'
    },
    'directions-restoration': {
      title: 'Wood Furniture Restoration in Cyprus | CTC',
      description: 'Professional wood furniture restoration and repair services in Cyprus. Restore and protect your wooden furniture with expert craftsmanship.',
      keywords: 'wooden furniture restoration, wood maintenance, furniture repair, antique restoration, Cyprus',
      ogTitle: 'Wooden Furniture Restoration - CTC Cyprus',
      ogDescription: 'Giving new life to your wooden products with expert restoration and care. Professional maintenance services for all wooden items.',
      ogImage: '/images/restoration/after/photo_2025-07-01_07-07-40.jpg'
    }
  },
  ru: {
    home: {
      title: 'Деревянная мебель на заказ на Кипре | CTC',
      description: 'Изготавливаем деревянную мебель на заказ на Кипре: столы, шкафы, беседки, уличная и интерьерная мебель. Натуральное дерево, индивидуальный дизайн, доставка и установка.',
      keywords: 'деревянная мебель, изделия на заказ, Кипр, уличная мебель, дизайн интерьера',
      ogTitle: 'CTC - Эксперты по деревянной мебели на Кипре',
      ogDescription: 'Откройте для себя премиальную деревянную мебель и индивидуальные решения для вашего дома и сада на Кипре.',
      ogImage: '/logo/Лого СТС без рамки 4.jpg'
    },
    gallery: {
      title: 'Портфолио деревянной мебели и проектов | CTC',
      description: 'Фото готовых проектов деревянной мебели, беседок, интерьерных решений и изделий из дерева на Кипре.',
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
      title: 'Мебель и изделия из дерева на заказ на Кипре | CTC',
      description: 'Изучите наш спектр услуг, включая изготовление деревянной мебели на заказ, уличные конструкции, дизайн интерьера и реставрацию.',
      keywords: 'услуги по деревянной мебели, изделия на заказ, уличные конструкции, дизайн интерьера',
      ogTitle: 'Наши услуги по деревянной мебели - CTC',
      ogDescription: 'От мебели на заказ до уличных конструкций и реставрации - откройте для себя полный спектр наших услуг по деревянной мебели.',
      ogImage: '/images/indoor/2024-05-12 23-19-10.JPG'
    },
    contact: {
      title: 'Контакты | Мебель на заказ CTC Cyprus',
      description: 'Свяжитесь с CTC для заказа деревянной мебели, беседок и интерьерных решений на Кипре. Консультация и расчет стоимости.',
      keywords: 'контакты CTC, деревянная мебель Кипр, заказать изделия из дерева, консультация по мебели',
      ogTitle: 'Контакты CTC - Эксперты по деревянной мебели на Кипре',
      ogDescription: 'Обратитесь к нашей команде опытных мастеров для заказа деревянной мебели, уличных конструкций и услуг по дизайну интерьера на Кипре.',
      ogImage: '/logo/Лого СТС без рамки 4.jpg'
    },
    'directions-street-furniture': {
      title: 'Уличная деревянная мебель на Кипре | CTC',
      description: 'Уличная мебель из дерева для сада, террасы и виллы на Кипре. Шезлонги, столы, кресла и детские домики ручной работы.',
      keywords: 'уличная мебель, деревянные шезлонги, садовые кресла, детские домики, Кипр',
      ogTitle: 'Уличная деревянная мебель - CTC Кипр',
      ogDescription: 'Устойчивая к погодным условиям и долговечная уличная мебель, сочетающая комфорт со стилем для вашего сада, патио или террасы.',
      ogImage: '/images/outdoor furniture/963A9631.jpg'
    },
    'directions-interior-furniture': {
      title: 'Деревянная мебель для интерьера на заказ | CTC Cyprus',
      description: 'Изготовление деревянной мебели для интерьера на заказ: столы, шкафы, кровати, полки и дизайнерские решения для дома и бизнеса на Кипре.',
      keywords: 'мебель для интерьера, деревянные столы, книжные шкафы, тумбочки, кровати, Кипр',
      ogTitle: 'Деревянная мебель для интерьера - CTC Кипр',
      ogDescription: 'Мебель для интерьера на заказ, разработанная с учетом как эстетики, так и функциональности. Каждое изделие изготовлено с вниманием к деталям.',
      ogImage: '/images/indoor/2024-06-24 06-27-19_1719213072226.JPG'
    },
    'directions-architectural-forms': {
      title: 'Деревянные беседки и архитектурные конструкции | CTC Cyprus',
      description: 'Изготовление деревянных беседок, гостевых домов и архитектурных конструкций на заказ на Кипре.',
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
      title: 'Внутренний и внешний декор - CTC Строительство на Кипре',
      description: 'Индивидуальное проектирование и строительство частных жилых домов по вашему индивидуальному плану и спецификациям.',
      keywords: 'Внутренний и внешний декор, жилое строительство, индивидуальный дизайн дома, деревянные дома, Кипр',
      ogTitle: 'Внутренний и внешний декор - CTC Кипр',
      ogDescription: 'Проектирование и строительство Внутренний и внешний декор по вашему индивидуальному плану и спецификациям.',
      ogImage: '/images/house/house(1).jpg'
    },
    'directions-restoration': {
      title: 'Реставрация деревянной мебели на Кипре | CTC',
      description: 'Профессиональная реставрация и ремонт деревянной мебели на Кипре. Восстановление, уход и обновление изделий из дерева.',
      keywords: 'реставрация деревянной мебели, уход за деревом, ремонт мебели, реставрация антиквариата, Кипр',
      ogTitle: 'Реставрация деревянной мебели - CTC Кипр',
      ogDescription: 'Дарим новую жизнь вашим деревянным изделиям с помощью экспертной реставрации и ухода. Профессиональные услуги по уходу за всеми деревянными предметами.',
      ogImage: '/images/restoration/after/photo_2025-07-01_07-07-40.jpg'
    }
  }
};

// Process the raw SEO data to handle image paths correctly
const seoData = processImagePaths(seoDataRaw);

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
  [currentLang, page],
  ([$currentLang, $page]) => {
    const $location = $page.url.pathname;
    const pageName = getPageFromPath($location);

    // Get the SEO data for the current language and page
    // Default to home page if the page doesn't exist in the SEO data
    const pageSeo = seoData[$currentLang]?.[pageName] || seoData[$currentLang]?.home;

    // Extract the path without the language prefix for canonical and alternate URLs
    const pathWithoutLang = $location === `/${$currentLang}` ? '' : 
                           $location.startsWith(`/${$currentLang}/`) ? 
                           $location.substring($currentLang.length + 1) : 
                           $location;

    return {
      ...pageSeo,
      lang: $currentLang,
      canonicalUrl: `https://ctc.cy/${$currentLang}${pathWithoutLang}`,
      alternateUrls: languages.map(lang => ({
        lang,
        url: `https://ctc.cy/${lang}${pathWithoutLang}`
      }))
    };
  }
);
