import * as React from "react";
import {
  Datagrid,
  List,
  TextField,
  Edit,
  SimpleForm,
  TextInput,
  EditButton,
  DeleteButton,
  Create,
} from "react-admin";
import { RichTextInput } from "ra-input-rich-text";

export function NewListHistory() {
  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="title" />
        <TextField source="text" />
        <DeleteButton />
        <EditButton />
      </Datagrid>
    </List>
  );
}

export function NewEditHistory() {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="title" />
        <RichTextInput source="text" />
      </SimpleForm>
    </Edit>
  );
}

export function NewCreateHistory() {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="title" />
        <RichTextInput source="text" />
      </SimpleForm>
    </Create>
  );
}
