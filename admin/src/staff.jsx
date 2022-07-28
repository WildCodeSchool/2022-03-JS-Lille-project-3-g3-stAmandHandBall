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
  BooleanInput,
} from "react-admin";

export function NewListStaff() {
  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField source="lastname" />
        <TextField source="firstname" />
        <TextField source="img" />
        <TextField source="cf" label="centre de formation" />
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
        <BooleanInput label="centre de formation" source="cf" />
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
        <BooleanInput label="centre de formation" source="cf" />
      </SimpleForm>
    </Create>
  );
}
