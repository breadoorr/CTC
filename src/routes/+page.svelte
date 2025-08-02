<script lang="ts">
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { getPreferredLanguage } from '../stores/languageStore';

  onMount(() => {
    // Redirect to the preferred language route
    const lang = getPreferredLanguage();
    goto(`/${lang}`);
  });
</script>

<div>
  Redirecting...
</div>