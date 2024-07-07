import { ChatWhereUniqueInput } from "../chat/ChatWhereUniqueInput";

export type MessageUpdateInput = {
  content?: string | null;
  timestamp?: Date | null;
  sender?: string | null;
  chat?: ChatWhereUniqueInput | null;
};
