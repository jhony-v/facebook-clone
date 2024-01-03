import {
  getChats,
  getInitialDataFullRoom,
  getMe,
  logIn,
} from "../../core/services/api"
import { LoginPayload } from "../../types/models"

const api = {
  getChatMessages() {
    return getChats()
  },
  getFullRom(profileId: string) {
    return getInitialDataFullRoom(profileId)
  },
  logIn(payload: LoginPayload) {
    return logIn(payload)
  },
  getMe() {
    return getMe()
  },
}

export default api
