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

export function NewListTeam() {
  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="title" />
        <TextField source="division" />
        <TextField source="img" />
        <DeleteButton />
        <EditButton />
      </Datagrid>
    </List>
  );
}

export function NewEditTeam() {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="title" />
        <TextInput source="division" />
        <TextInput source="img" />
      </SimpleForm>
    </Edit>
  );
}

export function NewCreateTeam() {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="title" />
        <TextInput source="division" />
        <TextInput source="img" />
      </SimpleForm>
    </Create>
  );
}
