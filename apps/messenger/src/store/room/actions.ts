import { ContextStore } from "..";
import { RoomMessage } from "./state";

export const toggleConversationInformation = ({ state }: ContextStore) => {
  state.room.showConversationInformation =
    !state.room.showConversationInformation;
};

export const updateRoomMessages = async (
  { state, effects }: ContextStore,
  profileId: string
) => {
  if (profileId === undefined) return;

  const { messages, profile, theme } = await effects.api.getFullRom(profileId);
  state.room.profile = profile;
  state.room.theme = theme;
  state.room.messages = messages;
};

export type CreateMessageProps = {
  message?: string;
  contentType: string;
};

export const createMessage = (
  { state }: ContextStore,
  newMessage: CreateMessageProps
) => {
  state.room.messages.push(newMessage as any as RoomMessage);
};
