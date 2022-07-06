import BigTitle from "@components/Archi/BigTitle";
import BigPicture from "@components/Archi/BigPicture";
import Title from "@components/Archi/Title";
import map from "@assets/images/elements/plan.png";
import image from "@assets/images/photos/life-style-1.png";
import SLifeStyle from "./style";

export default function LifeStyle() {
  return (
    <>
      <BigPicture img="test" date="" hour="" club1="" club2="" text="" />
      <SLifeStyle>
        <BigTitle title="VIE QUOTIDIENNE" />
        <h4>
          Saint-Amand-les-Eaux est une ville de 16 000 habitants, intégrée à La
          Porte du Hainaut (160 000 habitants), composée de 47 communes. La
          ville de Saint-Amand se situe près de Valenciennes et Lille ainsi qu’à
          200 kilomètres de Paris (1h30 en TGV). C’est une ville connectée et
          desservie par les transports de la région. Cette proximité permet une
          liberté de voyager sur toutes les métropoles facilement. Une gare SNCF
          se situe dans la ville sur la ligne TER Maubeuge-Lille. L’aéroport de
          Lille-Lesquin est à moins de 30km de Saint Amand. C’est une ville qui
          est aussi proche de la frontière belge, avec des villes comme Tournai
          et Mons. Grâce au réseau Transvilles il est facile de parcourir le
          territoire de l’Amandinois et du Valenciennois en bus.
        </h4>
        <Title title="Logements" />
        <div className="housing">
          <p>
            Le club met à disposition des joueuses du centre de formation des
            logements. Les joueuses sont logées en colocation dans une maison et
            un appartement. Voici la représentation de ces deux lieux de vie :
          </p>
          <h3 className="yellow">Maison</h3>
          <p>
            Maison de type T4, entretenue régulièrement par les services de la
            ville, pouvant accueillir 3 joueuses du CF. Située en cœur de ville
            et à moins de 10 minutes à pied des différentes installations
            sportives.
          </p>
          <div className="photos">
            <img src={image} alt="home-image1" className="map" />
            <img src={image} alt="home-image2" className="map" />
          </div>
          <h3 className="yellow">Appartement</h3>
          <p>
            Appartement de type T4 entretenu par un bailleur et pouvant
            accueillir 3 joueuses du CF. Situé à proximité des installations
            sportives et proche du centre-ville.
          </p>
          <div className="photos">
            <img src={image} alt="apartment-image1" className="map" />
            <img src={image} alt="apartment-image2" className="map" />
          </div>
        </div>
        <Title title="Installations sportives" />
        <div className="installations">
          <p>
            Le groupe du centre de Formation évolue principalement au{" "}
            <em>Complexe Verdavaine.</em> C’est un pôle d’équipements de
            qualité, mis à disposition par la ville de Saint Amand Les Eaux. Il
            est composé d’une piste d’athlétisme, d’une salle de musculation et
            d’une salle d’entrainement.
          </p>
          <div className="photos">
            <img src={image} alt="installation1" className="map" />
            <img src={image} alt="installation2" className="map" />
          </div>
          <p>
            Les matchs à domicile de l’équipe première se jouent à la{" "}
            <em>salle Maurice Hugot.</em> Les joueuses s’entrainent également
            dans cette salle.
          </p>
          <div className="photos">
            <img src={image} alt="installation3" className="map" />
            <img src={image} alt="installation4" className="map" />
          </div>
          <p>
            Dans le cadre de leur préparation physique, les joueuses effectuent
            les séances de musculation dans une salle complétement équipée chez
            notre partenaire, <em>L’Orange Bleue.</em>
          </p>
          <div className="photos">
            <img src={image} alt="installation5" className="map" />
            <img src={image} alt="installation6" className="map" />
          </div>
        </div>
        <Title title="Plan des lieux de vie" />
        <div className="map">
          <img src={map} alt="map" className="map" />
        </div>
      </SLifeStyle>
    </>
  );
}
