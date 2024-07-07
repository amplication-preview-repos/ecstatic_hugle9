import { SortOrder } from "../../util/SortOrder";

export type ChatOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  isGroup?: SortOrder;
  chatName?: SortOrder;
};
