import CardStaff from "@components/CardStaff";
import ctxProvider from "@services/context/Ctx";
import { useContext } from "react";
import SStafFilter from "./style";

export default function StaffFilter() {
  const { staff } = useContext(ctxProvider);
  return (
    <SStafFilter>
      {staff
        .filter((person) => [17, 18, 19].includes(person.role_id))
        .map((person) => {
          return (
            <CardStaff
              key={person.id}
              name={`${person.firstname} ${person.lastname}`}
              img={`./src/assets/images/cards/staff/${person.img}`}
              function={person.function}
            />
          );
        })}
    </SStafFilter>
  );
}
