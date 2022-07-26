import * as React from "react";
import {
  Datagrid,
  List,
  TextField,
  Edit,
  SimpleForm,
  EditButton,
  DeleteButton,
  Create,
  ReferenceInput,
  SelectInput,
  ReferenceField,
} from "react-admin";

export function StaffHasRoleList() {
  return (
    <List>
      <Datagrid rowClick="edit">
        <ReferenceField label="name" source="role_id" reference="role">
          <TextField source="name" />
        </ReferenceField>
        <ReferenceField label="lastname" source="staff_id" reference="staff">
          <TextField source="lastname" />
        </ReferenceField>
        <ReferenceField label="firstname" source="staff_id" reference="staff">
          <TextField source="firstname" />
        </ReferenceField>
        <DeleteButton />
        <EditButton />
      </Datagrid>
    </List>
  );
}

export function StaffHasRoleEdit() {
  return (
    <Edit>
      <SimpleForm>
        <SelectInput optionText="name" />
      </SimpleForm>
    </Edit>
  );
}

export function StaffHasRoleCreate() {
  return (
    <Create>
      <SimpleForm>
        <ReferenceInput
          label="staff_has_role"
          reference="staff_has_role"
          source="role_id"
        >
          <SelectInput optionText="name" />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
}
