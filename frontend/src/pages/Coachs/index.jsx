import Arrow from "@components/Archi/Arrow";
import BigPicture from "@components/Archi/BigPicture";
import BigTitle from "@components/Archi/BigTitle";
import Title from "@components/Archi/Title";
import CardStaff from "@components/CardStaff";
import ctxProvider from "@services/context/Ctx";
import { useContext, useEffect } from "react";
import SCoachs from "./style";

export default function Coachs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { staff } = useContext(ctxProvider);

  return (
    <>
      <BigPicture img="test" date="" hour="" club1="" club2="" text="" />
      <BigTitle title="Bergers Des Louveteaux" />
      <SCoachs>
        <Title title="FILIERE PRO" />
        <section className="rowCard">
          {staff
            .filter((person) => ["CF Filière PRO"].includes(person.groupName))
            .map((person) => {
              return (
                <CardStaff
                  key={`${person.id}${person.roleName}${person.groupName}`}
                  name={`${person.firstname} ${person.lastname}`}
                  img={`./src/assets/images/cards/staff/${person.img}`}
                  role={person.title}
                />
              );
            })}
        </section>
        <Arrow />
        <Title title="FILIERE FILLES" />
        <section className="rowCard">
          {staff
            .filter((person) =>
              ["CF Filière filles"].includes(person.groupName)
            )
            .map((person) => {
              return (
                <CardStaff
                  key={`${person.id}${person.roleName}${person.groupName}`}
                  name={`${person.firstname} ${person.lastname}`}
                  img={`./src/assets/images/cards/staff/${person.img}`}
                  role={person.title}
                />
              );
            })}
        </section>
        <Arrow />
        <Title title="FILIERE GARCONS" />
        <section className="rowCard">
          {staff
            .filter((person) =>
              ["CF Filière garçons"].includes(person.groupName)
            )
            .map((person) => {
              return (
                <CardStaff
                  key={`${person.id}${person.roleName}${person.groupName}`}
                  name={`${person.firstname} ${person.lastname}`}
                  img={`./src/assets/images/cards/staff/${person.img}`}
                  role={person.title}
                />
              );
            })}
        </section>
        <Arrow />
        <Title title="FILIERE ENFANTS" />
        <section className="rowCard">
          {staff
            .filter((person) =>
              ["CF Filière enfants"].includes(person.groupName)
            )
            .map((person) => {
              return (
                <CardStaff
                  key={`${person.id}${person.roleName}${person.groupName}`}
                  name={`${person.firstname} ${person.lastname}`}
                  img={`./src/assets/images/cards/staff/${person.img}`}
                  role={person.title}
                />
              );
            })}
        </section>
      </SCoachs>
    </>
  );
}
