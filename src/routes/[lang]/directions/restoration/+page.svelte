<script>
  import { page } from '$app/stores';
  import Restoration from '../../../../pages/directions/Restoration.svelte';
  import { currentLang } from '../../../../stores/languageStore';
  
  // Set the current language from the URL parameter
  $: {
    if ($page.params.lang) {
      // This is handled in the +layout.svelte file
    }
  }
</script>

<Restoration />