import { ContactUpdateManyWithoutContactsInput } from "./ContactUpdateManyWithoutContactsInput";
import { ContactWhereUniqueInput } from "./ContactWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ContactUpdateInput = {
  contacts?: ContactUpdateManyWithoutContactsInput;
  contact?: ContactWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
