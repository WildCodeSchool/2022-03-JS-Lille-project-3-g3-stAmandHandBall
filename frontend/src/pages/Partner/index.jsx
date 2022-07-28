import BigPicture from "@components/Archi/BigPicture";
import BigTitle from "@components/Archi/BigTitle";
import Title from "@components/Archi/Title";
import uuid from "react-uuid";
import { useEffect } from "react";

import SPartner from "./style";

export default function Partner() {
  const publicPartners = [
    "region-hdf.png",
    "departement-nord.png",
    "la-porte-du-hainaut.png",
    "st-amand-les-eaux.png",
  ];
  const privatePartners = [
    "les-caves-de-l-abbaye.png",
    "legrand-menuiserie.png",
    "sarp-osis.png",
    "nsa.png",
    "swiss-life.png",
    "transvilles.png",
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <BigPicture img="test" date="" hour="" club1="" club2="" text="" />
      <BigTitle title="LES PARTENAIRES DE LA MEUTE" />
      <SPartner>
        <Title title="Nos partenaires publics" />
        <div className="logo">
          {publicPartners.map((partner) => {
            return (
              <img
                key={uuid()}
                src={`./src/assets/images/logos/partners/${partner} 
             `}
                alt="players"
              />
            );
          })}
        </div>
        <Title title="Nos partenaires privés" />
        <div className="logo">
          {privatePartners.map((partner) => {
            return (
              <img
                key={uuid()}
                src={`./src/assets/images/logos/partners/${partner} 
             `}
                alt="players"
              />
            );
          })}
        </div>
        <Title title="Rejoignez nous !" />
        <p>
          Le Saint Amand Handball - Porte du Hainaut est porteur d’un projet
          sportif ambitieux !
        </p>

        <p>
          Il compte plus de 300 licenciés (filles et garçons) et 17 équipes,
          toutes inscrites en championnat !
        </p>

        <p>
          Depuis 2 ans, le club est dans une dynamique de Responsabilité
          Sociétale des Entreprises (RSE).
        </p>
        <p>
          L’objectif est d’innover POUR et AVEC le Territoire : insertion,
          inclusion, écologie, biodiversité, formation [….] c’est « Ambitions
          2024 » du SAH-PH.
        </p>
        <p>
          Vous souhaitez rejoindre l’aventure ?<br />
          Vous voulez accompagner le club et être acteur du projet ?
        </p>
        <p>
          Contactez Antoine :<br />
          <a href="mailto:partenariat@sah-ph.fr"> partenariat@sah-ph.fr</a>
          <br />
          06 47 18 46 10
        </p>
      </SPartner>
    </>
  );
}
