import { MessageCreateNestedManyWithoutChatsInput } from "./MessageCreateNestedManyWithoutChatsInput";

export type ChatCreateInput = {
  isGroup?: boolean | null;
  chatName?: string | null;
  messages?: MessageCreateNestedManyWithoutChatsInput;
};
