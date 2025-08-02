<script lang="ts">
  import { page } from '$app/stores';
  import { languages, currentLang } from '../../stores/languageStore';
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';

  // Get the language parameter from the URL
  $: lang = $page.params.lang;

  // Function to set the language without navigation (adapted from languageStore.js)
  function setLanguage(lang) {
    if (languages.includes(lang)) {
      // Update the language store
      currentLang.set(lang);

      // Save to localStorage for persistence
      if (typeof window !== 'undefined') {
        localStorage.setItem('language', lang);
      }
    } else {
      console.error(`Language ${lang} is not supported`);
    }
  }

  onMount(() => {
    // Validate the language parameter
    if (!languages.includes(lang)) {
      // If the language is not supported, redirect to the default language (en)
      goto('/en');
    } else {
      // Set the language in the store
      setLanguage(lang);
    }
  });
</script>

<slot />