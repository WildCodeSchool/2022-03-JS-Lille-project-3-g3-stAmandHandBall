import BigTitle from "@components/Archi/BigTitle";
import BigPicture from "@components/Archi/BigPicture";
import Title from "@components/Archi/Title";
import PlayerList from "@components/PlayerList";
import CardStaff from "@components/CardStaff";
import { useContext, useEffect } from "react";
import ctxProvider from "@services/context/Ctx";
import SHeadCount from "./style";

export default function headCount() {
  const { staff } = useContext(ctxProvider);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <BigPicture img="test" date="" hour="" club1="" club2="" text="" />
      <BigTitle title="EFFECTIF" />
      <SHeadCount>
        <Title title="JOUEUSES" />
        <PlayerList />
        <Title title="STAFF" />
        <p className="staffTxt">
          Le Centre de Formation offre un accompagnement complet des structures
          adaptées aux sportifs, géré par le même staff que l’équipe
          professionnelle : <br />
          <br />
          Prise en charge en début de saison de toute la toute la batterie de
          tests imposée par la FFHB <br />
          Prise en charge diététique et psychologique (1 visite obligatoire +
          suivi si besoin) <br />
          Présence d’un kiné 1x/semaine, du médecin (1h minimum) + lors des
          matchs de l’équipe pro <br />
          Possibilité de joindre le staff médical 7j/24h <br />
          Prise en charge par le médecin dans les 24h en consultation au sein du
          CH de Valenciennes <br />
          Accompagnement des sportives en fin de convention de formation Réunion
          AJPH pour comprendre le fonctionnement et l’environnement du handball
          féminin français <br />
          Réunion prévention et lutte contre les pratiques dopantes
        </p>

        <section className="rowCard">
          {staff
            .filter((person) =>
              [21, 22, 17, 18, 19, 31, 33, 35].includes(person.role_id)
            )
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
      </SHeadCount>
    </>
  );
}
