import { derived } from "overmind"
import { Profile } from "../../types/models"

export type ProfileState = {
  me: Partial<Profile>
  authenticated: boolean
  loadingAuthentication: boolean
  token: string
  firstName: string
}

const state: ProfileState = {
  me: {},
  authenticated: false,
  loadingAuthentication: true,
  token: null,
  firstName: derived((state: ProfileState) => {
    return (state.me.fullName?.split?.(" ") || "")[0] || ""
  }),
}

export default state
