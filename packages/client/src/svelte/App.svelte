<script lang="ts">
  import { onMount } from "svelte"
  import { setup } from "../mud/setup"
  import {
    createComponentSystem,
    createSyncProgressSystem,
  } from "./modules/systems"
  import { network, initBlockListener } from "./modules/network"
  import { initActionSequencer } from "./modules/action/actionSequencer"
  import { initSound } from "./modules/sound"
  import { UIState, UI } from "./modules/ui/stores"
  import { localPlayer } from "./modules/state"

  import Loading from "./components/Loading.svelte"
  import Spawn from "./components/Spawn.svelte"
  import Game from "./components/Game.svelte"

  import Toasts from "./modules/ui/toast/Toasts.svelte"

  onMount(async () => {
    // Write mud layer to svelte store
    const mudLayer = await setup()
    network.set(mudLayer)

    // Module responsible for sending transactions
    initActionSequencer()

    // Write block numbers to svelte store and alert on lost connection
    initBlockListener()

    // Create systems to listen to changes to components in our namespace
    for (const componentKey of Object.keys($network.components)) {
      createComponentSystem(componentKey)
    }

    // Listen to changes to the SyncProgresscomponent
    createSyncProgressSystem()

    // Preload sounds
    initSound()
  })

  const loaded = () => {
    if ($localPlayer) {
      UIState.set(UI.READY)
    } else {
      UIState.set(UI.SPAWNING)
    }
  }

  const spawned = () => {
    UIState.set(UI.READY)
  }
</script>

{#if $UIState === UI.LOADING}
  <Loading on:done={loaded} />
{/if}

{#if $UIState === UI.SPAWNING}
  <Spawn on:done={spawned} />
{/if}

{#if $UIState === UI.READY}
  <Game />
{/if}

<Toasts />
