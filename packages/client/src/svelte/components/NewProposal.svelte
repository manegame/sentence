<script lang="ts">
  import TextInput from "./TextInput.svelte"
  import { WorldFunctions } from "../modules/action"
  import {
    TransactionState,
    makeAction,
  } from "../modules/action/actionSequencer/utils"

  export let parentKey: string
  export let value = "..."

  const [transactionState, propose] = makeAction(WorldFunctions.Propose)

  const makeProposal = async () => {
    try {
      propose([parentKey, value])
    } catch (error) {
      console.error(error)
    }
  }
</script>

<div class="wrapper">
  <div class="new-proposal">
    <div class="">
      <small class="byline"> Propose the next sentence </small>
      <TextInput contenteditable bind:value />
    </div>

    {#if $transactionState === TransactionState.READY}
      <button on:click={makeProposal} class="propose" />
    {/if}
  </div>
</div>

<style>
  .wrapper {
    display: flex;
    gap: 1rem;
    align-items: center;
  }
  .new-proposal {
    display: flex;
    /* flex-flow: column nowrap; */
    gap: 1rem;
  }

  .text-input {
    padding: 2rem 1rem;
    width: var(--proposal-width);
    border: 2px solid var(--grey-2);
  }
</style>
