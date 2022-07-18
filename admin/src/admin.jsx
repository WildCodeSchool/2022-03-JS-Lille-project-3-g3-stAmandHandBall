import * as React from "react";
import {
  Datagrid,
  List,
  TextField,
  SimpleForm,
  TextInput,
  Create,
} from "react-admin";

export function NewListAdmin() {
  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField source="email" />
      </Datagrid>
    </List>
  );
}

export function NewCreateAdmin() {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="email" />
        <TextInput source="password" />
      </SimpleForm>
    </Create>
  );
}
