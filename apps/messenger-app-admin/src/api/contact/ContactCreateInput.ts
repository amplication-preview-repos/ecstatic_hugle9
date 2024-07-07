import { ContactCreateNestedManyWithoutContactsInput } from "./ContactCreateNestedManyWithoutContactsInput";
import { ContactWhereUniqueInput } from "./ContactWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ContactCreateInput = {
  contacts?: ContactCreateNestedManyWithoutContactsInput;
  contact?: ContactWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
