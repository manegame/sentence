<script lang="ts">
  export let value = "..."
  export let contenteditable = false

  const onFocus = () => {
    if (value === "...") value = ""
  }
  const onBlur = () => {
    if (value === "") value = "..."
  }
</script>

{#if contenteditable}
  <div
    class="text-input"
    on:focus={onFocus}
    on:blur={onBlur}
    bind:textContent={value}
    contenteditable
    id="proposal"
  >
    {value}
  </div>
{:else}
  <div class="text-input" class:proposed={!contenteditable}>
    {value}
  </div>
{/if}

<style>
  .text-input {
    padding: 2rem 1rem;
    width: var(--proposal-width);
    border: 2px solid var(--grey-2);
  }

  .proposed {
    background: var(--grey-2);
  }
</style>
