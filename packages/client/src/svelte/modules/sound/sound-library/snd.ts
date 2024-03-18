import type { SoundAssets } from "../types.js"

export const snd: SoundAssets = {
  success: {
    src: "./sounds/snd/TRX_yes-sfx_01b.mp3",
    volume: 1,
  },
  failure: {
    src: "./sounds/snd/TRX_no-sfx_01.mp3",
    volume: 1,
  },
  click: {
    src: "./sounds/snd/list_print-hit_01.mp3",
    volume: 1,
  },
  progress: {
    src: "./sounds/snd/selection_scroll-hit_03.mp3",
    volume: 0.5,
  }
}
