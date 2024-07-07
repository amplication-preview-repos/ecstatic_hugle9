import { StringFilter } from "../../util/StringFilter";
import { ContactListRelationFilter } from "./ContactListRelationFilter";
import { ContactWhereUniqueInput } from "./ContactWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ContactWhereInput = {
  id?: StringFilter;
  contacts?: ContactListRelationFilter;
  contact?: ContactWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
