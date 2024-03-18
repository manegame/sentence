<script lang="ts">
  import { chosenEntries, proposedEntries } from "../modules/state"
  import { blockNumber } from "../modules/network"

  import ChosenEntry from "./ChosenEntry.svelte"
  import ProposedEntry from "./ProposedEntry.svelte"
  import NewProposal from "./NewProposal.svelte"

  export let address: string
  export let story: Story
  export let archive = false

  const onlyThisStory = ([_, entry]) => {
    // Also filter for the current time period
    const ends = Number(story.story.periodEndsBlock)
    const proposed = Number(entry.proposedEntry.proposedOnBlock)

    return (
      entry.proposedEntry.parentKey === address &&
      $blockNumber > ends - 20 &&
      proposed > ends - 20
    )
  }

  const onlyThisParentStory = ([_, entry]) => {
    if (entry.parentStory) {
      return entry.parentStory.parentKey === address
    } else if (entry.entry?.parent) {
      return entry.entry.parent === address
    }

    return false
  }

  $: preceding = Object.entries($chosenEntries).filter(onlyThisParentStory)
  $: proposals = Object.entries($proposedEntries).filter(onlyThisStory).sort((a, b) => Number(b[1].proposedEntry.proposedOnBlock) - Number(a[1].proposedEntry.proposedOnBlock))
</script>

<div class="preceding-container">
  {#each preceding as [entryAddress, entry], i (i)}
    <!-- Make sure to sort by date? -->
    <ChosenEntry address={entryAddress} {entry} >
      {#if i === preceding.length - 1}
        <small class="meta"
          >* Sentence {archive ? "ended" : "started"} at {story.story.startedBlock}.
        </small>
      {/if}
    </ChosenEntry>
  {/each}
</div>

<div class="proposals-container">
  {#if $blockNumber < Number(story.story.periodEndsBlock)}
    <div class="byline">Propose the next sentence</div>
    <div class="proposals">
      <NewProposal parentKey={address} />
    </div>
  {/if}
  {#if !archive}
    {#each proposals as [proposalAddress, entry], i (i)}
      <ProposedEntry address={proposalAddress} entry={entry.proposedEntry} />
      {#if proposals.length === 0}
        No proposals
      {/if}
    {/each}
  {/if}
</div>

<style>
  .preceding-container {
    display: block;
    gap: 1rem;
    padding: 1rem 10rem 5rem 1rem;
  }

  .proposals-container {
    display: flex;
    flex-flow: row wrap;
    justify-content: start;
    align-items: start;
    gap: 1rem;
    padding: 0 1rem;
    overflow-x: scroll;
    /* position: fixed; */
    /* top: 50%; */
    /* transform: translate(0, -75px); */
    width: 100vw;
  }

  .proposals {
    display: flex;
    flex-flow: column nowrap;
  }

  small {
    white-space: nowrap;
    color: var(--grey-2);
  }

  small:not(.meta) {
    padding: 0.5rem 1rem;
  }

  .byline {
    width: 100%;
    color: var(--grey-2);
  }
</style>
