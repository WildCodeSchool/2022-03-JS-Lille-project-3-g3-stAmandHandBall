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
            { id: "AilierDroit", name: "Ailier droit" },
            { id: "ArriereDroit", name: "Arriere droit" },
            { id: "Pivot", name: "Pivot" },
            { id: "DemiCentre", name: "Demi centre" },
            { id: "AilierGauche", name: "Ailier gauche" },
            { id: "ArriereDroit", name: "Arriere droit" },
            { id: "non", name: "non" },
          ]}
        />
        <BooleanInput label="captain" source="captain" />
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
            { id: "AilierDroit", name: "Ailier droit" },
            { id: "ArriereDroit", name: "Arriere droit" },
            { id: "Pivot", name: "Pivot" },
            { id: "DemiCentre", name: "Demi centre" },
            { id: "AilierGauche", name: "Ailier gauche" },
            { id: "ArriereDroit", name: "Arriere droit" },
            { id: "non", name: "non" },
          ]}
        />
        <BooleanInput label="captain" source="captain" />
        <NumberInput source="matchPlayed" />
        <NumberInput source="goal" />
        <NumberInput source="goalAverage" />
        <NumberInput source="stop" />
        <NumberInput source="penalty" />
      </SimpleForm>
    </Create>
  );
}
