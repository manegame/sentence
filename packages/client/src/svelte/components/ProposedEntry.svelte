<script lang="ts">
  import type { Player } from "../modules/state/types"
  import type { ProposedEntry as ProposedEntryType } from "../modules/state/types"

  import { ethers } from "ethers"
  import { players, entities } from "../modules/state"

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
  {#if proposer?.name}
    <small class="byline"
      >Proposed at block nr. {entry?.proposedOnBlock} by {proposer?.name}</small
    >
  {/if}
  <TextInput value={entry?.sentence} />

  <!-- Vote controls -->
  <EntryVoteControls {address} {entry} />
</div>

<style>
  .entry {
    display: flex;
    flex-flow: column nowrap;
  }
</style>
