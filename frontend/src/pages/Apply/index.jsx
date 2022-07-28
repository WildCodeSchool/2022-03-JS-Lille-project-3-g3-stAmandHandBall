import BigTitle from "@components/Archi/BigTitle";
import BigPicture from "@components/Archi/BigPicture";
import universityPicture from "@assets/images/photos/universite.png";
import { useEffect } from "react";
import SApply from "./style";

export default function Apply() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <BigPicture img="test" date="" hour="" club1="" club2="" text="" />
      <SApply>
        <BigTitle title="CANDIDATURE" />
        <h4>
          Vous souhaitez postuler pour le Centre de Formation du Saint-Amand
          Handball Porte du Hainaut ?
        </h4>
        <p>
          Nous vous prions de suivre les démarches suivantes remplir le dossier
          de candidature à télécharger ici.
        </p>
        <p>
          Date d’ouverture des candidatures : <em>07 Février 2022</em> <br />
          Date limite de dépôt du dossier de candidature : <em>16 Mai 2022</em>
        </p>
        <p>
          Les candidatures sont à envoyer à : <br />
          Saint-Amand Handball Porte du Hainaut <br />
          232, rue Émile Seigneuret <br />
          59230 SAINT-AMAND-LES-EAUX
        </p>
        <p>
          Pour tous renseignements, vous pouvez contacter le staff du Centre de
          Formation par email :
          <a href="centredeformation@sah-ph.fr"> centredeformation@sah-ph.fr</a>
        </p>

        <img src={universityPicture} alt="university" />
      </SApply>
    </>
  );
}
