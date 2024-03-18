<script lang="ts">
  import { votingEnds, latestStory } from "../modules/state"
  import { blockNumber } from "../modules/network"
  import { WorldFunctions } from "../modules/action"
  import {
    TransactionState,
    makeAction,
  } from "../modules/action/actionSequencer/utils"
  import url from "../url"

  import Story from "../components/Story.svelte"

  const [createStoryState, createStory] = makeAction(WorldFunctions.CreateStory)
  const [countVotesState, countVotes] = makeAction(WorldFunctions.CountVotes)
</script>

<div class="game">
  <!-- Top -->
  <div class="current">
    <p class="square">
      {$blockNumber}
    </p>
    <p class="textje">Current</p>
  </div>

  <div class="next">
    {#if $latestStory && $blockNumber < Number($latestStory[1].story.periodEndsBlock) && Number($latestStory[1].story.periodEndsBlock) > -1}
      <p class="textje">Next</p>
      <div class="square">
        <p class="square">
          {Math.abs(
            $blockNumber - Number($latestStory[1].story.periodEndsBlock)
          )}
        </p>
      </div>
    {:else if $latestStory && $blockNumber < $votingEnds}
      <p class="textje">Vote</p>
      <div class="square">
        <div class="square">
          {Math.abs($blockNumber - $votingEnds)}
        </div>
      </div>
    {:else if $latestStory}
      <p class="textje">Count</p>
      <div class="square">
        <div class="square">
          {#if $countVotesState === TransactionState.READY}
            <button class="count" on:click={() => countVotes([$latestStory[0]])}
            ></button>
          {:else}
            <div class="thinkin">...</div>
          {/if}
        </div>
      </div>
    {:else if !$latestStory}
      <p class="textje">Start</p>
      <div class="square">
        <div class="square">
          {#if $createStoryState === TransactionState.READY}
            <button on:click={() => createStory()} class="propose" />
          {:else}
            <div class="thinkin">...</div>
          {/if}
        </div>
      </div>
    {/if}
  </div>

  <!-- If there is no active story -->
  {#if $latestStory}
    {#key $latestStory[0]}
      <!-- List the active sentences of the latest story -->
      <Story address={$latestStory[0]} story={$latestStory[1]} />
    {/key}
  {/if}
</div>

<small class="link-archive">
  {#if $url.hash === "#archive"}
    <a href="#"> Close </a>
  {:else}
    <a href="#archive"> Archive </a>
  {/if}
</small>

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
    background: var(--grey-1);
    color: var(--grey-2);
  }

  .new,
  .next,
  .current,
  .link-archive {
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

  .link-archive {
    bottom: 0;
    left: 0;
    z-index: 99999999999;
  }

  .textje {
    color: var(--grey-2);
  }
</style>
