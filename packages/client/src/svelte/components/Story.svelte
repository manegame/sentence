<script lang="ts">
  import { chosenEntries, proposedEntries } from "../modules/state"
  import { blockNumber } from "../modules/network"

  import ChosenEntry from "./ChosenEntry.svelte"
  import ProposedEntry from "./ProposedEntry.svelte"
  import NewProposal from "./NewProposal.svelte"

  export let address: string
  export let story: Story

  const onlyThisStory = ([_, entry]) => entry

  $: preceding = Object.entries($chosenEntries).filter(onlyThisStory)
  $: proposals = Object.entries($proposedEntries).filter(onlyThisStory)
</script>

{#each preceding as [entryAddress, entry], i (i)}
  <ChosenEntry address={entryAddress} {entry} />
{/each}

<div class="proposals-container">
  {#each proposals as [proposalAddress, entry], i (i)}
    <ProposedEntry address={proposalAddress} entry={entry.proposedEntry} />
  {/each}
  {#if $blockNumber < Number(story.story.periodEndsBlock)}
    <NewProposal parentKey={address} />
  {/if}
</div>

<style>
  .proposals-container {
    display: flex;
    flex-flow: row nowrap;
    justify-content: start;
    align-items: start;
    gap: 1rem;
    padding: 0 1rem;
    overflow-x: scroll;
    position: fixed;
    top: 50%;
    transform: translate(0, -75px);
    width: 100vw;
  }

  small {
    padding: 0.5rem 1rem;
  }
</style>
