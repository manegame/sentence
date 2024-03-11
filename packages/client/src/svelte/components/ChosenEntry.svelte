<script lang="ts">
  import TextInput from "./TextInput.svelte"
  import type { ProposedEntry } from "../modules/state/types"
  export let address: string
  export let entry: ProposedEntry
  console.log(entry)
</script>

<div class="entry">
  <TextInput value={entry.entry.sentence} />
</div>

<style>
  .entry {
    display: flex;
    flex-flow: column nowrap;
  }
</style>
