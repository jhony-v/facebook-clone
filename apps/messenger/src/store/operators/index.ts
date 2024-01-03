import { ContextStore } from ".."
import { AuthenticationSession, LoginPayload } from "../../types/models"

export const loadingProfileAuthentication = (
  { state }: ContextStore,
  payload?: Omit<LoginPayload, "token">
) => {
  state.profile.loadingAuthentication = true
  return payload
}

export const setProfileAuthenticated = (
  { state }: ContextStore,
  { token, profile }: AuthenticationSession
) => {
  state.profile.loadingAuthentication = false
  state.profile.authenticated = true
  state.profile.me = profile
  state.profile.token = token
}
