<script lang="ts">
  import { removeLeadingZeros, players } from "../modules/state"
  import type { ProposedEntry } from "../modules/state/types"
  export let address: string
  export let entry: ProposedEntry

  $: proposer = removeLeadingZeros(entry.entry.proposer).toLowerCase()
</script>

<div class="entry-wrapper">
  <div class="entry-inner">
    <div class="entry">
      {entry.entry.sentence}{@html entry.entry.sentence.endsWith(".")
        ? " "
        : ".&nbsp;"}<slot/>
    </div>
    <small class="muted"
      >↳{$players?.[proposer]?.name || "unknown"} at {entry.entry
        .proposedOnBlock}</small
    >
  </div>
</div>

<style>
  .entry-inner {
    display: flex;
    flex-flow: column nowrap;
  }

  .entry-wrapper,
  .entry {
    display: inline-block;
  }

  .muted {
    color: var(--grey-2);
  }
</style>
