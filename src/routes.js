import Home from './pages/Home.svelte';
import About from './pages/About.svelte';
import Directions from './pages/Directions.svelte';
import Services from './pages/Services.svelte';
import Gallery from './pages/Gallery.svelte';
import Blog from './pages/Blog.svelte';
import Contact from './pages/Contact.svelte';

// Import direction pages
import OutdoorFurniture from './pages/directions/OutdoorFurniture.svelte';
import InteriorFurniture from './pages/directions/InteriorFurniture.svelte';
import ArchitecturalForms from './pages/directions/ArchitecturalForms.svelte';
import PrivateHomes from './pages/directions/PrivateHomes.svelte';
import Restoration from './pages/directions/Restoration.svelte';
import ForKids from './pages/directions/ForKids.svelte';

import { replace } from 'svelte-spa-router';
import { getPreferredLanguage } from './stores/languageStore';

// Define available languages
const languages = ['en', 'ru'];
const defaultLanguage = 'en';

// Helper function to create language-specific routes
function createLanguageRoutes(component) {
  const routes = {};
  languages.forEach(lang => {
    routes[`/${lang}`] = component;
  });
  return routes;
}

// Define routes
export const routes = {
  // Root redirect to preferred language
  '/': () => {
    const lang = getPreferredLanguage() || defaultLanguage;
    replace(`/${lang}`);
    return Home;
  },

  // Language-specific home pages
  ...createLanguageRoutes(Home),

  // Language-specific about pages
  ...languages.reduce((acc, lang) => {
    acc[`/${lang}/about`] = About;
    return acc;
  }, {}),

  // Language-specific directions pages
  ...languages.reduce((acc, lang) => {
    acc[`/${lang}/directions`] = Directions;
    return acc;
  }, {}),

  // Language-specific services pages
  ...languages.reduce((acc, lang) => {
    acc[`/${lang}/services`] = Services;
    return acc;
  }, {}),

  // Language-specific gallery pages
  ...languages.reduce((acc, lang) => {
    acc[`/${lang}/gallery`] = Gallery;
    return acc;
  }, {}),

  // Language-specific blog pages
  ...languages.reduce((acc, lang) => {
    acc[`/${lang}/blog`] = Blog;
    return acc;
  }, {}),

  // Language-specific contact pages
  ...languages.reduce((acc, lang) => {
    acc[`/${lang}/contact`] = Contact;
    return acc;
  }, {}),

  // Language-specific direction pages
  ...languages.reduce((acc, lang) => {
    acc[`/${lang}/directions/street-furniture`] = OutdoorFurniture;
    acc[`/${lang}/directions/interior-furniture`] = InteriorFurniture;
    acc[`/${lang}/directions/architectural-forms`] = ArchitecturalForms;
    acc[`/${lang}/directions/private-houses`] = PrivateHomes;
    acc[`/${lang}/directions/restoration`] = Restoration;
    acc[`/${lang}/directions/for-kids`] = ForKids;
    return acc;
  }, {}),

  // Redirect old routes to language-specific routes
  '/about': () => {
    const lang = getPreferredLanguage() || defaultLanguage;
    replace(`/${lang}/about`);
    return About;
  },
  '/directions': () => {
    const lang = getPreferredLanguage() || defaultLanguage;
    replace(`/${lang}/directions`);
    return Directions;
  },
  '/services': () => {
    const lang = getPreferredLanguage() || defaultLanguage;
    replace(`/${lang}/services`);
    return Services;
  },
  '/gallery': () => {
    const lang = getPreferredLanguage() || defaultLanguage;
    replace(`/${lang}/gallery`);
    return Gallery;
  },
  '/blog': () => {
    const lang = getPreferredLanguage() || defaultLanguage;
    replace(`/${lang}/blog`);
    return Blog;
  },
  '/contact': () => {
    const lang = getPreferredLanguage() || defaultLanguage;
    replace(`/${lang}/contact`);
    return Contact;
  },

  // Redirect direction routes
  '/directions/street-furniture': () => {
    const lang = getPreferredLanguage() || defaultLanguage;
    replace(`/${lang}/directions/street-furniture`);
    return OutdoorFurniture;
  },
  '/directions/interior-furniture': () => {
    const lang = getPreferredLanguage() || defaultLanguage;
    replace(`/${lang}/directions/interior-furniture`);
    return InteriorFurniture;
  },
  '/directions/architectural-forms': () => {
    const lang = getPreferredLanguage() || defaultLanguage;
    replace(`/${lang}/directions/architectural-forms`);
    return ArchitecturalForms;
  },
  '/directions/private-houses': () => {
    const lang = getPreferredLanguage() || defaultLanguage;
    replace(`/${lang}/directions/private-houses`);
    return PrivateHomes;
  },
  '/directions/restoration': () => {
    const lang = getPreferredLanguage() || defaultLanguage;
    replace(`/${lang}/directions/restoration`);
    return Restoration;
  },
  '/directions/for-kids': () => {
    const lang = getPreferredLanguage() || defaultLanguage;
    replace(`/${lang}/directions/for-kids`);
    return ForKids;
  },

  // Catch-all route - redirect to home page in preferred language
  '*': () => {
    const lang = getPreferredLanguage() || defaultLanguage;
    replace(`/${lang}`);
    return Home;
  }
};
