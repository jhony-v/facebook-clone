export interface Profile {
  id: string
  username: string
  fullName: string
  avatar: string
  lastActive?: string
  online?: boolean
  lastConnected?: string
}

export interface ChatMessage {
  type?: string
  message?: string
  status?: string
  sentDate?: string
  id?: string
  profile: Profile
  date: string
  own: boolean
  isReplied?: boolean
  reactions: Array<{
    icon: string
    total: number
  }>
}

export interface ChatTheme {}

export interface LoginPayload {
  username?: string
  password?: string
  token?: string
}
export interface AuthenticationSession {
  token: string
  profile: Profile
}
