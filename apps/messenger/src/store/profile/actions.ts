import { pipe } from "overmind"
import { ContextStore } from ".."
import { LoginPayload } from "../../types/models"
import { loadingProfileAuthentication, setProfileAuthenticated } from "../operators"

export const loginAsPreviousUser = pipe(
  loadingProfileAuthentication,
  ({ effects }: ContextStore) => {
    return effects.api.logIn({
      token: effects.token.get(),
    })
  },
  setProfileAuthenticated
)

export const logIn = pipe(({ effects }: ContextStore, payload: Omit<LoginPayload, "token">) => {
  return effects.api.logIn(payload)
}, setProfileAuthenticated)

export const getMe = async ({ state, effects }: ContextStore) => {
  state.profile.me = await effects.api.getMe()
}

export const authenticate = async ({ state, effects, actions }: ContextStore) => {
  const token = effects.token.get()
  if (token) {
    await actions.profile.getMe()
    state.profile.token = token
    state.profile.authenticated = true
    state.profile.loadingAuthentication = false
    return
  }
  state.profile.loadingAuthentication = false
}
