import BigTitle from "@components/Archi/BigTitle";
import BigPicture from "@components/Archi/BigPicture";
import Title from "@components/Archi/Title";
import Arrow from "@components/Archi/Arrow";
import ctxProvider from "@services/context/Ctx";
import { useContext, useEffect } from "react";
import CardStaff from "@components/CardStaff";
import SStaff from "./style";

export default function Staff() {
  const { staff } = useContext(ctxProvider);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <BigPicture img="test" date="" hour="" club1="" club2="" text="" />
      <BigTitle title="LES CHEFS DE MEUTE" />
      <SStaff>
        <Title title="BUREAU DIRECTEUR" />
        <section className="rowCard">
          {staff
            .filter((person) => ["BUREAU DIRECTEUR"].includes(person.groupName))
            .map((person) => {
              return (
                <CardStaff
                  key={`${person.id}${person.role_id}${person.staff_id}`}
                  name={`${person.firstname} ${person.lastname}`}
                  img={`./src/assets/images/cards/staff/${person.img}`}
                  role={person.roleName}
                />
              );
            })}
        </section>
        <Arrow />
        <Title title="CONSEIL D’ADMINISTRATION" />
        <section className="rowCard">
          {staff
            .filter((person) =>
              ["CONSEIL D'ADMINISTRATION"].includes(person.groupName)
            )
            .map((person) => {
              return (
                <CardStaff
                  key={`${person.id}${person.role_id}${person.staff_id}`}
                  name={`${person.firstname} ${person.lastname}`}
                  img={`./src/assets/images/cards/staff/${person.img}`}
                  role={person.roleName}
                />
              );
            })}
        </section>
        <Arrow />
        <Title title="LE SPORTIF" />
        <section className="rowCard">
          {staff
            .filter((person) => ["LE SPORTIF"].includes(person.groupName))
            .map((person) => {
              return (
                <CardStaff
                  key={`${person.id}${person.role_id}${person.staff_id}`}
                  name={`${person.firstname} ${person.lastname}`}
                  img={`./src/assets/images/cards/staff/${person.img}`}
                  role={person.roleName}
                />
              );
            })}
        </section>
        <Arrow />
        <Title title="ADMINISTRATIF" />
        <section className="rowCard">
          {staff
            .filter((person) => ["ADMINISTRATIF"].includes(person.groupName))
            .map((person) => {
              return (
                <CardStaff
                  key={`${person.id}${person.role_id}${person.staff_id}`}
                  name={`${person.firstname} ${person.lastname}`}
                  img={`./src/assets/images/cards/staff/${person.img}`}
                  role={person.roleName}
                />
              );
            })}
        </section>
      </SStaff>
    </>
  );
}
