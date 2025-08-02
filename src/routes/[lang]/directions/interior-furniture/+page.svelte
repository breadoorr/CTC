<script>
  import { page } from '$app/stores';
  import InteriorFurniture from '../../../../pages/directions/InteriorFurniture.svelte';
  import { currentLang } from '../../../../stores/languageStore';
  
  // Set the current language from the URL parameter
  $: {
    if ($page.params.lang) {
      // This is handled in the +layout.svelte file
    }
  }
</script>

<InteriorFurniture />