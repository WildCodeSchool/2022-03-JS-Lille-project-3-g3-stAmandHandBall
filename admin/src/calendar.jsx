import * as React from "react";
import {
  Datagrid,
  List,
  TextField,
  Edit,
  SimpleForm,
  TextInput,
  EditButton,
  DateField,
  NumberInput,
  BooleanInput,
  Create,
  DeleteButton,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
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
        <DateTimeInput
          source="happenedAt"
          locales="es-UY"
          options={{ timeZone: "UTC" }}
        />
        <TextInput source="result" />
        <ReferenceInput
          label="Opponent"
          reference="opponent"
          source="opponent_id"
        >
          <SelectInput optionText="name" />
        </ReferenceInput>
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
        <DateTimeInput source="happenedAt" />
        <TextInput source="result" />
        <TextInput source="opponent" />
        <NumberInput source="opponent_id" />
        <TextInput source="place" />
        <NumberInput source="new_id" />
      </SimpleForm>
    </Create>
  );
}
