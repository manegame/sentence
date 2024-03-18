import { writable } from "svelte/store"

export enum UI {
  LOADING,
  SPAWNING,
  READY
}

export const UIState = writable(UI.LOADING)
