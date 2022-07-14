import CardStaff from "@components/CardStaff";
import ctxProvider from "@services/context/Ctx";
import { useContext } from "react";
import SRefereeList from "./style";

export default function RefereeList() {
  const { referee } = useContext(ctxProvider);
  return (
    <SRefereeList>
      {referee.map((person) => {
        return (
          <CardStaff
            key={person.id}
            name={`${person.firstname} ${person.lastname}`}
            img={`./src/assets/images/cards/referee/${person.img}`}
            role={person.name}
          />
        );
      })}
    </SRefereeList>
  );
}
