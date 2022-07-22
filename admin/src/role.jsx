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

export function NewListRole() {
  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="group" />
        <DeleteButton />
        <EditButton />
      </Datagrid>
    </List>
  );
}

export function NewEditRole() {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="name" />
        <TextInput source="group" />
      </SimpleForm>
    </Edit>
  );
}

export function NewCreateRole() {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="name" />
        <TextInput source="group" />
      </SimpleForm>
    </Create>
  );
}
