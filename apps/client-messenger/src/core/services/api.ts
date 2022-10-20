import { RoomMessage, RoomProfile, RoomTheme } from "../../store/room/state"
import { AuthenticationSession, ChatMessage, LoginPayload, Profile } from "../../types/models"

export async function getMe(): Promise<Profile> {
  await new Promise((f) => setTimeout(f, 3000))
  return {
    avatar: "https://cdn.pixabay.com/photo/2022/07/03/22/00/cat-7300029_960_720.jpg",
    fullName: "jhony vega",
    id: "12412940172",
    online: false,
    username: "jhony.v",
  }
}

export async function logIn(payload: LoginPayload): Promise<AuthenticationSession> {
  const token = String(Math.floor(Math.random() * 2000))
  localStorage.setItem("session", token)
  await new Promise((f) => setTimeout(f, 300))
  const profile = await getMe()
  return {
    token,
    profile,
  }
}

export async function getRoomProfile(profileId: string) {
  return {
    avatar: "https://cdn.pixabay.com/photo/2022/07/03/22/00/cat-7300029_960_720.jpg",
    fullName: "Mark Faker Zuckerberger",
    id: String(Math.floor(Math.random() * 10000)),
    online: true,
    username: "mark.suckaritas",
    lastConnected: "10 minutes ago",
  } as RoomProfile
}

export async function getChats() {
  return Array.from({ length: 40 }).map(() => {
    return {
      profile: {
        avatar: "https://cdn.pixabay.com/photo/2022/07/03/22/00/cat-7300029_960_720.jpg",
        fullName: "Mark Faker Zuckerberger",
        id: String(Math.floor(Math.random() * 10000)),
        online: [true, false][Math.floor(Math.random() * 2)],
        username: "mark.suckaritas",
      },
      id: String(Math.floor(Math.random() * 10000)),
      message: "Hello everybody, this is a message with a statement",
      status: "sent",
      sentDate: new Date().toISOString(),
    }
  }) as ChatMessage[]
}

export async function getRoomMessages(profileId: string) {
  return [] as RoomMessage[]
}

export async function getRoomTheme(profileId: string) {
  return {} as RoomTheme
}

export async function getInitialDataFullRoom(profileId: string) {
  const [profile, messages, theme] = await Promise.all([
    getRoomProfile(profileId),
    getRoomMessages(profileId),
    getRoomTheme(profileId),
  ])
  return {
    profile,
    messages,
    theme,
  }
}
