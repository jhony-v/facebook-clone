import { createOvermind, IContext } from "overmind"
import {
  createActionsHook,
  createEffectsHook,
  createReactionHook,
  createStateHook,
} from "overmind-react"
import { merge, namespaced } from "overmind/config"
import * as profile from "./profile"
import * as room from "./room"
import * as actions from "./actions"
import * as effects from "./effects"
import state from "./state"

const configuration = merge(
  {
    state,
    actions,
    effects,
  },
  namespaced({
    profile,
    room,
  })
)

export type ContextStore = IContext<{
  state: typeof configuration.state
  actions: typeof configuration.actions
  effects: typeof configuration.effects
}>

export const useAppStateStore = createStateHook<ContextStore>()
export const useActionsStore = createActionsHook<ContextStore>()
export const useEffectsStore = createEffectsHook<ContextStore>()
export const useReactionStore = createReactionHook<ContextStore>()

export const overmindStore = createOvermind(configuration)
