<script lang="ts">
  import { archive } from "../modules/state"
  import url from "../url"
  import Story from "../components/Story.svelte"
</script>

<div class="drawer" class:open={$url.hash === "#archive"}>
  {#each Object.entries($archive) as [address, story]}
    <Story archive {address} {story} />
  {/each}
</div>

<style>
  .drawer {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    overflow-y: scroll;
    padding-right: 10rem;
    padding-bottom: 5rem;
    transform: translate(-100%, 0);
    z-index: 999999;
    background: white;
    transition: transform 0.2s ease;
    background-color: var(--grey-1);
  }

  .drawer.open {
    transform: translate(0, 0);
  }
</style>
