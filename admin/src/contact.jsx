import * as React from "react";
import { Datagrid, List, TextField, DeleteButton } from "react-admin";

export default function ContactList() {
  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="message" />
        <TextField source="name" />
        <TextField source="object" />
        <TextField source="email" />
        <DeleteButton />
      </Datagrid>
    </List>
  );
}
