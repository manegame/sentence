<script lang="ts">
  import type { Player } from "../modules/state/types"
  import type { ProposedEntry as ProposedEntryType } from "../modules/state/types"

  import { ethers } from "ethers"
  import { blockNumber } from "../modules/network"
  import { players, votingStartsIn, votingEnds } from "../modules/state"

  import TextInput from "./TextInput.svelte"
  import EntryVoteControls from "./EntryVoteControls.svelte"

  export let address: string
  export let entry: ProposedEntryType

  let proposer: null | Player = null

  function removeLeadingZeros(address) {
    return "0x" + address.slice(2).replace(/^0+/, "")
  }

  const isSameAddress = (address1: string, address2: string) => {
    return (
      ethers.utils.getAddress(removeLeadingZeros(address1)) ===
      ethers.utils.getAddress(removeLeadingZeros(address2))
    )
  }

  $: Object.entries($players).forEach(player => {
    if (isSameAddress(player[0], entry?.proposer)) proposer = player[1]
  })
</script>

<div class="entry">
  <TextInput value={entry?.sentence}>
    {#if proposer?.name}
      <small class="byline">↳{proposer?.name} at {entry?.proposedOnBlock}</small
      >
    {/if}
    <small class="votes">
      {#if $votingStartsIn > 0}{:else if $votingEnds > $blockNumber}
        <!-- Vote controls -->
        <EntryVoteControls {address} {entry} />
      {:else}
        <span class="inner">
          Votes: {entry?.votes.length}
        </span>
      {/if}
    </small>
  </TextInput>
</div>

<style>
  .entry {
    display: flex;
    flex-flow: column nowrap;
  }

  .votes {
    background: var(--grey-1);
    padding: 0;
    color: var(--grey-2);
  }

  .inner {
    display: inline-block;
    padding-left: 0.5rem;
  }

  small {
    color: var(--grey-2);
  }
</style>
