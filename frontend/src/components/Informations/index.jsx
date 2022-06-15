import Title from "@components/Archi/Title";
import SInformations from "./style";

export default function Informations() {
  return (
    <SInformations>
      <Title title="INFORMATIONS" />
      <p>
        232, rue Emile Seigneuret <br />
        59230 Saint-Amand-Les-Eaux
      </p>
      <p>03 27 21 28 14</p>
      <p className="schedules">
        Ouvert : Lundi 9:00 - 12:00, 14:00 - 17:00 <br />
        Mardi 9:00 - 12:00, 14:00 - 17:00 <br />
        Mercredi 9:00 - 12:00, 14:00 - 17:00 <br />
        Jeudi 9:00 - 12:00, 14:00 - 17:00 <br />
        Vendredi 9:00 - 12:00, 14:00 - 17:00
      </p>
      <div className="map">
        <iframe
          title="ap Saint Armand club handball"
          className="googleMap"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.50954783881!2d3.442407315697803!3d50.45023547947534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c2e8924c2ab30d%3A0x61ef213d93ec5e53!2sSaint-Amand%20Handball!5e0!3m2!1sfr!2sfr!4v1654861904434!5m2!1sfr!2sfr"
          allowFullScreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        />
      </div>
    </SInformations>
  );
}
