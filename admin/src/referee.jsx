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

export function NewListReferee() {
  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="lastname" />
        <TextField source="firstname" />
        <TextField source="division" />
        <TextField source="img" />
        <TextField source="role_id" />
        <DeleteButton />
        <EditButton />
      </Datagrid>
    </List>
  );
}

export function NewEditReferee() {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="lastname" />
        <TextInput source="firstname" />
        <TextInput source="division" />
        <TextInput source="img" />
        <TextInput source="role_id" />
      </SimpleForm>
    </Edit>
  );
}

export function NewCreateReferee() {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="lastname" />
        <TextInput source="firstname" />
        <TextInput source="division" />
        <TextInput source="img" />
        <TextInput source="role_id" />
      </SimpleForm>
    </Create>
  );
}
