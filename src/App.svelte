<script lang="ts">
  import Router from 'svelte-spa-router';
  import { routes } from './routes';
  import Header from './components/Header.svelte';
  import Footer from './components/Footer.svelte';
  import SEO from './components/SEO.svelte';
  import { initLanguage } from './stores/languageStore';
  import { onMount } from 'svelte';
  import { location } from 'svelte-spa-router';

  // Subscribe to route changes and scroll to top
  $: if ($location) {
    window.scrollTo(0, 0);
  }

  onMount(() => {
    // Initialize language from localStorage if available
    initLanguage();
  });
</script>

<SEO />

<div class="app">
  <Header />

  <main>
    <Router {routes} />
  </main>

  <Footer />
</div>

<style>
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    flex: 1;
    padding-top: var(--header-height);
  }
</style>
