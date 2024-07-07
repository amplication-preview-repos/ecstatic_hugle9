import { Message } from "../message/Message";

export type Chat = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  isGroup: boolean | null;
  chatName: string | null;
  messages?: Array<Message>;
};
