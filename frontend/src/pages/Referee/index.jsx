import Arrow from "@components/Archi/Arrow";
import BigPicture from "@components/Archi/BigPicture";
import BigTitle from "@components/Archi/BigTitle";
import Title from "@components/Archi/Title";
import CardReferee from "@components/CardReferee";
import ctxProvider from "@services/context/Ctx";
import { useContext, useEffect } from "react";
import SReferee from "./style";

export default function Referee() {
  const { referee } = useContext(ctxProvider);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <BigPicture img="test" date="" hour="" club1="" club2="" text="" />
      <BigTitle title="LES ARBITRES DE LA MEUTE" />
      <SReferee>
        <Title title="REGION" />
        <section className="rowCard">
          {referee
            .filter((person) => [25, 26, 27, 28, 29].includes(person.role_id))
            .map((person) => {
              return (
                <CardReferee
                  key={`${person.id} ${person.firstname} ${person.lastname}`}
                  name={`${person.firstname} ${person.lastname}`}
                  img={`./src/assets/images/cards/staff/${person.img}`}
                  role={person.name}
                />
              );
            })}
        </section>
        <Arrow />
        <Title title="DEPARTEMENT" />
        <section className="rowCard">
          {referee
            .filter((person) => [24, 30].includes(person.role_id))
            .map((person) => {
              return (
                <CardReferee
                  key={`${person.id} ${person.firstname} ${person.lastname}`}
                  name={`${person.firstname} ${person.lastname}`}
                  img={`./src/assets/images/cards/staff/${person.img}`}
                  role={person.name}
                />
              );
            })}
        </section>
      </SReferee>
    </>
  );
}
