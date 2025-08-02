<script>
  import { page } from '$app/stores';
  import ForKids from '../../../../pages/directions/ForKids.svelte';
  import { currentLang } from '../../../../stores/languageStore';
  
  // Set the current language from the URL parameter
  $: {
    if ($page.params.lang) {
      // This is handled in the +layout.svelte file
    }
  }
</script>

<ForKids />