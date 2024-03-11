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

{#if $transactionState === TransactionState.READY}
  <button
    disabled={entry.votes.includes($localPlayerAddress)}
    type="button"
    on:click={() => vote([address])}
  >
    {entry.votes.length}
  </button>
{:else}
  <small> Casting vote </small>
{/if}
