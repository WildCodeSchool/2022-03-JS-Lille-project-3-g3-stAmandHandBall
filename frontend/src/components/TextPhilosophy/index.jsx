import CardPlayer from "@components/CardPlayer";
import Title from "@components/Archi/Title";
import { useContext } from "react";
import ctxProvider from "@services/context/Ctx";
import STextPhilosophy from "./style";

export default function TextPhilosophy() {
  const { players } = useContext(ctxProvider);

  return (
    <STextPhilosophy>
      <article className="presentationText">
        <p>
          Agréé depuis mai 2018, le Centre de Formation du SAH-PH est labellisé
          par le Ministère chargé des Sports et reconnu par la Fédération
          Française de Handball. Ce dispositif permet à un groupe de jeunes
          joueuses à potentiel de pouvoir être former au métier d’handballeuse
          professionnelle.
        </p>
        <p>
          Tout au long de ce cursus les joueuses et quel que soit l’issue de la
          formation sportive, le club s’engage à former des femmes équilibrées,
          respectant les valeurs de la société et du club : Travail, Confiance,
          Solidarité.
        </p>
        <p>
          Le SAH-PH met un point d’honneur à ce que les jeunes joueuses
          réussissent à mener des études universitaires ou professionnelles en
          parallèle de leur réussite sportive.
        </p>
      </article>
      <br />
      <Title title="Editos" />
      <article className="left">
        <div className="image">
          {players
            .filter((player) => player.id === 5)
            .map((player) => {
              return (
                <CardPlayer
                  key={player.id}
                  name={`${player.firstname} ${player.lastname}`}
                  img={`./src/assets/images/cards/players/${
                    player.img || "test.png"
                  } 
             `}
                  number={player.number}
                />
              );
            })}
        </div>
        <div className="descriptionText">
          <h3 className="yellow"> PRESIDENTE DU CLUB</h3>
          <p>
            « Nous souhaitons que notre centre de formation soit une source
            d’épanouissement individuel pour les jeunes joueuses à haut
            potentiel. Avec un accompagnement rigoureux tant sur l’aspect
            sportif que pédagogique. Tous deux nécessaires au développement de
            nos jeunes athlètes et futures championnes de demain. »
          </p>
        </div>
      </article>
      <article className="right">
        <div className="image">
          {players
            .filter((player) => player.id === 5)
            .map((player) => {
              return (
                <CardPlayer
                  key={player.id}
                  name={`${player.firstname} ${player.lastname}`}
                  img={`./src/assets/images/cards/players/${
                    player.img || "test.png"
                  } 
                `}
                  number={player.number}
                />
              );
            })}
        </div>
        <div className="descriptifText">
          <h3 className="yellow"> RESPONSABLE DU CENTRE DE FORMATION</h3>
          <p>
            « Le centre de formation du SAH-PH a pour objectif premier de réunir
            de véritables jeunes joueuses potentielles et de les préparer aux
            exigences du handball de haut niveau. Au-delà de la construction
            sportive de l’individu, son développement personnel et professionnel
            est au cœur des préoccupations de la structure »
          </p>
        </div>
      </article>
      <article className="left">
        <div className="image">
          {players
            .filter((player) => player.id === 5)
            .map((player) => {
              return (
                <CardPlayer
                  key={player.id}
                  name={`${player.firstname} ${player.lastname}`}
                  img={`./src/assets/images/cards/players/${
                    player.img || "test.png"
                  } 
             `}
                  number={player.number}
                />
              );
            })}
        </div>
        <div className="descriptifText">
          <h3 className="yellow"> PRESIDENTE DU CLUB</h3>
          <p>
            « Nous souhaitons que notre centre de formation soit une source
            d’épanouissement individuel pour les jeunes joueuses à haut
            potentiel. Avec un accompagnement rigoureux tant sur l’aspect
            sportif que pédagogique. Tous deux nécessaires au développement de
            nos jeunes athlètes et futures championnes de demain. »
          </p>
        </div>
      </article>
      <article className="right">
        <div className="image">
          {players
            .filter((player) => player.id === 5)
            .map((player) => {
              return (
                <CardPlayer
                  key={player.id}
                  name={`${player.firstname} ${player.lastname}`}
                  img={`./src/assets/images/cards/players/${
                    player.img || "test.png"
                  } 
                `}
                  number={player.number}
                />
              );
            })}
        </div>
        <div className="descriptifText">
          <h3 className="yellow"> RESPONSABLE DU CENTRE DE FORMATION</h3>
          <p>
            « Le centre de formation du SAH-PH a pour objectif premier de réunir
            de véritables jeunes joueuses potentielles et de les préparer aux
            exigences du handball de haut niveau. Au-delà de la construction
            sportive de l’individu, son développement personnel et professionnel
            est au cœur des préoccupations de la structure »
          </p>
        </div>
      </article>
      <br />
      <article>
        <p>
          Pour tout complément d’information, on vous invite à nous solliciter
          aux coordonnées suivantes : centredeformation@sah-ph.fr
        </p>
        <h3 className="yellow">
          Liste des joueuses passées dans la formation amandinoise :
        </h3>
        <ul className="playerList">
          <li>Claire Vautier – 2019</li>
          <li>Chloé Bellonnet – 2018-2020</li>
          <li>Chloé Pugliese – 2019-2020</li>
          <li>Lili Herenger – 2018-2020</li>
          <li>Yasmine Massa – 2018-2021</li>
          <li>Manon Pellerin – 2020-2022</li>
        </ul>
      </article>
    </STextPhilosophy>
  );
}
