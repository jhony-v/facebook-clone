import { ContextStore } from "."

export const toggleSidebar = ({ state, effects } : ContextStore) => {
   state.sidebarOpened = !state.sidebarOpened
   effects.sidebarStorage.update(state.sidebarOpened) 
}

export const getChatMessages = async ({ state, effects }: ContextStore) => {
    state.chatMessages = await effects.api.getChatMessages()
}

export const onInitializeOvermind = ({ state, actions, effects }: ContextStore,) => {
    state.sidebarOpened = effects.sidebarStorage.get()
    actions.getChatMessages()
}