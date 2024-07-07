import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ChatTitle } from "../chat/ChatTitle";

export const MessageCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="content" multiline source="content" />
        <DateTimeInput label="timestamp" source="timestamp" />
        <TextInput label="Sender" source="sender" />
        <ReferenceInput source="chat.id" reference="Chat" label="Chat">
          <SelectInput optionText={ChatTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
