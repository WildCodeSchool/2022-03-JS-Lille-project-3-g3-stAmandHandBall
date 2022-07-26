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
  ReferenceInput,
  SelectInput,
} from "react-admin";

export function NewListStaff() {
  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField source="lastname" />
        <TextField source="firstname" />
        <TextField source="img" />
        <DeleteButton />
        <EditButton />
      </Datagrid>
    </List>
  );
}

export function NewEditStaff() {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="lastname" />
        <TextInput source="firstname" />
        <TextInput source="img" />
      </SimpleForm>
    </Edit>
  );
}

export function NewCreateStaff() {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="lastname" />
        <TextInput source="firstname" />
        <TextInput source="img" />
      </SimpleForm>
    </Create>
  );
}
