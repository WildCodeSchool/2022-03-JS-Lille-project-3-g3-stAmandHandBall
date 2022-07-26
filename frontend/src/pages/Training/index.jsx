import BigTitle from "@components/Archi/BigTitle";
import BigPicture from "@components/Archi/BigPicture";
import Title from "@components/Archi/Title";
import universityPicture from "@assets/images/photos/universite.png";
import picto from "@assets/images/logos/sah-icon-li.png";
import { useEffect } from "react";
import STraining from "./style";

export default function Training() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <BigPicture img="test" date="" hour="" club1="" club2="" text="" />
      <STraining picto={picto}>
        <BigTitle title="FORMATION" />
        <h4 className="introduction">
          Le suivi pédagogique des joueuses du Centre de Formation est assuré
          conjointement par le responsable du centre de formation et la
          responsable pédagogique. <br />
          Il a pour objectifs : <br />
          La réussite du double projet de la joueuse
          <br />
          L’accompagnement de la joueuse dans l’obtention d’une formation
          diplômante
          <br />
          La préparation à un projet de reconversion post-handball
        </h4>
        <Title title="Fonctionnement du suivi" />
        <div className="operation">
          <p>
            Afin de permettre un suivi régulier des joueuses du centre de
            formation, le club met en place plusieurs aménagements dans le but
            de favoriser le double projet de la joueuse :
          </p>
          <ul>
            <li>Allongement de la durée des études</li>
            <li>Aménagement de l’emploi du temps scolaire</li>
            <li>Report des partiels</li>
            <li>
              Mise en place, si nécessaire, d’un soutien assuré par le
              responsable socio-pro, un intervenant interne du club ou un
              intervenant externe.
            </li>
            <li>
              Accompagnement dans la construction du projet scolaire et de sa
              mise en œuvre
            </li>
            <li>
              Lieux de stage partenaires pour les joueuses dont la formation
              nécessite un Projet de Fin d’Études
            </li>
          </ul>
        </div>

        <Title title="Listes des formations accessibles" />
        <div className="formationList">
          <img src={universityPicture} alt="university" />
          <h4>
            <em>Université de Valenciennes</em>
          </h4>
          <a
            href="https://formations.uphf.fr/cdm/cursus/licence"
            target="_blank"
            rel="noreferrer noopener"
          >
            https://formations.uphf.fr/cdm/cursus/licence
          </a>
          <ul>
            <li> diverses Licences en Droit, Economie et Gestion</li>
            <li> diverses Licences en Arts, Lettres et Langues</li>
            <li> diverses Licences en Sciences, Technologies et Santé</li>
            <li> diverses Licences en Sciences humaines et sociales</li>
          </ul>
          <h4>
            <em>IUT de Valenciennes</em>
          </h4>
          <a
            href="https://formations.uphf.fr/cdm/cursus/licence"
            target="_blank"
            rel="noreferrer noopener"
          >
            https://formations.uphf.fr/cdm/cursus/licence
          </a>
          <ul>
            <li>divers DUT en Droit, Economie et Gestion</li>
            <li>divers DUT en Sciences, Technologies et santé</li>
          </ul>
          <h4>
            <em>Lycée Ernest Couteaux de Saint-Amand-les-Eaux</em>
          </h4>
          <ul>
            <li>BTS comptabilité Gestion</li>
          </ul>
          <h4>
            <em>Lycée La Sagesse de Valenciennes</em>
          </h4>
          <ul>
            <li>BTS ESF</li>
          </ul>
          <p>Possibilité de cursus à distance</p>
        </div>
      </STraining>
    </>
  );
}
