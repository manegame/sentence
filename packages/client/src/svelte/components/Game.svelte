<script lang="ts">
  import { stories, countdown } from "../modules/state"
  import { blockNumber } from "../modules/network"
  import { WorldFunctions } from "../modules/action"
  // import { TransactionState } from "../modules/action/action"
  import {
    TransactionState,
    makeAction,
  } from "../modules/action/actionSequencer/utils"
  import Story from "../components/Story.svelte"
  // import NewProposal from "./NewProposal.svelte"

  $: console.log($countdown)

  const [transactionState, createStory] = makeAction(WorldFunctions.CreateStory)
</script>

<div class="game">
  <div class="current">
    <p class="square">
      {$blockNumber}
    </p>
    <p>Current</p>
  </div>

  {#if $blockNumber < $countdown && $countdown > -1}
    <!-- When the proposed period not done -->
    <div class="next">
      <p>Next</p>
      <p class="square">
        {$blockNumber - $countdown}
      </p>
    </div>
  {:else if $transactionState === TransactionState.READY}
    <div class="next">
      <p>Start</p>
      <div class="square">
        <button on:click={() => createStory()} class="propose" />
      </div>
    </div>
  {:else}
    <div class="thinkin">...</div>
    <!-- Creating a story -->
  {/if}

  <!-- If there is no active story -->
  {#if Object.keys($stories).length !== 0}
    <!-- List the active sentences of the latest story -->
    {#each Object.entries($stories) as [address, story]}
      <Story {address} {story} />
    {/each}
  {/if}
  <!-- Otherwise -->

  <!-- <NewProposal /> -->
</div>

<style>
  .game {
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 1;
    /* display: flex; */
    background: white;
    color: black;
  }

  .square {
    width: 7rem;
    height: 7rem;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    text-transform: lowercase;
  }

  .new,
  .next,
  .current {
    position: fixed;
    margin: 1rem;
    text-transform: lowercase;
    text-align: center;
    display: flex;
    flex-flow: column nowrap;
    gap: 1rem;
  }

  .new {
    top: 0;
    left: 0;
  }

  .current {
    top: 0;
    right: 0;
  }

  .next {
    bottom: 0;
    right: 0;
  }

  .thinkin {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>
