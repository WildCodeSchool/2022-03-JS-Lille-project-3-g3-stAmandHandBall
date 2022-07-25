import Arrow from "@components/Archi/Arrow";
import BigPicture from "@components/Archi/BigPicture";
import BigTitle from "@components/Archi/BigTitle";
import Title from "@components/Archi/Title";
import CardStaff from "@components/CardStaff";
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
            .filter((person) => ["LBE"].includes(person.title))
            .map((person) => {
              return (
                <CardStaff
                  key={person.id}
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
          {team
            .filter((person) =>
              [
                "N1F",
                "U18F",
                "N3F",
                "U17F",
                "U15F1",
                "U15F2",
                "U13F",
                "U11F",
              ].includes(person.title)
            )
            .map((person) => {
              return (
                <CardStaff
                  key={person.id}
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
          {team
            .filter((person) =>
              ["U15G", "U13G", "U11G", "SG"].includes(person.title)
            )
            .map((person) => {
              return (
                <CardStaff
                  key={person.id}
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
          {team
            .filter((person) => ["Mini", "Baby"].includes(person.title))
            .map((person) => {
              return (
                <CardStaff
                  key={person.id}
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
