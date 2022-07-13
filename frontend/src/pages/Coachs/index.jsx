import Arrow from "@components/Archi/Arrow";
import BigPicture from "@components/Archi/BigPicture";
import BigTitle from "@components/Archi/BigTitle";
import Title from "@components/Archi/Title";
import CardStaff from "@components/CardStaff";
import StaffList from "@components/StaffList";
import ctxProvider from "@services/context/Ctx";
import { useContext } from "react";
import SCoachs from "./style";

export default function Coachs() {
  const { team } = useContext(ctxProvider);
  return (
    <>
      <BigPicture img="test" date="" hour="" club1="" club2="" text="" />
      <BigTitle title="Bergers Des Louveteaux" />
      <SCoachs>
        <Title title="FILIERE PRO" />
        <section className="rowCard">
          {team
            .filter((person) => ["Baby"].includes(person.title))
            .map((person) => {
              return (
                <CardStaff
                  key={person.id}
                  name={`${person.firstname} ${person.lastname}`}
                  img={`./src/assets/images/cards/staff/${person.img}`}
                  role={person.name}
                />
              );
            })}
        </section>
        <Arrow />
        <Title title="FILIERE FILLES" />
        <Arrow />
        <Title title="FILIERE GARCONS" />
        <Arrow />
        <Title title="FILIERE ENFANTS" />
        <StaffList />
      </SCoachs>
    </>
  );
}
