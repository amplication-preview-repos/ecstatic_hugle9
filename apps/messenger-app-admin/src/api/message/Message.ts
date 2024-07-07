import { Chat } from "../chat/Chat";

export type Message = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  content: string | null;
  timestamp: Date | null;
  sender: string | null;
  chat?: Chat | null;
};
