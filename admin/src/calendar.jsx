import * as React from "react";
import {
  Datagrid,
  List,
  TextField,
  Edit,
  SimpleForm,
  TextInput,
  EditButton,
  DateInput,
  DateField,
  NumberInput,
  BooleanInput,
  Create,
  DeleteButton,
} from "react-admin";

export function NewListCalendar() {
  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField source="day" />
        <TextField source="isHome" />
        <DateField source="happenedAt" />
        <TextField source="result" />
        <TextField source="opponent" />
        <TextField source="opponent_id" />
        <TextField source="place" />
        <TextField source="news_id" />
        <DeleteButton />
        <EditButton />
      </Datagrid>
    </List>
  );
}

export function NewEditCalendar() {
  return (
    <Edit>
      <SimpleForm>
        <NumberInput source="day" />
        <BooleanInput source="isHome" />
        <DateInput source="happenedAt" />
        <TextInput source="result" />
        <TextInput source="opponent" />
        <NumberInput source="opponent_id" />
        <TextInput source="place" />
        <NumberInput source="new_id" />
      </SimpleForm>
    </Edit>
  );
}

export function NewCreateCalendar() {
  return (
    <Create>
      <SimpleForm>
        <NumberInput source="day" />
        <BooleanInput source="isHome" />
        <DateInput source="happenedAt" />
        <TextInput source="result" />
        <TextInput source="opponent" />
        <NumberInput source="opponent_id" />
        <TextInput source="place" />
        <NumberInput source="new_id" />
      </SimpleForm>
    </Create>
  );
}
