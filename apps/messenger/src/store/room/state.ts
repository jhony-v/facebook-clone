import { derived } from "overmind";
import { ChatMessage, Profile, ChatTheme } from "../../types/models";

export interface RoomProfile extends Profile {}

export interface RoomMessage extends ChatMessage {}

export interface RoomTheme extends ChatTheme {}

export type RoomState = {
  profile?: RoomProfile;
  messages: RoomMessage[];
  theme: Partial<RoomTheme>;
  showConversationInformation: boolean;
  existsProfile: boolean;
  typing: boolean;
};

const state: RoomState = {
  profile: null,
  messages: [],
  theme: {},
  typing: false,
  showConversationInformation: true,
  existsProfile: derived((state: RoomState) => state.profile !== null),
};

export default state;
