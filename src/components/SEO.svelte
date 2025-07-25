<script>
  import { onMount, onDestroy } from 'svelte';
  import { seo } from '../stores/seoStore';
  
  let head;
  let titleElement;
  let metaDescription;
  let metaKeywords;
  let metaLanguage;
  let ogTitle;
  let ogDescription;
  let ogImage;
  let ogUrl;
  let canonicalLink;
  let alternateLinks = [];
  
  // Subscribe to the SEO store
  const unsubscribe = seo.subscribe(seoData => {
    if (typeof document !== 'undefined') {
      updateHead(seoData);
    }
  });
  
  // Update the document head with the SEO data
  function updateHead(seoData) {
    // Update the title
    if (!titleElement) {
      titleElement = document.querySelector('title');
      if (!titleElement) {
        titleElement = document.createElement('title');
        document.head.appendChild(titleElement);
      }
    }
    titleElement.textContent = seoData.title;
    
    // Update the meta description
    if (!metaDescription) {
      metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
    }
    metaDescription.setAttribute('content', seoData.description);
    
    // Update the meta keywords
    if (!metaKeywords) {
      metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
    }
    metaKeywords.setAttribute('content', seoData.keywords);
    
    // Update the language
    if (!metaLanguage) {
      metaLanguage = document.querySelector('meta[name="language"]');
      if (!metaLanguage) {
        metaLanguage = document.createElement('meta');
        metaLanguage.setAttribute('name', 'language');
        document.head.appendChild(metaLanguage);
      }
    }
    metaLanguage.setAttribute('content', seoData.lang);
    
    // Update the html lang attribute
    document.documentElement.setAttribute('lang', seoData.lang);
    
    // Update Open Graph tags
    if (!ogTitle) {
      ogTitle = document.querySelector('meta[property="og:title"]');
      if (!ogTitle) {
        ogTitle = document.createElement('meta');
        ogTitle.setAttribute('property', 'og:title');
        document.head.appendChild(ogTitle);
      }
    }
    ogTitle.setAttribute('content', seoData.ogTitle || seoData.title);
    
    if (!ogDescription) {
      ogDescription = document.querySelector('meta[property="og:description"]');
      if (!ogDescription) {
        ogDescription = document.createElement('meta');
        ogDescription.setAttribute('property', 'og:description');
        document.head.appendChild(ogDescription);
      }
    }
    ogDescription.setAttribute('content', seoData.ogDescription || seoData.description);
    
    if (!ogImage) {
      ogImage = document.querySelector('meta[property="og:image"]');
      if (!ogImage) {
        ogImage = document.createElement('meta');
        ogImage.setAttribute('property', 'og:image');
        document.head.appendChild(ogImage);
      }
    }
    ogImage.setAttribute('content', `https://ctc.cy${seoData.ogImage}`);
    
    if (!ogUrl) {
      ogUrl = document.querySelector('meta[property="og:url"]');
      if (!ogUrl) {
        ogUrl = document.createElement('meta');
        ogUrl.setAttribute('property', 'og:url');
        document.head.appendChild(ogUrl);
      }
    }
    ogUrl.setAttribute('content', seoData.canonicalUrl);
    
    // Update canonical link
    if (!canonicalLink) {
      canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
    }
    canonicalLink.setAttribute('href', seoData.canonicalUrl);
    
    // Update alternate language links
    // First, remove any existing alternate links
    const existingAlternateLinks = document.querySelectorAll('link[rel="alternate"][hreflang]');
    existingAlternateLinks.forEach(link => {
      document.head.removeChild(link);
    });
    
    // Then add new alternate links
    alternateLinks = seoData.alternateUrls.map(alt => {
      const link = document.createElement('link');
      link.setAttribute('rel', 'alternate');
      link.setAttribute('hreflang', alt.lang);
      link.setAttribute('href', alt.url);
      document.head.appendChild(link);
      return link;
    });
  }
  
  onDestroy(() => {
    unsubscribe();
  });
</script>

<!-- This component doesn't render anything visible -->