import Title from "@components/Archi/Title";
import SInformations from "./style";

export default function Informations() {
  return (
    <SInformations>
      <Title title="INFORMATIONS" />
      <p>
        232, rue Emile Seigneuret 59230 <br />
        Saint-Amand-Les-Eaux
      </p>
      <p>03 27 21 28 14</p>
      <p className="schedules">
        Ouvert : Lundi 9:00 - 12:00, 14:00 - 17:00 <br />
        Mardi 9:00 - 12:00, 14:00 - 17:00 <br />
        Mercredi 9:00 - 12:00, 14:00 - 17:00 <br />
        Jeudi 9:00 - 12:00, 14:00 - 17:00 <br />
        Vendredi 9:00 - 12:00, 14:00 - 17:00
      </p>
      <div className="map">map</div>
    </SInformations>
  );
}
