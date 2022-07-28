import * as React from "react";
import {
  Datagrid,
  List,
  TextField,
  Edit,
  SimpleForm,
  TextInput,
  EditButton,
  Create,
  DateTimeInput,
  DateField,
} from "react-admin";
import { RichTextInput } from "ra-input-rich-text";

export function NewList() {
  return (
    <List>
      <Datagrid rowClick="edit">
        <DateField source="publishedAt" />
        <TextField source="title" />
        <TextField source="subTitle" />
        <TextField source="content" />
        <EditButton />
      </Datagrid>
    </List>
  );
}

export function NewEdit() {
  return (
    <Edit>
      <SimpleForm>
        <DateTimeInput source="publishedAt" />
        <TextInput source="title" />
        <TextInput source="subTitle" />
        <RichTextInput source="content" />
      </SimpleForm>
    </Edit>
  );
}

export function NewCreate() {
  return (
    <Create>
      <SimpleForm>
        <DateTimeInput source="publishedAt" />
        <TextInput source="title" />
        <TextInput source="subTitle" />
        <RichTextInput source="content" />
      </SimpleForm>
    </Create>
  );
}
