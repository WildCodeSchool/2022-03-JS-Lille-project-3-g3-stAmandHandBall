import CardStaff from "@components/CardStaff";
import ctxProvider from "@services/context/Ctx";
import { useContext } from "react";
import SStaffList from "./style";

export default function StaffList() {
  const { staffs } = useContext(ctxProvider);
  return (
    <SStaffList>
      {staffs.map((staff) => {
        return (
          <CardStaff
            key={staff.id}
            name={`${staff.firstname} ${staff.lastname}`}
            img={`./src/assets/images/cards/staff/${staff.img}`}
            function={staff.function}
          />
        );
      })}
    </SStaffList>
  );
}
