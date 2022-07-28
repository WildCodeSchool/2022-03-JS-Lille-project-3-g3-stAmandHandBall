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

export function NewListHistory() {
  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="title" label="Date" />
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
        <TextInput source="title" label="Date" />
        <TextInput source="text" />
      </SimpleForm>
    </Edit>
  );
}

export function NewCreateHistory() {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="title" label="Date" />
        <TextInput source="text" />
      </SimpleForm>
    </Create>
  );
}
