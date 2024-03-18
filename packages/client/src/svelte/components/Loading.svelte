<script lang="ts">
  import { createEventDispatcher } from "svelte"
  import { ready, loadingMessage } from "../modules/network"

  const dispatch = createEventDispatcher()

  // Finished when chain is ready
  $: if ($ready) {
    dispatch("done")
  }
</script>

<div class="loading">
  <div class="loading-message">
    {$loadingMessage}
  </div>
</div>

<style lang="scss">
  .loading {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    margin: 0;
    padding: 0;
  }
</style>
