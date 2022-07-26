import * as React from "react";
import {
  Datagrid,
  List,
  TextField,
  Edit,
  SimpleForm,
  TextInput,
  EditButton,
  Create,
  BooleanInput,
  NumberInput,
  RadioButtonGroupInput,
} from "react-admin";

export function PlayerList() {
  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField source="firstname" />
        <TextField source="lastname" />
        <TextField source="number" />
        <TextField source="position" />
        <TextField source="captain" />
        <TextField source="cf" />
        <TextField source="matchPlayed" />
        <TextField source="goal" />
        <TextField source="goalAverage" />
        <TextField source="stop" />
        <TextField source="penalty" />
        <EditButton />
      </Datagrid>
    </List>
  );
}

export function PostEdit() {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="lastname" />
        <TextInput source="firstname" />
        <NumberInput source="number" />
        <RadioButtonGroupInput
          source="position"
          choices={[
            { id: "AiliereDroite", name: "Ailière droite" },
            { id: "ArriereDroite", name: "Arrière droite" },
            { id: "Pivot", name: "Pivot" },
            { id: "DemieCentre", name: "Demie centre" },
            { id: "AiliereGauche", name: "Ailière gauche" },
            { id: "ArriereDroite", name: "Arriàre droite" },
            { id: "Gardienne", name: "Gardienne" },
            { id: "non", name: "non" },
          ]}
        />
        <BooleanInput label="captain" source="captain" />
        <BooleanInput label="cf" source="cf" />
        <NumberInput source="matchPlayed" />
        <NumberInput source="goal" />
        <NumberInput source="goalAverage" />
        <NumberInput source="stop" />
        <NumberInput source="penalty" />
      </SimpleForm>
    </Edit>
  );
}

export function PostCreate() {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="lastname" />
        <TextInput source="firstname" />
        <NumberInput source="number" />
        <RadioButtonGroupInput
          source="position"
          choices={[
            { id: "AiliereDroite", name: "Ailière droite" },
            { id: "ArriereDroite", name: "Arrière droite" },
            { id: "Pivot", name: "Pivot" },
            { id: "DemieCentre", name: "Demie centre" },
            { id: "AiliereGauche", name: "Ailière gauche" },
            { id: "ArriereDroite", name: "Arriàre droite" },
            { id: "Gardienne", name: "Gardienne" },
            { id: "non", name: "non" },
          ]}
        />
        <BooleanInput label="captain" source="captain" />
        <BooleanInput label="cf" source="cf" />
        <NumberInput source="matchPlayed" />
        <NumberInput source="goal" />
        <NumberInput source="goalAverage" />
        <NumberInput source="stop" />
        <NumberInput source="penalty" />
      </SimpleForm>
    </Create>
  );
}
