import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { MessageListRelationFilter } from "../message/MessageListRelationFilter";

export type ChatWhereInput = {
  id?: StringFilter;
  isGroup?: BooleanNullableFilter;
  chatName?: StringNullableFilter;
  messages?: MessageListRelationFilter;
};
