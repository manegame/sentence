<script lang="ts">
  import { WorldFunctions } from "../modules/action"
  import { localPlayerAddress } from "../modules/state"
  import {
    TransactionState,
    makeAction,
  } from "../modules/action/actionSequencer/utils"
  export let address: string
  export let entry

  const [transactionState, vote] = makeAction(WorldFunctions.Vote)
</script>

{#if !entry.votes.includes($localPlayerAddress)}
  <button
    class="cast"
    disabled={entry.votes.includes($localPlayerAddress)}
    on:click={() => vote([address])}
  >
    <small class="votes">
      {#if $transactionState === TransactionState.READY}
        Votes: {entry.votes.length} +
      {:else}
        Casting vote
      {/if}
    </small>
  </button>
{:else}
  {entry.votes.length}
{/if}

<style>
  button {
    background: unset;
  }

  .votes {
    display: inline-block;
    padding-left: 0.5rem;
  }
  .cast {
    color: var(--grey-2);
    font-size: 1rem;
    line-height: 1rem;
    padding: 0;
    margin: 0;
    border: none;
    cursor: pointer;
  }
</style>
