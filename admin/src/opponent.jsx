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

export function NewListOpponent() {
  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="logo" />
        <DeleteButton />
        <EditButton />
      </Datagrid>
    </List>
  );
}

export function NewEditOpponent() {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="name" />
        <TextInput source="logo" />
      </SimpleForm>
    </Edit>
  );
}

export function NewCreateOpponent() {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="name" />
        <TextInput source="logo" />
      </SimpleForm>
    </Create>
  );
}
