<script>
  import { currentLang, t } from '../stores/languageStore';
  import { createEventDispatcher } from 'svelte';

  export let formTitle = $t('leaveRequest');
  export let buttonText = $t('submit');
  export let isModal = false;

  let name = "";
  let phone = "";
  let message = "";
  let isSubmitting = false;
  let isSuccess = false;
  let errorMessage = "";

  function handleSubmit() {
    isSubmitting = true;
    errorMessage = "";

    // Validate form
    if (!name.trim()) {
      errorMessage = $t('pleaseEnterName');
      isSubmitting = false;
      return;
    }

    if (!phone.trim()) {
      errorMessage = $t('pleaseEnterPhone');
      isSubmitting = false;
      return;
    }

    // Simulate form submission
    setTimeout(() => {
      isSubmitting = false;
      isSuccess = true;

      // Reset form after 3 seconds
      setTimeout(() => {
        name = "";
        phone = "";
        message = "";
        isSuccess = false;
      }, 3000);
    }, 1000);
  }

  function closeModal() {
    if (isModal) {
      // Dispatch event to parent component to close modal
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

  {#if isSuccess}
    <div class="success-message">
      <p>{$t('thankYou')}</p>
    </div>
  {:else}
    <form on:submit|preventDefault={handleSubmit}>
      {#if errorMessage}
        <div class="error-message">
          <p>{errorMessage}</p>
        </div>
      {/if}

      <div class="form-group">
        <input 
          type="text" 
          id="name" 
          class="form-control" 
          placeholder={$t('yourName')} 
          bind:value={name}
          required
        />
      </div>

      <div class="form-group">
        <input 
          type="tel" 
          id="phone" 
          class="form-control" 
          placeholder={$t('yourPhone')} 
          bind:value={phone}
          required
        />
      </div>

      <div class="form-group">
        <textarea 
          id="message" 
          class="form-control" 
          placeholder={$t('message')} 
          bind:value={message}
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
