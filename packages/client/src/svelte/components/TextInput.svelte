<script lang="ts">
  export let placeholder = "..."
  export let value = placeholder
  export let contenteditable = false

  const onFocus = () => {
    if (value === placeholder) value = ""
  }
  const onBlur = () => {
    if (value === "") value = placeholder
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
    <div>{value}</div>
    <slot />
  </div>
{/if}

<style>
  .text-input {
    padding: 1.5rem;
    width: var(--proposal-width);
  }

  .text-input[contenteditable] {
    border: 4px solid var(--grey-1);
  }

  .proposed {
    background: var(--grey-1);
    padding: 1.5rem 1.5rem;
  }
</style>
