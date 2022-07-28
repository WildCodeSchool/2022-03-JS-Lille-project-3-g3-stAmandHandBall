import CardStaff from "@components/CardStaff";
import ctxProvider from "@services/context/Ctx";
import { useContext } from "react";
import SStaffList from "./style";

export default function StaffList() {
  const { staff } = useContext(ctxProvider);
  return (
    <SStaffList>
      {staff.map((person) => {
        return (
          <CardStaff
            key={person.id}
            name={`${person.firstname} ${person.lastname}`}
            img={`./src/assets/images/cards/staff/${person.img}`}
            function={person.function}
          />
        );
      })}
    </SStaffList>
  );
}
