import { User } from "../user/User";

export type Contact = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  contacts?: Array<Contact>;
  contact?: Contact | null;
  user?: User | null;
};
