import { ChatMessage } from "../types/models";

export type UniversalState = {
  sidebarOpened : boolean,
  chatMessages: ChatMessage[]
}

const state: UniversalState = {
    sidebarOpened: true,
    chatMessages: []
}

export default state;