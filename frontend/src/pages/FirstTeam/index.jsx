import BigTitle from "@components/Archi/BigTitle";
import BigPicture from "@components/Archi/BigPicture";
import Title from "@components/Archi/Title";
import PlayerList from "@components/PlayerList";
import CardStaff from "@components/CardStaff";
import { useContext, useEffect } from "react";
import ctxProvider from "@services/context/Ctx";
import SFirstTeam from "./style";

export default function FirstTeam() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { team } = useContext(ctxProvider);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <BigPicture img="test" date="" hour="" club1="" club2="" text="" />
      <BigTitle title="LES LOUVES" />
      <SFirstTeam>
        <Title title="JOUEUSES" />
        <PlayerList />
        <Title title="STAFF" />
        <section className="rowCard">
          {team
            .filter((person) => ["D1F"].includes(person.title))
            .map((person) => {
              return (
                <CardStaff
                  key={`${person.id}${person.firstname}${person.lastname}`}
                  name={`${person.firstname} ${person.lastname}`}
                  img={`./src/assets/images/cards/staff/${person.staffImg}`}
                  role={person.name}
                />
              );
            })}
        </section>
      </SFirstTeam>
    </>
  );
}
