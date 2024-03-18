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
      await propose([parentKey, value])
      value = "..."
    } catch (error) {
      console.error(error)
    } finally {
    }
  }
</script>

<div class="outer">
  <div class="wrapper">
    <div class="new-proposal">
      <div class="">
        <TextInput contenteditable bind:value />
      </div>

      {#if $transactionState === TransactionState.READY}
        <button on:click={makeProposal} class="propose propose-light" />
      {:else}
        <button class="propose propose-thinking" />
      {/if}
    </div>
  </div>
</div>

<style>
  .outer {
    display: flex;
    flex-flow: column nowrap;
  }
  .wrapper {
    display: flex;
    gap: 1rem;
    align-items: center;
  }
  .new-proposal {
    display: flex;
    gap: 1rem;
  }

  .text-input {
    padding: 2rem 1rem;
    width: var(--proposal-width);
    border: 2px solid var(--grey-2);
  }
</style>
