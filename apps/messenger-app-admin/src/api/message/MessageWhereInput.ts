import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { ChatWhereUniqueInput } from "../chat/ChatWhereUniqueInput";

export type MessageWhereInput = {
  id?: StringFilter;
  content?: StringNullableFilter;
  timestamp?: DateTimeNullableFilter;
  sender?: StringNullableFilter;
  chat?: ChatWhereUniqueInput;
};
