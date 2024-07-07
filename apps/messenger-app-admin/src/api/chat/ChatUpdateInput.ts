import { MessageUpdateManyWithoutChatsInput } from "./MessageUpdateManyWithoutChatsInput";

export type ChatUpdateInput = {
  isGroup?: boolean | null;
  chatName?: string | null;
  messages?: MessageUpdateManyWithoutChatsInput;
};
