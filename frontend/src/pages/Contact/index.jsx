import Title from "@components/Archi/Title";
import Arrow from "@components/Archi/Arrow";
import SContact from "./style";

export default function Contact() {
  return (
    <SContact>
      <div className="contact">
        <Title title="CONTACT" />
        <p>
          Pour toutes demandes d’informations, contactez-nous via notre
          formulaire ci dessous. Nous vous apporterons une réponse rapidement
        </p>
        <form action="">
          <input id="xx" name="xx" value="NOM :" />
          <input id="xx" name="xx" value="EMAIL :" />
          <input id="xx" name="xx" value="SUJET :" />
          <textarea id="xx" name="xx" rows="5" cols="33" value="MESSAGE :" />
          <input type="submit" value="ENVOYER LE MESSAGE" />
        </form>
        {/* <div className="arrow"> */}
        <Arrow />
        <div className="informations">
          <Title title="INFORMATIONS" />
          <p>232, rue Emile Seigneuret 59230 Saint-Amand-Les-Eaux</p>
          <p>03 27 21 28 14</p>
          <p className="schedules">
            Ouvert : Lundi 9:00 - 12:00, 14:00 - 17:00 Mardi 9:00 - 12:00, 14:00
            - 17:00 Mercredi 9:00 - 12:00, 14:00 - 17:00 Jeudi 9:00 - 12:00,
            14:00 - 17:00 Vendredi 9:00 - 12:00, 14:00 - 17:00
          </p>
          <div className="map">map</div>
        </div>
      </div>
    </SContact>
  );
}
