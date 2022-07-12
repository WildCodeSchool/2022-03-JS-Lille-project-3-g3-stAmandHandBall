import BigTitle from "@components/Archi/BigTitle";
import BigPicture from "@components/Archi/BigPicture";
import Title from "@components/Archi/Title";
import Arrow from "@components/Archi/Arrow";
import ctxProvider from "@services/context/Ctx";
import { useContext } from "react";
import CardStaff from "@components/CardStaff";
import SStaff from "./style";

export default function Staff() {
  const { staff } = useContext(ctxProvider);
  return (
    <>
      <BigPicture img="test" date="" hour="" club1="" club2="" text="" />
      <BigTitle title="LES CHEFS DE MEUTE" />
      <SStaff>
        <Title title="BUREAU DIRECTEUR" />
        <section className="rowCard">
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
        </section>
        <Arrow />
        <Title title="CONSEIL D’ADMINISTRATION" />
        <section className="rowCard">
          {staff
            .filter((person) => [20].includes(person.role_id))
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
        </section>
        <Arrow />
        <Title title="LE SPORTIF" />
        <section className="rowCard">
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
        </section>
        <Arrow />
        <Title title="ADMINISTRATIF" />
        <section className="rowCard">
          {staff
            .filter((person) => [12, 13, 14, 15, 16].includes(person.role_id))
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
        </section>
      </SStaff>
    </>
  );
}
