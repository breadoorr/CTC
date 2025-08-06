<!-- src/routes/+page.svelte -->
<script>
  import { currentLang, t } from '../stores/languageStore';
  import { createEventDispatcher } from 'svelte';

  export let formTitle = $t('leaveRequest');
  export let buttonText = $t('submit');
  export let isModal = false;

  let isSubmitting = false;
  let errorMessage = '';
  let success = false;

  async function handleSubmit(event) {
    event.preventDefault();
    isSubmitting = true;
    errorMessage = '';
    success = false;

    try {
      const formData = new FormData(event.target);
      const response = await fetch('/api/sheets', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Failed to submit to Google Sheets');
      }

      success = true;
    } catch (error) {
      errorMessage = error.message;
    } finally {
      isSubmitting = false;
    }
  }

  function closeModal() {
    if (isModal) {
      dispatch('close');
    }
  }

  const dispatch = createEventDispatcher();
</script>

<div class="contact-form {isModal ? 'modal' : ''}">
  {#if isModal}
    <button class="close-btn" on:click={closeModal}>&times;</button>
  {/if}

  <h3>{formTitle}</h3>

  {#if success}
    <div class="success-message">
      <p>{$t('thankYou')}</p>
    </div>
  {:else}
    <form on:submit={handleSubmit}>
      {#if errorMessage}
        <div class="error-message">
          <p>{errorMessage}</p>
        </div>
      {/if}

      <div class="form-group">
        <input
                type="text"
                id="name"
                name="name"
                class="form-control"
                placeholder={$t('yourName')}
                required
        />
      </div>

      <div class="form-group">
        <input
                type="tel"
                id="phone"
                name="phone"
                class="form-control"
                placeholder={$t('yourPhone')}
                required
        />
      </div>

      <div class="form-group">
        <textarea
                id="message"
                name="message"
                class="form-control"
                placeholder={$t('message')}
                rows="4"
        ></textarea>
      </div>

      <button type="submit" class="btn" disabled={isSubmitting}>
        {isSubmitting ? $t('sending') : buttonText}
      </button>
    </form>
  {/if}
</div>

<style>
  .contact-form {
    background-color: var(--white);
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .contact-form.modal {
    position: relative;
    max-width: 500px;
    margin: 0 auto;
  }

  .close-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--text-color);
  }

  h3 {
    margin-bottom: 1.5rem;
    text-align: center;
  }

  .success-message {
    text-align: center;
    color: var(--primary-color);
    padding: 1rem;
    border: 1px solid var(--primary-color);
    border-radius: 4px;
    background-color: rgba(74, 103, 65, 0.1);
  }

  .error-message {
    color: #d32f2f;
    padding: 0.5rem;
    margin-bottom: 1rem;
    border: 1px solid #d32f2f;
    border-radius: 4px;
    background-color: rgba(211, 47, 47, 0.1);
  }

  .btn {
    width: 100%;
  }
</style>