import BigTitle from "@components/Archi/BigTitle";
import BigPicture from "@components/Archi/BigPicture";
import Title from "@components/Archi/Title";
import PlayerList from "@components/PlayerList";
import CardStaff from "@components/CardStaff";
import { useContext } from "react";
import ctxProvider from "@services/context/Ctx";
import SFirstTeam from "./style";

export default function FirstTeam() {
  const { staff } = useContext(ctxProvider);
  return (
    <>
      <BigPicture img="test" date="" hour="" club1="" club2="" text="" />
      <BigTitle title="LES LOUVES" />
      <SFirstTeam>
        <Title title="JOUEUSES" />
        <PlayerList />
        <Title title="STAFF" />
        <section className="rowCard">
          {staff
            .filter((person) => [17, 18, 19].includes(person.role_id))
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
      </SFirstTeam>
    </>
  );
}
