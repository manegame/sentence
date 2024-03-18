<script lang="ts">
  import { createEventDispatcher } from "svelte"
  import { toastMessage } from "../modules/ui/toast"
  import { spawn } from "../modules/action"
  import { playSound } from "../modules/sound"
  import TextInput from "../components/TextInput.svelte"
  import {
    waitForCompletion,
    TransactionState,
  } from "../modules/action/actionSequencer/utils"

  const dispatch = createEventDispatcher()

  let name = "name"
  let transactionState = TransactionState.READY

  const onSubmit = async () => {
    try {
      playSound("snd", "click")
      transactionState = TransactionState.INITIATED
      const action = spawn(name)
      transactionState = TransactionState.SENDING
      await waitForCompletion(action)
      transactionState = TransactionState.DONE
      playSound("snd", "success")
      await new Promise(resolve => setTimeout(resolve, 500))
      dispatch("done")
    } catch (error) {
      toastMessage(String(error), {
        type: "error",
        disappear: false,
      })
      transactionState = TransactionState.READY
    }
  }
</script>

<div class="spawn">
  {#if transactionState === TransactionState.READY}
    
  <TextInput placeholder="name" contenteditable bind:value={name} />
  <button on:click={onSubmit} class="propose"></button>
  {:else}
    <div>
      {TransactionState[transactionState]}
    </div>
  {/if}
</div>

<style>
  .spawn {
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

  form {
    display: block;
  }

  input {
    font-family: var(--font-family);
    font-size: var(--font-size);
    padding: 10px;
  }

  button {
    font-family: var(--font-family);
    font-size: var(--font-size);
    padding: 10px;
  }
</style>
